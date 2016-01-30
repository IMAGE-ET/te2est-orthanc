echo off
node --max-old-space-size=8000 --expose-gc "../lib/launchtop.js" "@testspath/#testsroot/orthanclaunchables.json"
if ERRORLEVEL 1 (
    exit /B %ERRORLEVEL%
)
