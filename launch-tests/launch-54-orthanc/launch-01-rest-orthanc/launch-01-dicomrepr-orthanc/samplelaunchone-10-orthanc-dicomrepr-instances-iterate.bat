echo off
node --max-old-space-size=2000 --expose-gc "../../../../lib/common-test/launchers/launchbyname.js" "@testspath/orthanc/orthanc-rest/orthanc-dicomrepr/suite-10-orthanc-dicomrepr-instances-iterate-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
