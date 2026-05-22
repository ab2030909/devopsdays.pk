# Removes the black background from public/hero-logo.png and writes
# public/hero-logo-transparent.png. Pixels with low brightness are made
# fully transparent; mid-tones are partially transparent so neon glows
# stay soft and natural.
param(
  [string]$Source = (Join-Path $PSScriptRoot "..\public\hero-logo.png"),
  [string]$Dest   = (Join-Path $PSScriptRoot "..\public\hero-logo-transparent.png"),
  # Pixels with max(r,g,b) below this become fully transparent.
  [int]$HardCut   = 30,
  # Pixels with max(r,g,b) above this stay fully opaque.
  [int]$SoftCap   = 90
)

Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Image]::FromFile((Resolve-Path $Source))
$w = $src.Width
$h = $src.Height
Write-Host "Loaded $w x $h"

$bmp = New-Object System.Drawing.Bitmap $src
$src.Dispose()

# Lock bits for fast pixel access
$rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
$data = $bmp.LockBits(
  $rect,
  [System.Drawing.Imaging.ImageLockMode]::ReadWrite,
  [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
)

$stride = $data.Stride
$bytesCount = $stride * $h
$bytes = New-Object byte[] $bytesCount
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytesCount)

# Pixel layout in 32bppArgb is BGRA per pixel.
$range = $SoftCap - $HardCut
for ($y = 0; $y -lt $h; $y++) {
  $rowOff = $y * $stride
  for ($x = 0; $x -lt $w; $x++) {
    $i = $rowOff + ($x * 4)
    $b = $bytes[$i]
    $g = $bytes[$i + 1]
    $r = $bytes[$i + 2]
    $maxC = [Math]::Max([Math]::Max($r, $g), $b)

    if ($maxC -le $HardCut) {
      $bytes[$i + 3] = 0          # alpha 0
    }
    elseif ($maxC -lt $SoftCap) {
      $t = ($maxC - $HardCut) / $range
      $bytes[$i + 3] = [byte]([Math]::Round(255 * $t))
    }
    # else leave alpha as-is (255)
  }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytesCount)
$bmp.UnlockBits($data)

if (Test-Path $Dest) { Remove-Item $Dest -Force }
$bmp.Save($Dest, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Wrote $Dest ($([math]::Round((Get-Item $Dest).Length / 1KB, 1)) KB)"
