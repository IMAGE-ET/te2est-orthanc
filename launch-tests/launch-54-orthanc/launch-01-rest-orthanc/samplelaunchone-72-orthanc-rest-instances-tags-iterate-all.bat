echo off
node --max-old-space-size=8000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/orthanc/orthanc-rest/suite-72-orthanc-rest-instances-tags-iterate-all-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
