# Crops a PNG to its non-transparent bounding box.
# Usage: powershell -File scripts/crop-transparent.ps1 -Source public/cni.png -Dest public/cni-cropped.png
param(
  [Parameter(Mandatory)] [string] $Source,
  [Parameter(Mandatory)] [string] $Dest,
  # any pixel with alpha > AlphaThreshold counts as content
  [int] $AlphaThreshold = 8,
  # extra padding (px) around detected bounds
  [int] $Pad = 8
)

Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Image]::FromFile((Resolve-Path $Source))
$w = $img.Width
$h = $img.Height
$bmp = New-Object System.Drawing.Bitmap $img
$img.Dispose()

# Lock for fast row scan
$rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
$data = $bmp.LockBits(
  $rect,
  [System.Drawing.Imaging.ImageLockMode]::ReadOnly,
  [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
)
$stride = $data.Stride
$bytesCount = $stride * $h
$bytes = New-Object byte[] $bytesCount
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytesCount)
$bmp.UnlockBits($data)

$minX = $w
$minY = $h
$maxX = 0
$maxY = 0

# Sample every 4th pixel to keep it fast on huge images.
$step = [Math]::Max(1, [int]([Math]::Min($w, $h) / 800))

for ($y = 0; $y -lt $h; $y += $step) {
  $rowOff = $y * $stride
  for ($x = 0; $x -lt $w; $x += $step) {
    $a = $bytes[$rowOff + ($x * 4) + 3]
    if ($a -gt $AlphaThreshold) {
      if ($x -lt $minX) { $minX = $x }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}

if ($minX -ge $maxX -or $minY -ge $maxY) {
  Write-Host "no content detected — copying original"
  Copy-Item $Source $Dest -Force
  $bmp.Dispose()
  exit 0
}

# pad and clamp
$minX = [Math]::Max(0, $minX - $Pad)
$minY = [Math]::Max(0, $minY - $Pad)
$maxX = [Math]::Min($w - 1, $maxX + $Pad)
$maxY = [Math]::Min($h - 1, $maxY + $Pad)

$cw = $maxX - $minX + 1
$ch = $maxY - $minY + 1
$cropRect = New-Object System.Drawing.Rectangle $minX, $minY, $cw, $ch

$cropped = $bmp.Clone($cropRect, $bmp.PixelFormat)
if (Test-Path $Dest) { Remove-Item $Dest -Force }
$cropped.Save($Dest, [System.Drawing.Imaging.ImageFormat]::Png)

Write-Host ("cropped {0}x{1} to {2}x{3}  ({4})" -f $w, $h, $cw, $ch, $Dest)
$cropped.Dispose()
$bmp.Dispose()
