#!/bin/bash

node --max-old-space-size=8000 --expose-gc "../../../../lib/common-test/launchers/launchtogether.js" "@testspath/orthanc/orthanc-rest/orthanc-dicomrepr/launchables.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-54-orthanc launch-01-orthanc-rest launchtogether.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

