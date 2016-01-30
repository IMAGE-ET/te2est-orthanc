echo off
node --max-old-space-size=8000 --expose-gc "../../lib/common-test/launchers/launchtogether.js" "@testspath/orthanc/launchables.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
