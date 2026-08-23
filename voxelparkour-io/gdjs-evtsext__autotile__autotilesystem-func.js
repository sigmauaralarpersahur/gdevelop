
if (typeof gdjs.evtsExt__AutoTile__AutoTileSystem !== "undefined") {
  gdjs.evtsExt__AutoTile__AutoTileSystem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AutoTile__AutoTileSystem = {};
gdjs.evtsExt__AutoTile__AutoTileSystem.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final = [];

gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final = [];

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex2 = 0;

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3 = 0;

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex4 = 0;

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachObjects2 = [];

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachObjects3 = [];

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachObjects4 = [];

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary2 = null;

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary3 = null;

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary4 = null;

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTotalCount2 = 0;

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTotalCount3 = 0;

gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTotalCount4 = 0;

gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects7= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects1= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects7= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects5= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects6= [];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects7= [];


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].getVariables().get("__AutoTileExtension").getChild("TilesDetectorSavedWidth")).setNumber(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].getVariables().get("__AutoTileExtension").getChild("TilesDetectorSavedHeight")).setNumber(1);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects2Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2});
gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDCursorObjectObjects2Objects = Hashtable.newFrom({"CursorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2});
gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects4Objects = Hashtable.newFrom({"DetectorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("DetectorIsCreated"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2, gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4);

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = 0;

{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting"), false);
}
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects4Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getCenterXInScene()) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[0].getVariables()).get("__AutoTileExtension").getChild("TilesDetectorSavedWidth"))) / 2), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getCenterYInScene()) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[0].getVariables()).get("__AutoTileExtension").getChild("TilesDetectorSavedHeight"))) / 2), "");
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(1, 1);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length !== 0 ? gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0] : null), (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length !== 0 ? gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0] : null));
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateAllTiles"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TilesNumberChecker")).add(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("DetectorIsCreated"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2 */

for (gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3 = 0;gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3 < gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length;++gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3) {
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = 0;


gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary3 = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.push(gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2);
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects2Objects, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDCursorObjectObjects2Objects, eventsFunctionContext.getArgument("DistanceToCover"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("DetectorIsCreated"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects3Objects = Hashtable.newFrom({"DetectorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("DetectorIsCreated"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3);
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3 */
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length = 0;

{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting"), false);
}
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects3Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[0].getCenterXInScene()) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[0].getVariables()).get("__AutoTileExtension").getChild("TilesDetectorSavedWidth"))) / 2), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[0].getCenterYInScene()) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[0].getVariables()).get("__AutoTileExtension").getChild("TilesDetectorSavedHeight"))) / 2), "");
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(1, 1);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length !== 0 ? gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[0] : null), (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length !== 0 ? gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[0] : null));
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("UpdateAllTiles"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("TilesNumberChecker")).add(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("DetectorIsCreated"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1 */

for (gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex2 = 0;gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex2 < gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1.length;++gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex2) {
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length = 0;


gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary2 = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex2];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.push(gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList5(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[i].getVariables().get("__AutoTileExtension").getChild("DetectorIsCreated"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList8(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects3Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3});
gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDCursorObjectObjects3Objects = Hashtable.newFrom({"CursorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3 */
gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects3Objects, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDCursorObjectObjects3Objects, eventsFunctionContext.getArgument("DistanceToCover"), false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisTileAnimation"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("UpdateAllTiles"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting2"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("UpdateAllTiles"), false);
}
}

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisTileAnimation"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("UpdateAllTiles"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting2"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("UpdateAllTiles"), false);
}
}

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList11(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList14(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOf = Hashtable.newFrom({});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting2"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisTileAnimation"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("NumberOfTiles")).setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOf));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting2"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisTileAnimation"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartCounting"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("ActivateAutoTileCheck"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting2"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartCounting"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList17 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3);

for (gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex4 = 0;gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex4 < gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;++gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex4) {
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2, gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4);

gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = 0;


gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary4 = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex4];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.push(gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("ActivateAutoTileCheck"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("StartCounting"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("ActivateAutoTileCheck"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("StartCounting"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisTileAnimation"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("NumberOfTiles")).sub(1);
}
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("NumberOfTiles")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting2"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting2"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("StartTilesCounting"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList18(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOf = Hashtable.newFrom({});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].getVariables().get("__AutoTileExtension").getChild("TilesNumberChecker")) == gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOf)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].getVariables().get("__AutoTileExtension").getChild("UpdateAllTiles"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].getVariables().get("__AutoTileExtension").getChild("UpdateAllTiles"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1[i].getVariables().get("__AutoTileExtension").getChild("TilesNumberChecker")).sub(1);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList15(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList16(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList19(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList20(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects3Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3});
gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDCursorObjectObjects3Objects = Hashtable.newFrom({"CursorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3});
gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects4Objects = Hashtable.newFrom({"DetectorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList22 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList23 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3 */

for (gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex4 = 0;gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex4 < gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;++gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("DetectorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = 0;


gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary4 = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex4];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.push(gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects4Objects, (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length !== 0 ? gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("ActivateDetector"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("ActivateAutoTileCheck"), false);
}
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList24 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3);
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects3Objects, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDCursorObjectObjects3Objects, eventsFunctionContext.getArgument("DistanceToCover"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList23(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList25 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("ActivateAutoTileCheck"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList24(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects3Objects = Hashtable.newFrom({"DetectorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList26 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList27 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2 */

for (gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3 = 0;gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3 < gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length;++gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3) {
gdjs.copyArray(eventsFunctionContext.getObjects("DetectorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3);
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = 0;


gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary3 = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.push(gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects3Objects, (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length !== 0 ? gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("ActivateDetector"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("ActivateAutoTileCheck"), false);
}
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList28 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("ActivateAutoTileCheck"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList27(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList29 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList28(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList30 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList25(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList29(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects3Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3});
gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects3Objects = Hashtable.newFrom({"DetectorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3});
gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList31 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList32 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterYInScene()) - (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList31(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList33 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList34 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterYInScene()) + (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList33(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList35 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList36 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterXInScene()) - (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterYInScene()), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList35(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList37 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList38 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterXInScene()) + (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterYInScene()), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList37(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList39 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList40 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterXInScene()) + (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterYInScene()) - (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList39(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList41 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList42 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterXInScene()) - (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterYInScene()) - (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList41(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList43 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList44 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterXInScene()) + (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterYInScene()) + (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList43(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList45 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterXInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterXInScene()) - (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getCenterYInScene() == (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[0].getCenterYInScene()) + (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final.push(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4_1final, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList46 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects4Objects, (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterXInScene()) - (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[0].getCenterYInScene()) + (( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0].getWidth()), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList45(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList47 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList32(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList34(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList36(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList38(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList40(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList42(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList44(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList46(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList48 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2 */

for (gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3 = 0;gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3 < gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2.length;++gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3) {
gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3);
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length = 0;


gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary3 = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2[gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.push(gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects3Objects, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects3Objects, eventsFunctionContext.getArgument("DistanceToCover"), false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("ActivateDetector"), false);
}
}

{ //Subevents: 
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList47(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList49 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("DetectorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("ActivateDetector"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList48(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects2Objects = Hashtable.newFrom({"TileObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2});
gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDCursorObjectObjects2Objects = Hashtable.newFrom({"CursorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2});
gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects4Objects = Hashtable.newFrom({"DetectorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList50 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList51 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList52 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList53 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList54 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList55 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList56 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList57 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList58 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList50(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList51(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList52(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList53(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList54(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList55(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList56(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList57(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList59 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("DetectorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects4Objects, (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length !== 0 ? gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList58(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList60 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(0);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(1);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(2);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 3) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(3);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 4) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(4);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(5);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 6) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(6);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 7) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(7);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 8) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(8);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 9) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(9);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 10) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(10);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 11) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(11);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 12) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(12);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 13) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(13);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 14) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(14);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 15) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(15);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 16) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(16);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 17) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(17);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 18) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(18);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 19) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(19);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 20) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(20);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 21) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(21);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 22) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(22);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 23) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(23);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 24) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(24);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 25) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(25);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 26) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(26);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 27) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(27);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 28) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(28);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 29) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(29);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 30) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(30);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 31) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(31);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 32) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(32);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 33) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(33);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 34) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(34);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 35) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(35);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 36) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(36);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 37) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(37);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 38) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(38);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 39) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(39);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 40) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(40);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 41) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(41);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 42) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(42);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 43) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(43);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 44) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(44);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getAnimationFrame() == 45) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setAnimationFrame(45);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 46) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(46);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList61 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).pauseAnimation();
}
}

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList60(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList62 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList59(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList61(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList63 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2 */

for (gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3 = 0;gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3 < gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length;++gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3) {
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = 0;


gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary3 = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex3];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.push(gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList62(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList64 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2);
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDTileObjectObjects2Objects, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDCursorObjectObjects2Objects, eventsFunctionContext.getArgument("DistanceToCover"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList63(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList65 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList64(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects3Objects = Hashtable.newFrom({"DetectorObject": gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3});
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList66 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList67 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList68 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList69 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList70 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList71 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList72 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList73 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3 */
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList74 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList66(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList67(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList68(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList69(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList70(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList71(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList72(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList73(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList75 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("DetectorObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__AutoTile__AutoTileSystem.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595AutoTileSystem_9546GDDetectorObjectObjects3Objects, (gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length !== 0 ? gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[0] : null), eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList74(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList76 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(0);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(1);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(2);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 3) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(3);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 4) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(4);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(5);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 6) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(6);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 7) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(7);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 8) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(8);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 9) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(9);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 10) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(10);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 11) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(11);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 12) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(12);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 13) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(13);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 14) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(14);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 15) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(15);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 16) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(16);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 17) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(17);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 18) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(18);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 19) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(19);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 20) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(20);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 21) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(21);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 22) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(22);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 23) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(23);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 24) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(24);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 25) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(25);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 26) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(26);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 27) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(27);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 28) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(28);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 29) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(29);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 30) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(30);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 31) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(31);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 32) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(32);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 33) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(33);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 34) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(34);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 35) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(35);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 36) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(36);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 37) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(37);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 38) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(38);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 39) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(39);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 40) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(40);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 41) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(41);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 42) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(42);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 43) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(43);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 44) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(44);
}
}
}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].getAnimationFrame() == 45) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4[i].setAnimationFrame(45);
}
}
}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("LeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("BottomIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("RightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("TopIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("TopRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("TopLeftIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("BottomRightIsFilled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("BottomLeftIsFilled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getAnimationFrame() == 46) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].setAnimationFrame(46);
}
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList77 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2, gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).pauseAnimation();
}
}

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList76(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList78 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList75(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList77(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList79 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1 */

for (gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex2 = 0;gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex2 < gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1.length;++gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex2) {
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length = 0;


gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary2 = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[gdjs.evtsExt__AutoTile__AutoTileSystem.forEachIndex2];
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.push(gdjs.evtsExt__AutoTile__AutoTileSystem.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList78(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList80 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TileObject"), gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[i].getVariables().get("__AutoTileExtension").getChild("UpdateThisCloseTile"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[k] = gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList79(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList81 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList80(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList82 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList65(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList81(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList83 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList30(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList49(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList82(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList84 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList21(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList83(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AutoTile__AutoTileSystem.func = function(runtimeScene, TileObject, DetectorObject, CursorObject, DistanceToCover, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"TileObject": TileObject
, "DetectorObject": DetectorObject
, "CursorObject": CursorObject
},
  _objectArraysMap: {
"TileObject": gdjs.objectsListsToArray(TileObject)
, "DetectorObject": gdjs.objectsListsToArray(DetectorObject)
, "CursorObject": gdjs.objectsListsToArray(CursorObject)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTile"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "DistanceToCover") return DistanceToCover;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects7.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects7.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects5.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects6.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects7.length = 0;

gdjs.evtsExt__AutoTile__AutoTileSystem.eventsList84(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects2.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects3.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects4.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects5.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects6.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDTileObjectObjects7.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects2.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects3.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects4.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects5.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects6.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDDetectorObjectObjects7.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects2.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects3.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects4.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects5.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects6.length = 0;
gdjs.evtsExt__AutoTile__AutoTileSystem.GDCursorObjectObjects7.length = 0;


return;
}

gdjs.evtsExt__AutoTile__AutoTileSystem.registeredGdjsCallbacks = [];