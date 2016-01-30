echo off
node --max-old-space-size=8000 --expose-gc "../../../lib/common-test/launchers/launchbyname.js" "@testspath/orthanc/orthanc-rest/suite-51-orthanc-rest-patients-studies-series-instances-recursivedeletedepthfirst-all-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
