# Set execution policy for the current process
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force

# Initialize npm project
Write-Host "Initializing npm project..." -ForegroundColor Cyan
npm init -y

# Install required dependencies
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install next@latest react@latest react-dom@latest typescript @types/react @types/node @types/react-dom --save
npm install tailwindcss postcss autoprefixer --save-dev
npm install react-icons --save

# Initialize Tailwind CSS
Write-Host "Setting up Tailwind CSS..." -ForegroundColor Cyan
npx tailwindcss init -p

# Create necessary directories if they don't exist
$directories = @("src/components", "src/data", "src/pages", "public", "styles")
foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
}

Write-Host "`nSetup complete!" -ForegroundColor Green
Write-Host "Run 'npm run dev' to start the development server." -ForegroundColor Green
