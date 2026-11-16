# HopeForScope - Pure PowerShell Local Web Server
param(
  [int]$Port = 5000
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
  $listener.Start()
  Write-Host "==========================================================" -ForegroundColor Cyan
  Write-Host "  HopeForScope Career Guidance Platform" -ForegroundColor Green
  Write-Host "  Tagline: 'Your Future. Your Choices. Your Scope.'" -ForegroundColor Yellow
  Write-Host "  Server running at: $prefix" -ForegroundColor White
  Write-Host "  Press Ctrl+C to stop the server." -ForegroundColor Gray
  Write-Host "==========================================================" -ForegroundColor Cyan

  $rootPath = $PSScriptRoot

  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $urlPath = $request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($urlPath) -or $urlPath -eq "/") {
      $urlPath = "index.html"
    }

    $filePath = Join-Path $rootPath $urlPath

    if (Test-Path $filePath -PathType Leaf) {
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      
      $contentType = "text/plain"
      switch ($ext) {
        ".html" { $contentType = "text/html; charset=utf-8" }
        ".htm"  { $contentType = "text/html; charset=utf-8" }
        ".css"  { $contentType = "text/css; charset=utf-8" }
        ".js"   { $contentType = "application/javascript; charset=utf-8" }
        ".json" { $contentType = "application/json; charset=utf-8" }
        ".png"  { $contentType = "image/png" }
        ".jpg"  { $contentType = "image/jpeg" }
        ".svg"  { $contentType = "image/svg+xml" }
        ".ico"  { $contentType = "image/x-icon" }
      }

      $response.ContentType = $contentType
      $response.ContentLength64 = $bytes.Length
      $response.StatusCode = 200
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $response.StatusCode = 404
      $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
      $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
    }

    $response.OutputStream.Close()
  }
}
catch {
  Write-Host "Server stopped: $_" -ForegroundColor Red
}
finally {
  $listener.Stop()
  $listener.Close()
}
