echo off
node --max-old-space-size=2000 --expose-gc "../lib/launchtop.js" "@testspath/#testsroot/istlaunchables.json"
if ERRORLEVEL 1 (
    exit /B %ERRORLEVEL%
)
