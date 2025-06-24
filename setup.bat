@echo off
echo Setting up Hospital Website...

:: Install Node.js dependencies
call npm install next@latest react@latest react-dom@latest typescript @types/react @types/node @types/react-dom --save
call npm install tailwindcss postcss autoprefixer --save-dev
call npm install react-icons --save

echo Installation complete!
echo Run 'npm run dev' to start the development server.
