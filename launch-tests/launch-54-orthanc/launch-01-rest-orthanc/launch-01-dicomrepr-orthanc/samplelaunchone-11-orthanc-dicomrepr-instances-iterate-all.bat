echo off
node --max-old-space-size=8000 --expose-gc "../../../../lib/common-test/launchers/launchbyname.js" "@testspath/orthanc/orthanc-rest/orthanc-dicomrepr/suite-11-orthanc-dicomrepr-instances-iterate-all-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
