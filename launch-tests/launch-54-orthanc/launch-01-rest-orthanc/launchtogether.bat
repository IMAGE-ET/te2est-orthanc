echo off
node --max-old-space-size=8000 --expose-gc "../../../../lib/common-test/launchers/launchtogether.js" "@testspath/istdicom/istdicom-query/istdicom-query-solr/launchables.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
