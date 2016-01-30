'use strict';

/*
 orthancrepr-test.js
 Creado 2014511201624
 */

/*
 ***************************************************************************

 Copyright 2014 2015 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 */



(function () {

    var aMod_definer = function( theM_dicomreprreusable,
                                 theM_overrider,
                                 theM_sentinels,
                                 theM_traversals,
                                 theM_payloadholder,
                                 theM_dicomconstants,
                                 theM_dicomutils,
                                 theM_dicominstancerepr,
                                 theM_orthancrepr) {


        var ModuleName     = "orthancrepr-test";
        var ModulePackages = "dicom-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.FAILIF_OBSERVATIONS     = false;
            theToInit.FAILIF_WARNINGS         = false;
            theToInit.FAILIF_ERRORS           = false;

            theToInit.FAILONFIRST_OBSERVATION = false;
            theToInit.FAILONFIRST_WARNING     = false;
            theToInit.FAILONFIRST_ERROR       = false;

            theToInit.DUMP_ORTHANCSOURCE      = false;
            theToInit.DUMP_IMPLEMENTORMATCHES = false;
            theToInit.DUMP_INSTANCEUID        = false;
            theToInit.DUMP_DICOMREPR          = false;
            theToInit.DUMP_OBSERVATIONS       = false;
            theToInit.DUMP_WARNINGS           = false;
            theToInit.DUMP_ERRORS             = false;
            theToInit.DUMP_PRIVATEGROUPS      = false;

        };





        var pgInitFromModuleVariations = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleVariations) {
                if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                }
            }
        };


        var ModuleVariations = { };
        pgInitWithModuleVariations( ModuleVariations);
        theM_overrider.pgOverrideModuleVariations( ModuleFullName, ModuleVariations);








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }



            theToInit.ORTHANCTAG_REGEXPSTR = "^([0-9a-f]{4}),([0-9a-f]{4})$";
            theToInit.ORTHANCTAG_REGEXP    = new RegExp( theToInit.ORTHANCTAG_REGEXPSTR);



            theToInit.PARMSPREFIX_ORTHANCREPR = "orthancrepr";


            theToInit.PARM_ORTHANCREPR_ORTHANCSOURCE           = theToInit.PARMSPREFIX_ORTHANCREPR + ".orthancSource";

            theToInit.PARM_ORTHANCREPR_DUMP_ORTHANCSOURCE      = theToInit.PARMSPREFIX_ORTHANCREPR + ".dump_orthancSource";



            theToInit.PARMS_ORTHANCREPR = [
                theToInit.PARM_ORTHANCREPR_ORTHANCSOURCE,

                theToInit.PARM_ORTHANCREPR_DUMP_ORTHANCSOURCE
            ];






            theToInit.EXTRATYPENAMETOVRMAPPINGS_ORTHANC = {
                "TooLong":  { "code": "TL", "maxLength": -1,    "title": "TooLong", "comment": "Orthanc delivers some elements with Type 'TooLong'"},
                "Null":     { "code": "NU", "maxLength": -1,    "title": "Null",    "comment": "Orthanc delivers some elements with Type 'Null'"}
            };


            theToInit.EXTRAVRTOYPENAMEMAPPINGS_ORTHANC = { };

            var someTypeNames = Object.keys( theToInit.EXTRATYPENAMETOVRMAPPINGS_ORTHANC);
            var aNumTypeNames = someTypeNames.length;
            for( var aTypeNameIdx=0; aTypeNameIdx < aNumTypeNames; aTypeNameIdx++) {
                var aTypeName = someTypeNames[ aTypeNameIdx];
                var aTypeNameSpec = theToInit.EXTRATYPENAMETOVRMAPPINGS_ORTHANC[ aTypeName];
                var aVR = aTypeNameSpec[ "code"];

                theToInit.EXTRAVRTOYPENAMEMAPPINGS_ORTHANC[ aVR] = aTypeName;
            }

        };




        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };


        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
        pgInitWithModuleConstants( ModuleConstants);











        var aOrthancRepr_Prototype = (function() {


            var aPrototype = new theM_dicomreprreusable.DicomreprReusable_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_dicomreprreusable.DicomreprReusable_Prototype;

            aPrototype._v_Type = "OrthancRepr";

            aPrototype._v_Prototype_OrthancRepr = aPrototype;


            aPrototype._v_OrthancSource           = null;

            aPrototype._v_Dump_OrthancSource      = null;







            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_OrthancRepr(
                    theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_OrthancRepr = function(
                theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_DicomreprReusable.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_OrthancSource           = null;
                this._v_ImplementorMatches      = null;
                                                
                this._v_Dump_OrthancSource      = null;
                this._v_Dump_ImplementorMatches = null;
                this._v_Dump_InstanceUID        = null;
                this._v_Dump_DicomRepr          = null;
                this._v_Dump_Observations       = null;
                this._v_Dump_Warnings           = null;
                this._v_Dump_Errors             = null;
                this._v_Dump_PrivateGroups      = null;
                                                
                this._v_DicomInstanceUID        = null;
                this._v_DicomInstanceRepr       = null;
                                                
                this._v_Observations            = [ ];
                this._v_Warnings                = [ ];
                this._v_Errors                  = [ ];

                this._v_RegisteredPrivateGroups = { };
                this._v_RegExpsBySource         = { };


                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_OrthancRepr", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_OrthancRepr){}/* CQT */
            aPrototype._pInit_OrthancRepr = _pInit_OrthancRepr;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_OrthancRepr( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_OrthancRepr = function( theReleaseParms, theReleaseDone) {

                /* if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL; */

                this._v_OrthancSource         = undefined;
                this._v_ImplementorMatches    = undefined;

                this._v_Dump_OrthancSource    = undefined;
                this._v_Dump_ImplementorMatches = null;
                this._v_Dump_InstanceUID      = undefined;
                this._v_Dump_DicomRepr        = undefined;
                this._v_Dump_Observations     = undefined;
                this._v_Dump_Warnings         = undefined;
                this._v_Dump_Errors           = undefined;
                this._v_Dump_PrivateGroups    = undefined;

                this._v_DicomInstanceUID      = undefined;
                this._v_DicomInstanceRepr     = undefined;

                this._v_Observations          = undefined;
                this._v_Warnings              = undefined;
                this._v_Errors                = undefined;

                this._v_RegisteredPrivateGroups = undefined;
                this._v_RegExpsBySource         = undefined;


                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_OrthancRepr){}/* CQT */
            aPrototype._pRelease_OrthancRepr = _pRelease_OrthancRepr;









            var _pReleaseChildrenInto = function( theReleaseChildren) {

                if( !theReleaseChildren) {
                    return;
                }

                /* Delegate on super prototype release subordinates */
                aPrototype._v_SuperPrototype._pReleaseChildrenInto.apply( this, [ theReleaseChildren]);

            };
            if( _pReleaseChildrenInto){}/* CQT */
            aPrototype._pReleaseChildrenInto = _pReleaseChildrenInto;









            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_OrthancRepr( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;




            
            


            var pCleanUpTest_OrthancRepr = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if(  ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTSPAYLOADS) >= 0)) {

                    this._v_OrthancSource         = undefined;
                    this._v_ImplementorMatches    = undefined;

                    this._v_DicomInstanceUID      = undefined;
                    this._v_DicomInstanceRepr     = undefined;
                    this._v_Warnings              = undefined;
                    this._v_Errors                = undefined;

                    this._v_RegisteredPrivateGroups = undefined;
                    this._v_RegExpsBySource         = undefined;
                }

                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_OrthancRepr){}/* CQT */
            aPrototype.pCleanUpTest_OrthancRepr = pCleanUpTest_OrthancRepr;













            var pS_ResolveParms = function( theCallback) {
                var aMethodName = "pS_ResolveParms";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var aSuperResolveParmsResult = this._v_SuperPrototype.fResolveParms_DicomReprReusable.apply( this, [ aMethodName, this.PARMSPREFIX_ORTHANCREPR]);
                if( aSuperResolveParmsResult) {
                    theCallback( aSuperResolveParmsResult);
                    return;
                }

                var someParmsToResolve = [
                    this.PARM_ORTHANCREPR_ORTHANCSOURCE,

                    this.PARM_ORTHANCREPR_DUMP_ORTHANCSOURCE
                ];

                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, theMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }






                if( this._v_Dump_OrthancSource == null) {
                    var aDump_OrthancSourceResolution = aParmResolutionsDict[ this.PARM_ORTHANCREPR_DUMP_ORTHANCSOURCE];
                    if( aDump_OrthancSourceResolution && aDump_OrthancSourceResolution._v_Success) {
                        this._v_Dump_OrthancSource = aDump_OrthancSourceResolution._v_ParmValue;
                    }
                    else {
                        this._v_Dump_OrthancSource = this.DUMP_ORTHANCSOURCE;
                    }
                }





                if( this._v_OrthancSource == null) {
                    var aOrthancSourceResolution = aParmResolutionsDict[ this.PARM_ORTHANCREPR_ORTHANCSOURCE];
                    if( aOrthancSourceResolution && aOrthancSourceResolution._v_Success && aOrthancSourceResolution._v_ParmValue) {
                        this._v_OrthancSource = aOrthancSourceResolution._v_ParmValue;
                    }
                    if( this._v_OrthancSource) {
                        this._v_OrthancSource = this.fParmValueReplacement( this._v_OrthancSource);
                    }
                }
                if( this._v_Dump_OrthancSource) {
                    var anOrthancSourceJSONstr = JSON.stringify( this._v_OrthancSource, null, 4);
                    console.log( ',"ORTHANCSOURCE"\n,' + anOrthancSourceJSONstr);
                }



                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_ResolveParms){}/* CQT */
            aPrototype.pS_ResolveParms = pS_ResolveParms;














            var fDicomGroupElementToOrthancTag = function( theGroupAndElement) {

                if( !theGroupAndElement) {
                    return null;
                }

                if( !( theGroupAndElement.length == 2)) {
                    return null;
                }

                var anOrthancTag = ( "" + theGroupAndElement[ 0] + "," + theGroupAndElement[ 1]).toLowerCase();
                if( anOrthancTag){}/* CQT */

                return anOrthancTag;

            };
            if( fDicomGroupElementToOrthancTag){}/* CQT */
            aPrototype.fDicomGroupElementToOrthancTag = fDicomGroupElementToOrthancTag;












            var pS_ExtractDicomInstanceUID = function( theCallback) {

                var aMethodName = "pS_ExtractDicomInstanceUID";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( !this._v_OrthancSource) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_OrthancSource", null));
                    return;
                }

                var anOrthancSource = this.fParmValueReplacement( this._v_OrthancSource);
                if( !anOrthancSource) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fParmValueReplacement( this._v_OrthancSource)", null));
                    return;
                }


                var anOrthancTag_SOPInstanceUID = this.fDicomGroupElementToOrthancTag( theM_dicomconstants.DICOM_TAG_SOPInstanceUID);
                if( !anOrthancTag_SOPInstanceUID) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fDicomGroupElementToOrthancTag( theM_dicomconstants.DICOM_TAG_SOPInstanceUID)", null));
                    return;
                }

                var anOrthancInstanceUIDElement = anOrthancSource[ anOrthancTag_SOPInstanceUID];
                if( !anOrthancInstanceUIDElement) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fParmValueReplacement( this._v_OrthancSource)[ this.fDicomGroupElementToOrthancTag( theM_dicomconstants.DICOM_TAG_SOPInstanceUID)]", null));
                    return;
                }


                this._v_DicomInstanceUID = anOrthancInstanceUIDElement[ "Value"];
                if( !this._v_DicomInstanceUID) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_DicomInstanceUID", null));
                    return;
                }


                if( this._v_Dump_InstanceUID) {
                    this.pToConsoleLikeEvent( this._v_Title + " _v_DicomInstanceUID=" + this._v_DicomInstanceUID);
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));

            };
            if( pS_ExtractDicomInstanceUID){}/* CQT */
            aPrototype.pS_ExtractDicomInstanceUID = pS_ExtractDicomInstanceUID;

















            var pS_ConvertToDicomRepr = function( theCallback) {

                var aMethodName = "pS_ConvertToDicomRepr";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                if( !this._v_OrthancSource) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_OrthancSource", null));
                    return;
                }

                if( !this._v_DicomInstanceUID) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_DicomInstanceUID", null));
                    return;
                }


                var anOrthancSource = this.fParmValueReplacement( this._v_OrthancSource);
                if( !anOrthancSource) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this.fParmValueReplacement( this._v_OrthancSource)", null));
                    return;
                }



                this._v_DicomInstanceRepr = this.fDicomReprFromOrthancSource( anOrthancSource, null);




                var aDicomInstanceReprLogObject = null;
                if( this._v_DicomInstanceRepr) {
                    aDicomInstanceReprLogObject = this._v_DicomInstanceRepr.fAsLogObject();
                }




                if( this._v_Dump_DicomRepr) {
                    console.log( "DICOMREPR\n" + JSON.stringify( aDicomInstanceReprLogObject, null, 4));
                }


                if( this._v_Dump_Observations) {
                    console.log( "OBSERVATIONS\n" + JSON.stringify( this._v_Observations, null, 4));
                }

                if( this._v_Dump_Warnings) {
                    console.log( "WARNINGS\n" + JSON.stringify( this._v_Warnings, null, 4));
                }

                if( this._v_Dump_Errors) {
                    console.log( "ERRORS\n"   + JSON.stringify( this._v_Errors, null, 4));
                }


                if( this._v_Dump_PrivateGroups) {
                    console.log( "PRIVATEGROUPS\n"   + JSON.stringify( this._v_RegisteredPrivateGroups, null, 4));
                }


                if( !this._v_DicomInstanceRepr || this._v_Errors.length) {

                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_FAIL, this._v_Warnings, "!this._v_DicomInstanceRepr || this._v_Errors.length", this._v_Errors));
                    return;
                }


                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, this._v_Warnings));

            };
            if( pS_ConvertToDicomRepr){}/* CQT */
            aPrototype.pS_ConvertToDicomRepr = pS_ConvertToDicomRepr;







            var fGroupAndElementFromOrthancTag = function( theOrthancTag) {

                if( !theOrthancTag || !( typeof theOrthancTag == "string")) {
                    return null;
                }

                var anOrthancTag = theOrthancTag.toLowerCase();

                var someRegexpMatches = this.ORTHANCTAG_REGEXP.exec( anOrthancTag);
                if( !someRegexpMatches) {
                    return null;
                }

                if( !( someRegexpMatches.length == 3)) {
                    return null;
                }

                var anOrthancTag_Group   = someRegexpMatches[ 1];
                if( !anOrthancTag_Group) {
                    return null;
                }
                var anOrthancTag_Element = someRegexpMatches[ 2];
                if( !anOrthancTag_Element) {
                    return null;
                }

                var anOrthencGroupAndElement = [ anOrthancTag_Group, anOrthancTag_Element];
                if( anOrthencGroupAndElement){}/* CQT */

                return anOrthencGroupAndElement;
            };
            if( fGroupAndElementFromOrthancTag){}/* CQT */
            aPrototype.fGroupAndElementFromOrthancTag = fGroupAndElementFromOrthancTag;




            



            var fDicomReprFromOrthancSource = function( theOrthancSource, theParentTagsPath, theParentDicomElementRepr) {

                var anError       = null;
                var aWarning      = null;
                var anObservation = null;

                var someOrthancTags = Object.keys( theOrthancSource);
                if( !someOrthancTags) {
                    return null;
                }

                var aNumOrthancTags = someOrthancTags.length;
                if( !aNumOrthancTags) {
                    return null;
                }


                var aDicomInstanceRepr = null;

                if( theParentDicomElementRepr) {
                    aDicomInstanceRepr = theParentDicomElementRepr.fNew_Item( this._v_DicomInstanceUID);
                }
                else {
                    aDicomInstanceRepr = new theM_dicominstancerepr.DicomInstanceRepr_Constructor( null, null, this._v_DicomInstanceUID);
                }




                for( var anOrthancTagIdx=0; anOrthancTagIdx < aNumOrthancTags; anOrthancTagIdx++) {
                    anError  = null;
                    aWarning = null;


                    var anOrthancTag = someOrthancTags[ anOrthancTagIdx];
                    if( !anOrthancTag) {
                        continue;
                    }


                    var anOrthancElement = theOrthancSource[ anOrthancTag];
                    if( !anOrthancElement) {
                        continue;
                    }


                    var anOrthancTagName = anOrthancElement[ "Name"];


                    var anOrthancGroupAndElement = this.fGroupAndElementFromOrthancTag( anOrthancTag);
                    var anOrthancTag_Group     = null;
                    var anOrthancTag_Element   = null;
                    if( anOrthancGroupAndElement) {
                        anOrthancTag_Group     = anOrthancGroupAndElement[ 0];
                        anOrthancTag_Element   = anOrthancGroupAndElement[ 1];
                    }

                    if( !anOrthancTag_Group || !anOrthancTag_Element) {

                        this.pHandleError( theParentTagsPath, this.ERRORKIND_INCORRECTORTHANCTAG, anOrthancTag);
                        continue;
                    }




                    var aDicomTag = theM_dicomutils.fDicomTagFromGroupAndElement( anOrthancTag_Group, anOrthancTag_Element);
                    if( !aDicomTag) {

                        this.pHandleError( theParentTagsPath, this.ERRORKIND_INCORRECTORTHANCTAG, anOrthancTag_Group, anOrthancTag_Element);
                        continue;
                    }


                    var aDicomGroupAndElement = theM_dicomutils.fGroupAndElementFromDicomTag( aDicomTag);

                    var aDicomGroup   = null;
                    var aDicomElement = null;
                    if( aDicomGroupAndElement) {
                        aDicomGroup   = aDicomGroupAndElement[ 0];
                        aDicomElement = aDicomGroupAndElement[ 1];
                    }

                    if( !aDicomGroupAndElement || !aDicomGroup || !aDicomElement) {

                        this.pHandleError( theParentTagsPath, this.ERRORKIND_INCORRECTORTHANCTAG, anOrthancTag_Group, anOrthancTag_Element);
                        continue;
                    }



                    var aTagsPath = null;
                    if( !theParentTagsPath) {
                        aTagsPath = [ ];
                    }
                    else {
                        aTagsPath = theParentTagsPath.slice();
                    }
                    aTagsPath.push( aDicomTag);







                    var anIsPrivate = theM_dicomutils.fIsPrivateDicomGroup( anOrthancTag_Group);


                    var anIsHeader  = theM_dicomutils.fIsHeaderDicomGroup(  anOrthancTag_Group);



                    var anOrthancType = anOrthancElement[ "Type"];
                    if( !anOrthancType) {

                        this.pHandleWarning( aTagsPath, this.WARNINGKIND_MISSINGORTHANCTYPE);
                    }




                    var aVR = null;

                    if( anOrthancType) {
                        aVR = theM_dicomutils.fVRfromTypeName( anOrthancType, this.EXTRATYPENAMETOVRMAPPINGS_ORTHANC);
                    }
                    if( !aVR) {

                        this.pHandleWarning( aTagsPath, this.WARNINGKIND_UNKNOWNDICOMTYPE, anOrthancType);
                    }





                    var aValueType = null;

                    if( aVR) {
                        aValueType = theM_dicomutils.fTypeNameFromVR( aVR, this.EXTRAVRTOYPENAMEMAPPINGS_ORTHANC);
                    }




                    var anIsSequence = false;

                    var aValue = anOrthancElement[ "Value"];

                    var aValueLength = null;

                    var anIsAnyStringType = theM_dicomutils.fIsVRAnyStringType( aVR);

                    if( anIsAnyStringType) {

                        if( aValue) {

                            aValueLength = aValue.length;

                            if( ( aValueLength % 2)) {
                                aValueLength += 1;
                            }

                            

                            if( theM_dicomutils.fExceedsMaxVRStringLen( aVR, this.EXTRAVRTOYPENAMEMAPPINGS_ORTHANC, aValueLength)) {

                                var anAdjustedVR = theM_dicomutils.fAdjustedVRforExceededMaxVRStringLen( aVR, this.EXTRAVRTOYPENAMEMAPPINGS_ORTHANC, aValueLength);
                                if( anAdjustedVR) {

                                    aVR = anAdjustedVR;
                                    aValueType = theM_dicomutils.fTypeNameFromVR( aVR, this.EXTRAVRTOYPENAMEMAPPINGS_ORTHANC);
                                }
                            }
                            

                            if( theM_dicomutils.fExceedsMaxVRStringLen( aVR, this.EXTRAVRTOYPENAMEMAPPINGS_ORTHANC, aValueLength)) {

                                this.pHandleWarning( aTagsPath, this.WARNINGKIND_EXCEEDSMAXVRSTRINGLEN, aDicomTag);
                            }
                            

                            if( theM_dicomutils.fIsStringValueMultiplicityGT1( aValue)) {

                                var someValuesStringVMGTE1 = theM_dicomutils.fStringValuesMultiplicityGT1( aValue);
                                if( someValuesStringVMGTE1) {

                                    aValue = someValuesStringVMGTE1;
                                }
                            }
                        }

                    }
                    else {

                        switch( aVR) {

                            case "AT":
                            case "FL":
                            case "FD":
                            case "OB":
                            case "OF":
                            case "OW":
                            case "SI":
                            case "SQ":
                                anIsSequence = true;
                                break;

                            case "SS":
                            case "UL":
                            case "US":

                            default:
                        }
                    }






                    var aDicomTagSpec                = null;
                    var aDicomTagName                = null;

                    var anIsBlockRegistrationElement = null;
                    var aBlockToReserve              = null;
                    var aPertainsToReservedBlock     = null;
                    var aReservedBlock               = null;


                    if( !anIsPrivate) {

                        aDicomTagSpec = theM_dicomutils.fDicomTagSpec( aDicomTag);

                        if( !aDicomTagSpec) {

                            this.pHandleWarning( aTagsPath, this.WARNINGKIND_UNCATALOGEDDICOMTAG, aDicomTag);
                        }

                        aDicomTagName = null;
                        if( aDicomTagSpec) {
                            aDicomTagName = aDicomTagSpec.name;
                        }

                        if( !anOrthancTagName == aDicomTagName) {

                            this.pHandleWarning( aTagsPath, this.WARNINGKIND_DIFFERENTTAGNAME, anOrthancTagName, aDicomTagName);
                        }
                    }
                    else {


                        if( !theM_dicomutils.fIsRemovedDicomTag( aDicomTag)) {

                            aBlockToReserve = theM_dicomutils.fBlockToReserveInPrivateGroup( aDicomElement);
                            if( aBlockToReserve) {

                                var  aPrivateCreator = aValue;

                                var aReservedBlockRegistration = this.fPrivateReservedBlockRegistration( aDicomGroup, aBlockToReserve);

                                if( aReservedBlockRegistration) {
                                    var aReservedGroup = this.fPrivateReservedGroup( aDicomGroup);

                                    if( aReservedGroup && ( aReservedGroup[ "privateCreator"] == aPrivateCreator)) {

                                        this.pHandleObservation( aTagsPath, this.OBSERVATIONKIND_GROUPALREADYRESERVED, aReservedGroup[ "privateCreator"]);
                                    }
                                    else {
                                        this.pHandleError( aTagsPath, this.ERRORKIND_RESERVEDOTHERIMPLEMENTOR, aReservedGroup[ "privateCreator"], aPrivateCreator);
                                    }
                                }

                                anIsBlockRegistrationElement = true;

                                this.pRegisterPrivateReservedGroupAndBlock( aDicomGroup, aBlockToReserve, aDicomTag, aPrivateCreator);

                            }
                            else {

                                aReservedBlock = theM_dicomutils.fReservedBlockFromDicomElement( aDicomElement);
                                if( !aReservedBlock) {

                                    this.pHandleWarning( aTagsPath, this.WARNINGKIND_NOTARESERVEDBLOCK, aDicomElement);
                                }
                                else {

                                    var aReservedBlockRegistration = this.fPrivateReservedBlockRegistration( aDicomGroup, aReservedBlock);
                                    if( !aReservedBlockRegistration) {

                                        this.pHandleWarning( aTagsPath, this.WARNINGKIND_BLOCKWASNOTRESERVED, aDicomElement);
                                    }
                                    else {

                                        aPertainsToReservedBlock = true;

                                        aReservedBlockRegistration[ "elementTags"].push( aDicomElement);
                                    }
                                }
                            }
                        }
                    }








                    var aDicomElementRepr = aDicomInstanceRepr.fNew_Element( aDicomTag, aDicomTagName);
                    if( !aDicomElementRepr) {

                        this.pHandleError( aTagsPath, this.ERRORKIND_ELEMENTFACTORYFAILED, aDicomTag, aDicomTagName);
                        continue;
                    }
                    aDicomInstanceRepr.pAdd_Element( aDicomElementRepr);







                    aDicomElementRepr.pSet_IsPrivate( anIsPrivate);

                    aDicomElementRepr.pSet_IsHeader( anIsHeader);


                    if( aValueType) {
                        aDicomElementRepr.pSet_ValueType( aValueType);
                    }


                    if( aVR) {
                        aDicomElementRepr.pSet_VR( aVR);
                    }


                    aDicomElementRepr.pSet_IsBlockRegistration( anIsBlockRegistrationElement);

                    if( anIsBlockRegistrationElement) {
                        aDicomElementRepr.pSet_ReservedBlock( aBlockToReserve);
                    }

                    aDicomElementRepr.pSet_PertainsToReservedBlock( aPertainsToReservedBlock);
                    if( aPertainsToReservedBlock) {
                        aDicomElementRepr.pSet_ReservedBlock( aReservedBlock);
                    }




                    if( anIsSequence) {
                        var aDicomSequenceSuccess = this.fDicomReprFromOrthancSequence( aValue, aTagsPath, aDicomElementRepr);
                        if( !aDicomSequenceSuccess) {

                            this.pHandleError( aTagsPath, this.ERRORKIND_BADSEQUENCE, aDicomTag, aDicomTagName);
                            continue;
                        }

                        aValue = null;
                    }






                    aDicomElementRepr.pSet_Value( aValue);

                    if( !( aValueLength == null)) {
                        aDicomElementRepr.pSet_ValueLength( aValueLength);
                    }


                }

                return aDicomInstanceRepr;

            };
            if( fDicomReprFromOrthancSource){}/* CQT */
            aPrototype.fDicomReprFromOrthancSource = fDicomReprFromOrthancSource;









            var fDicomReprFromOrthancSequence = function( theOrthancSequence, theParentTagsPath, theParentDicomElementRepr) {


                if( !theOrthancSequence || !theParentTagsPath || !theParentDicomElementRepr) {
                    return false;
                }

                var aNumOrthanSequenceInstances = theOrthancSequence.length;
                if( !aNumOrthanSequenceInstances) {
                    return true;
                }



                for( var anOrthancInstancesIdx=0; anOrthancInstancesIdx < aNumOrthanSequenceInstances; anOrthancInstancesIdx++) {

                    var anOrthancInstance = theOrthancSequence[ anOrthancInstancesIdx];
                    if( !anOrthancInstance) {
                        continue;
                    }

                    var aDicomInstance = this.fDicomReprFromOrthancSource( anOrthancInstance, theParentTagsPath, theParentDicomElementRepr);
                    if( !aDicomInstance) {
                        return false;
                    }
                }

                return true;

            };
            if( fDicomReprFromOrthancSequence){}/* CQT */
            aPrototype.fDicomReprFromOrthancSequence = fDicomReprFromOrthancSequence;








            var pF_OrthancRepr = function( theCallback) {
                var aMethodName = "pF_OrthancRepr";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_OrthancRepr){}/* CQT */
            aPrototype.pF_OrthancRepr = pF_OrthancRepr;







            var fOwnTestMethodToRun = function() {
                return this.pSS_OrthancRepr.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_OrthancRepr = function( theCallback) {
                var aMethodName = "pSS_OrthancRepr";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_ResolveParms.bind( this),
                    this.pS_ExtractDicomInstanceUID.bind( this),
                    this.pS_ConvertToDicomRepr.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_OrthancRepr){}/* CQT */
            aPrototype.pSS_OrthancRepr = pSS_OrthancRepr;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);


                var aSessionResultJSON = null;
                if( this._v_Session) {
                    aSessionResultJSON = this._v_Session.fToResultJSON( theCommonObjects, theAlready)
                }


                aResultJSON.session           = aSessionResultJSON;


                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            var fReleasePayloads_OrthancRepr = function( ) {

                var aReleasePayloads_DicomreprReusable_Result = this._v_SuperPrototype.fReleasePayloads_DicomreprReusable.apply( this);
                if( !aReleasePayloads_DicomreprReusable_Result) {
                    return false;
                }

                this._v_DicomSource         = undefined;

                return true;
            };
            if( fReleasePayloads_OrthancRepr){}/* CQT */
            aPrototype.fReleasePayloads_OrthancRepr = fReleasePayloads_OrthancRepr;







            return aPrototype;

        })();




        var OrthancRepr_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomreprreusable.DicomreprReusable_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_OrthancSource         = null;
            this._v_ImplementorMatches    = null;

            this._v_Dump_OrthancSource    = null;
            this._v_Dump_ImplementorMatches = null;
            this._v_Dump_InstanceUID      = null;
            this._v_Dump_DicomRepr        = null;
            this._v_Dump_Observations     = null;
            this._v_Dump_Warnings         = null;
            this._v_Dump_Errors           = null;
            this._v_Dump_PrivateGroups    = null;

            this._v_DicomInstanceUID      = null;
            this._v_DicomInstanceRepr     = null;

            this._v_Observations          = null;
            this._v_Warnings              = null;
            this._v_Errors                = null;

            this._v_RegisteredPrivateGroups = null;
            this._v_RegExpsBySource         = null;


            this._pInit_OrthancRepr(
                theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        OrthancRepr_Constructor.prototype = aOrthancRepr_Prototype;







        var OrthancRepr_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_dicomreprreusable.DicomreprReusable_Prototype;

            this._v_Prototype = aOrthancRepr_Prototype;
            this._v_Type = null;

            this._v_OrthancSource         = null;
            this._v_ImplementorMatches    = null;

            this._v_Dump_OrthancSource    = null;
            this._v_Dump_ImplementorMatches = null;
            this._v_Dump_InstanceUID      = null;
            this._v_Dump_DicomRepr        = null;
            this._v_Dump_Observations     = null;
            this._v_Dump_Warnings         = null;
            this._v_Dump_Errors           = null;
            this._v_Dump_PrivateGroups = null;

            this._v_DicomInstanceUID      = null;
            this._v_DicomInstanceRepr     = null;

            this._v_Observations          = null;
            this._v_Warnings              = null;
            this._v_Errors                = null;

            this._v_RegisteredPrivateGroups = null;
            this._v_RegExpsBySource         = null;

        };
        OrthancRepr_SuperPrototypeConstructor.prototype = aOrthancRepr_Prototype;





        var aModule = {
            "OrthancRepr_Prototype": aOrthancRepr_Prototype,
            "OrthancRepr_Constructor": OrthancRepr_Constructor,
            "OrthancRepr_SuperPrototypeConstructor": OrthancRepr_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;
    };







    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_dicomreprreusable = require('../dicom-test/dicom-repr/dicomrepr-reusable');
            var aM_overrider         = require('../common-test/overrider');
            var aM_sentinels         = require('../common-test/sentinels');
            var aM_traversals        = require('../common-test/traversals/traversals');
            var aM_payloadholder     = require('../common-test/payloadholder');
            var aM_dicomconstants    = require('../dicom-test/dicom-constants');
            var aM_dicomutils        = require('../dicom-test/dicom-utils');
            var aM_dicominstancerepr = require('../dicom-test/dicom-repr/dicominstance-repr');
            var aM_orthancrepr       = require('dicom-parser');

            return aMod_definer(
                aM_dicomreprreusable,
                aM_overrider,
                aM_sentinels,
                aM_traversals,
                aM_payloadholder,
                aM_dicomconstants,
                aM_dicomutils,
                aM_dicominstancerepr,
                aM_orthancrepr
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../dicom-test/dicom-repr/dicomrepr-reusable",
            "../common-test/overrider",
            "../common-test/sentinels",
            "../common-test/traversals/traversals",
            "../common-test/payloadholder",
            "../dicom-test/dicom-constants",
            "../dicom-test/dicom-utils",
            "../dicom-test/dicom-repr/dicominstance-repr",
            "dicom-parser"
        ], function (
                theM_dicomreprreusable,
                theM_overrider,
                theM_sentinels,
                theM_traversals,
                theM_payloadholder,
                theM_dicomconstants,
                theM_dicomutils,
                theM_dicominstancerepr,
                theM_orthancrepr
            ) {
            return aMod_definer(
                theM_dicomreprreusable,
                theM_overrider,
                theM_sentinels,
                theM_traversals,
                theM_payloadholder,
                theM_dicomconstants,
                theM_dicomutils,
                theM_dicominstancerepr,
                theM_orthancrepr
            );
        });
    }


}());


