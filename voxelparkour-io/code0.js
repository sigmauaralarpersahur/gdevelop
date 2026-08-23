gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.forEachIndex3 = 0;

gdjs.MainMenuCode.forEachIndex4 = 0;

gdjs.MainMenuCode.forEachIndex5 = 0;

gdjs.MainMenuCode.forEachObjects3 = [];

gdjs.MainMenuCode.forEachObjects4 = [];

gdjs.MainMenuCode.forEachObjects5 = [];

gdjs.MainMenuCode.forEachTemporary3 = null;

gdjs.MainMenuCode.forEachTemporary4 = null;

gdjs.MainMenuCode.forEachTemporary5 = null;

gdjs.MainMenuCode.forEachTotalCount3 = 0;

gdjs.MainMenuCode.forEachTotalCount4 = 0;

gdjs.MainMenuCode.forEachTotalCount5 = 0;

gdjs.MainMenuCode.GDBlueBackgroundObjects1= [];
gdjs.MainMenuCode.GDBlueBackgroundObjects2= [];
gdjs.MainMenuCode.GDBlueBackgroundObjects3= [];
gdjs.MainMenuCode.GDBlueBackgroundObjects4= [];
gdjs.MainMenuCode.GDBlueBackgroundObjects5= [];
gdjs.MainMenuCode.GDBlueBackgroundObjects6= [];
gdjs.MainMenuCode.GDCloudsObjects1= [];
gdjs.MainMenuCode.GDCloudsObjects2= [];
gdjs.MainMenuCode.GDCloudsObjects3= [];
gdjs.MainMenuCode.GDCloudsObjects4= [];
gdjs.MainMenuCode.GDCloudsObjects5= [];
gdjs.MainMenuCode.GDCloudsObjects6= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDTitleObjects3= [];
gdjs.MainMenuCode.GDTitleObjects4= [];
gdjs.MainMenuCode.GDTitleObjects5= [];
gdjs.MainMenuCode.GDTitleObjects6= [];
gdjs.MainMenuCode.GDFloorObjects1= [];
gdjs.MainMenuCode.GDFloorObjects2= [];
gdjs.MainMenuCode.GDFloorObjects3= [];
gdjs.MainMenuCode.GDFloorObjects4= [];
gdjs.MainMenuCode.GDFloorObjects5= [];
gdjs.MainMenuCode.GDFloorObjects6= [];
gdjs.MainMenuCode.GDCharacterObjectObjects1= [];
gdjs.MainMenuCode.GDCharacterObjectObjects2= [];
gdjs.MainMenuCode.GDCharacterObjectObjects3= [];
gdjs.MainMenuCode.GDCharacterObjectObjects4= [];
gdjs.MainMenuCode.GDCharacterObjectObjects5= [];
gdjs.MainMenuCode.GDCharacterObjectObjects6= [];
gdjs.MainMenuCode.GDEnemyObjects1= [];
gdjs.MainMenuCode.GDEnemyObjects2= [];
gdjs.MainMenuCode.GDEnemyObjects3= [];
gdjs.MainMenuCode.GDEnemyObjects4= [];
gdjs.MainMenuCode.GDEnemyObjects5= [];
gdjs.MainMenuCode.GDEnemyObjects6= [];
gdjs.MainMenuCode.GDGoalObjectObjects1= [];
gdjs.MainMenuCode.GDGoalObjectObjects2= [];
gdjs.MainMenuCode.GDGoalObjectObjects3= [];
gdjs.MainMenuCode.GDGoalObjectObjects4= [];
gdjs.MainMenuCode.GDGoalObjectObjects5= [];
gdjs.MainMenuCode.GDGoalObjectObjects6= [];
gdjs.MainMenuCode.GDSpikeObjects1= [];
gdjs.MainMenuCode.GDSpikeObjects2= [];
gdjs.MainMenuCode.GDSpikeObjects3= [];
gdjs.MainMenuCode.GDSpikeObjects4= [];
gdjs.MainMenuCode.GDSpikeObjects5= [];
gdjs.MainMenuCode.GDSpikeObjects6= [];
gdjs.MainMenuCode.GDBuildLevelButtonObjects1= [];
gdjs.MainMenuCode.GDBuildLevelButtonObjects2= [];
gdjs.MainMenuCode.GDBuildLevelButtonObjects3= [];
gdjs.MainMenuCode.GDBuildLevelButtonObjects4= [];
gdjs.MainMenuCode.GDBuildLevelButtonObjects5= [];
gdjs.MainMenuCode.GDBuildLevelButtonObjects6= [];
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects1= [];
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2= [];
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3= [];
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4= [];
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects5= [];
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects6= [];
gdjs.MainMenuCode.GDCursorObjectObjects1= [];
gdjs.MainMenuCode.GDCursorObjectObjects2= [];
gdjs.MainMenuCode.GDCursorObjectObjects3= [];
gdjs.MainMenuCode.GDCursorObjectObjects4= [];
gdjs.MainMenuCode.GDCursorObjectObjects5= [];
gdjs.MainMenuCode.GDCursorObjectObjects6= [];
gdjs.MainMenuCode.GDLampObjects1= [];
gdjs.MainMenuCode.GDLampObjects2= [];
gdjs.MainMenuCode.GDLampObjects3= [];
gdjs.MainMenuCode.GDLampObjects4= [];
gdjs.MainMenuCode.GDLampObjects5= [];
gdjs.MainMenuCode.GDLampObjects6= [];
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects1= [];
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects2= [];
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects3= [];
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects4= [];
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects5= [];
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects6= [];
gdjs.MainMenuCode.GDBackButtonObjects1= [];
gdjs.MainMenuCode.GDBackButtonObjects2= [];
gdjs.MainMenuCode.GDBackButtonObjects3= [];
gdjs.MainMenuCode.GDBackButtonObjects4= [];
gdjs.MainMenuCode.GDBackButtonObjects5= [];
gdjs.MainMenuCode.GDBackButtonObjects6= [];
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects1= [];
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects2= [];
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects3= [];
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects4= [];
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects5= [];
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects6= [];
gdjs.MainMenuCode.GDScrollButtonObjects1= [];
gdjs.MainMenuCode.GDScrollButtonObjects2= [];
gdjs.MainMenuCode.GDScrollButtonObjects3= [];
gdjs.MainMenuCode.GDScrollButtonObjects4= [];
gdjs.MainMenuCode.GDScrollButtonObjects5= [];
gdjs.MainMenuCode.GDScrollButtonObjects6= [];
gdjs.MainMenuCode.GDCommunityLevelButtonObjects1= [];
gdjs.MainMenuCode.GDCommunityLevelButtonObjects2= [];
gdjs.MainMenuCode.GDCommunityLevelButtonObjects3= [];
gdjs.MainMenuCode.GDCommunityLevelButtonObjects4= [];
gdjs.MainMenuCode.GDCommunityLevelButtonObjects5= [];
gdjs.MainMenuCode.GDCommunityLevelButtonObjects6= [];
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects1= [];
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2= [];
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3= [];
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4= [];
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects5= [];
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects6= [];
gdjs.MainMenuCode.GDUsernameMenuObjects1= [];
gdjs.MainMenuCode.GDUsernameMenuObjects2= [];
gdjs.MainMenuCode.GDUsernameMenuObjects3= [];
gdjs.MainMenuCode.GDUsernameMenuObjects4= [];
gdjs.MainMenuCode.GDUsernameMenuObjects5= [];
gdjs.MainMenuCode.GDUsernameMenuObjects6= [];
gdjs.MainMenuCode.GDFadeObjects1= [];
gdjs.MainMenuCode.GDFadeObjects2= [];
gdjs.MainMenuCode.GDFadeObjects3= [];
gdjs.MainMenuCode.GDFadeObjects4= [];
gdjs.MainMenuCode.GDFadeObjects5= [];
gdjs.MainMenuCode.GDFadeObjects6= [];
gdjs.MainMenuCode.GDEnterButtonObjects1= [];
gdjs.MainMenuCode.GDEnterButtonObjects2= [];
gdjs.MainMenuCode.GDEnterButtonObjects3= [];
gdjs.MainMenuCode.GDEnterButtonObjects4= [];
gdjs.MainMenuCode.GDEnterButtonObjects5= [];
gdjs.MainMenuCode.GDEnterButtonObjects6= [];
gdjs.MainMenuCode.GDUsernameTextInputObjects1= [];
gdjs.MainMenuCode.GDUsernameTextInputObjects2= [];
gdjs.MainMenuCode.GDUsernameTextInputObjects3= [];
gdjs.MainMenuCode.GDUsernameTextInputObjects4= [];
gdjs.MainMenuCode.GDUsernameTextInputObjects5= [];
gdjs.MainMenuCode.GDUsernameTextInputObjects6= [];
gdjs.MainMenuCode.GDTransitionInObjects1= [];
gdjs.MainMenuCode.GDTransitionInObjects2= [];
gdjs.MainMenuCode.GDTransitionInObjects3= [];
gdjs.MainMenuCode.GDTransitionInObjects4= [];
gdjs.MainMenuCode.GDTransitionInObjects5= [];
gdjs.MainMenuCode.GDTransitionInObjects6= [];
gdjs.MainMenuCode.GDMaskObjectObjects1= [];
gdjs.MainMenuCode.GDMaskObjectObjects2= [];
gdjs.MainMenuCode.GDMaskObjectObjects3= [];
gdjs.MainMenuCode.GDMaskObjectObjects4= [];
gdjs.MainMenuCode.GDMaskObjectObjects5= [];
gdjs.MainMenuCode.GDMaskObjectObjects6= [];
gdjs.MainMenuCode.GDCommunityLevelNameObjects1= [];
gdjs.MainMenuCode.GDCommunityLevelNameObjects2= [];
gdjs.MainMenuCode.GDCommunityLevelNameObjects3= [];
gdjs.MainMenuCode.GDCommunityLevelNameObjects4= [];
gdjs.MainMenuCode.GDCommunityLevelNameObjects5= [];
gdjs.MainMenuCode.GDCommunityLevelNameObjects6= [];
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects1= [];
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2= [];
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects3= [];
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects4= [];
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects5= [];
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects6= [];
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects1= [];
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2= [];
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects3= [];
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects4= [];
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects5= [];
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects6= [];
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects1= [];
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects2= [];
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3= [];
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects4= [];
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects5= [];
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects6= [];
gdjs.MainMenuCode.GDRefreshListButtonObjects1= [];
gdjs.MainMenuCode.GDRefreshListButtonObjects2= [];
gdjs.MainMenuCode.GDRefreshListButtonObjects3= [];
gdjs.MainMenuCode.GDRefreshListButtonObjects4= [];
gdjs.MainMenuCode.GDRefreshListButtonObjects5= [];
gdjs.MainMenuCode.GDRefreshListButtonObjects6= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects3= [];
gdjs.MainMenuCode.GDNewSpriteObjects4= [];
gdjs.MainMenuCode.GDNewSpriteObjects5= [];
gdjs.MainMenuCode.GDNewSpriteObjects6= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjectObjects1Objects = Hashtable.newFrom({"CursorObject": gdjs.MainMenuCode.GDCursorObjectObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDTransitionInObjects1Objects = Hashtable.newFrom({"TransitionIn": gdjs.MainMenuCode.GDTransitionInObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDEnterButtonObjects4Objects = Hashtable.newFrom({"EnterButton": gdjs.MainMenuCode.GDEnterButtonObjects4});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDEnterButtonObjects3Objects = Hashtable.newFrom({"EnterButton": gdjs.MainMenuCode.GDEnterButtonObjects3});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainMenuCode.GDEnterButtonObjects3, gdjs.MainMenuCode.GDEnterButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDEnterButtonObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnterButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDEnterButtonObjects4[i].getBehavior("Animation").getAnimationName() == "Hover") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnterButtonObjects4[k] = gdjs.MainMenuCode.GDEnterButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnterButtonObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnterButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDEnterButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnterButtonObjects4[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsHoverSoundEffect", false, 20, 1);
}
}

}


{

/* Reuse gdjs.MainMenuCode.GDEnterButtonObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDEnterButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnterButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDEnterButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Idle") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnterButtonObjects3[k] = gdjs.MainMenuCode.GDEnterButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnterButtonObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnterButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDEnterButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnterButtonObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("EnterButton"), gdjs.MainMenuCode.GDEnterButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnterButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDEnterButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnterButtonObjects3[k] = gdjs.MainMenuCode.GDEnterButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnterButtonObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDEnterButtonObjects3Objects = Hashtable.newFrom({"EnterButton": gdjs.MainMenuCode.GDEnterButtonObjects3});
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("EnterButton"), gdjs.MainMenuCode.GDEnterButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23898068);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnterButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDEnterButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnterButtonObjects3[k] = gdjs.MainMenuCode.GDEnterButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnterButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDEnterButtonObjects3Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnterButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDEnterButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnterButtonObjects3[i].getBehavior("Animation").setAnimationName("Pressed");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonClick.ogg", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnterButton"), gdjs.MainMenuCode.GDEnterButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnterButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDEnterButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnterButtonObjects2[k] = gdjs.MainMenuCode.GDEnterButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnterButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnterButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDEnterButtonObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnterButtonObjects2[k] = gdjs.MainMenuCode.GDEnterButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnterButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23811692);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnterButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.MainMenuCode.GDFadeObjects2);
gdjs.copyArray(runtimeScene.getObjects("UsernameMenu"), gdjs.MainMenuCode.GDUsernameMenuObjects2);
gdjs.copyArray(runtimeScene.getObjects("UsernameTextInput"), gdjs.MainMenuCode.GDUsernameTextInputObjects2);
{gdjs.evtTools.storage.writeStringInJSONFile("Profile", "Username", (( gdjs.MainMenuCode.GDUsernameTextInputObjects2.length === 0 ) ? "" :gdjs.MainMenuCode.GDUsernameTextInputObjects2[0].getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.MainMenuCode.GDUsernameTextInputObjects2.length === 0 ) ? "" :gdjs.MainMenuCode.GDUsernameTextInputObjects2[0].getText()));
}
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDUsernameMenuObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDUsernameMenuObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDEnterButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnterButtonObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDUsernameTextInputObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDUsernameTextInputObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "MainMenu.ogg", 0, true, 40, 1);
}
}

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList2(runtimeScene);
}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDFadeObjects2Objects = Hashtable.newFrom({"Fade": gdjs.MainMenuCode.GDFadeObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDUsernameMenuObjects2Objects = Hashtable.newFrom({"UsernameMenu": gdjs.MainMenuCode.GDUsernameMenuObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDEnterButtonObjects2Objects = Hashtable.newFrom({"EnterButton": gdjs.MainMenuCode.GDEnterButtonObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDUsernameTextInputObjects2Objects = Hashtable.newFrom({"UsernameTextInput": gdjs.MainMenuCode.GDUsernameTextInputObjects2});
gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Profile", "Username"));
if (isConditionTrue_0) {
gdjs.MainMenuCode.GDEnterButtonObjects2.length = 0;

gdjs.MainMenuCode.GDFadeObjects2.length = 0;

gdjs.MainMenuCode.GDUsernameMenuObjects2.length = 0;

gdjs.MainMenuCode.GDUsernameTextInputObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDFadeObjects2Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeObjects2[i].getBehavior("Resizable").setSize(640, 360);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeObjects2[i].setZOrder(9);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeObjects2[i].getBehavior("Opacity").setOpacity(200);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDUsernameMenuObjects2Objects, 198, 131, "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDUsernameMenuObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDUsernameMenuObjects2[i].setZOrder(10);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDEnterButtonObjects2Objects, (( gdjs.MainMenuCode.GDUsernameMenuObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDUsernameMenuObjects2[0].getPointX("Enter")), (( gdjs.MainMenuCode.GDUsernameMenuObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDUsernameMenuObjects2[0].getPointY("Enter")), "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDEnterButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnterButtonObjects2[i].setZOrder(11);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDUsernameTextInputObjects2Objects, (( gdjs.MainMenuCode.GDUsernameMenuObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDUsernameMenuObjects2[0].getPointX("Input")), (( gdjs.MainMenuCode.GDUsernameMenuObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDUsernameMenuObjects2[0].getPointY("Input")), "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDUsernameTextInputObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDUsernameTextInputObjects2[i].getBehavior("Resizable").setSize(172, 23);
}
}
}

}


};gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Profile", "Username");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "MainMenu.ogg", 0, true, 40, 1);
}
{gdjs.evtTools.storage.readStringFromJSONFile("Profile", "Username", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
}

}


};gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList4(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList5(runtimeScene);
}


};gdjs.MainMenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Clouds"), gdjs.MainMenuCode.GDCloudsObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDCloudsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCloudsObjects1[i].setXOffset(gdjs.MainMenuCode.GDCloudsObjects1[i].getXOffset() + (0.3));
}
}
}

}


};gdjs.MainMenuCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CursorObject"), gdjs.MainMenuCode.GDCursorObjectObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDCursorObjectObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCursorObjectObjects2[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
}
}

}


};gdjs.MainMenuCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


};gdjs.MainMenuCode.eventsList11 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList9(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList10(runtimeScene);
}


};gdjs.MainMenuCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.MainMenuCode.GDEnemyObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDEnemyObjects3[i].getX() <= 285 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnemyObjects3[k] = gdjs.MainMenuCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnemyObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDEnemyObjects3[i].getVariableString(gdjs.MainMenuCode.GDEnemyObjects3[i].getVariables().getFromIndex(0)) == "Right") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnemyObjects3[k] = gdjs.MainMenuCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnemyObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnemyObjects3[i].returnVariable(gdjs.MainMenuCode.GDEnemyObjects3[i].getVariables().getFromIndex(0)).setString("Right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.MainMenuCode.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDEnemyObjects2[i].getX() >= 323 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnemyObjects2[k] = gdjs.MainMenuCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnemyObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDEnemyObjects2[i].getVariableString(gdjs.MainMenuCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "Left") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnemyObjects2[k] = gdjs.MainMenuCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnemyObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnemyObjects2[i].returnVariable(gdjs.MainMenuCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("Left");
}
}
}

}


};gdjs.MainMenuCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.MainMenuCode.GDEnemyObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDEnemyObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnemyObjects2[k] = gdjs.MainMenuCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnemyObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


};gdjs.MainMenuCode.eventsList14 = function(runtimeScene) {

{

/* Reuse gdjs.MainMenuCode.GDEnemyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnemyObjects1[k] = gdjs.MainMenuCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.MainMenuCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.MainMenuCode.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDEnemyObjects2[i].getVariableString(gdjs.MainMenuCode.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnemyObjects2[k] = gdjs.MainMenuCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnemyObjects2[i].addPolarForce(0, 50, 0);
}
}

{ //Subevents
gdjs.MainMenuCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.MainMenuCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDEnemyObjects1[i].getVariableString(gdjs.MainMenuCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDEnemyObjects1[k] = gdjs.MainMenuCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDEnemyObjects1[i].addPolarForce(180, 50, 0);
}
}

{ //Subevents
gdjs.MainMenuCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList16 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList12(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList15(runtimeScene);
}


};gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects = Hashtable.newFrom({"UsernameMenu": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBuildLevelButtonObjects4Objects = Hashtable.newFrom({"BuildLevelButton": gdjs.MainMenuCode.GDBuildLevelButtonObjects4});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBuildLevelButtonObjects3Objects = Hashtable.newFrom({"BuildLevelButton": gdjs.MainMenuCode.GDBuildLevelButtonObjects3});
gdjs.MainMenuCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainMenuCode.GDBuildLevelButtonObjects3, gdjs.MainMenuCode.GDBuildLevelButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBuildLevelButtonObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBuildLevelButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBuildLevelButtonObjects4[i].getBehavior("Animation").getAnimationName() == "Hover") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBuildLevelButtonObjects4[k] = gdjs.MainMenuCode.GDBuildLevelButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBuildLevelButtonObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBuildLevelButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDBuildLevelButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBuildLevelButtonObjects4[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsHoverSoundEffect", false, 20, 1);
}
}

}


{

/* Reuse gdjs.MainMenuCode.GDBuildLevelButtonObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBuildLevelButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Idle") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBuildLevelButtonObjects3[k] = gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBuildLevelButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BuildLevelButton"), gdjs.MainMenuCode.GDBuildLevelButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBuildLevelButtonObjects3[k] = gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects) == 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBuildLevelButtonObjects3Objects = Hashtable.newFrom({"BuildLevelButton": gdjs.MainMenuCode.GDBuildLevelButtonObjects3});
gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects = Hashtable.newFrom({"UsernameMenu": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDTransitionToBuildLevelObjects3Objects = Hashtable.newFrom({"TransitionToBuildLevel": gdjs.MainMenuCode.GDTransitionToBuildLevelObjects3});
gdjs.MainMenuCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BuildLevelButton"), gdjs.MainMenuCode.GDBuildLevelButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24011444);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBuildLevelButtonObjects3[k] = gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.tween.sceneTweenIsPlaying(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.tween.sceneTweenIsPlaying(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBuildLevelButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects) == 0;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBuildLevelButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i].getBehavior("Animation").setAnimationName("Pressed");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonClick.ogg", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuildLevelButton"), gdjs.MainMenuCode.GDBuildLevelButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBuildLevelButtonObjects3[k] = gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBuildLevelButtonObjects3[k] = gdjs.MainMenuCode.GDBuildLevelButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24014260);
}
}
}
if (isConditionTrue_0) {
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDTransitionToBuildLevelObjects3Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionToBuildLevelObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionToBuildLevelObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.6, "Circular", "Forward", 0, null);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionToBuildLevelObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionToBuildLevelObjects3[i].setZOrder(100);
}
}
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransitionToBuildLevel"), gdjs.MainMenuCode.GDTransitionToBuildLevelObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTransitionToBuildLevelObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTransitionToBuildLevelObjects2[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTransitionToBuildLevelObjects2[k] = gdjs.MainMenuCode.GDTransitionToBuildLevelObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24016180);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BuildLevel", false);
}
}

}


};gdjs.MainMenuCode.eventsList20 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList18(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList19(runtimeScene);
}


};gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects = Hashtable.newFrom({"UsernameMenu": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsButtonObjects4Objects = Hashtable.newFrom({"CommunityLevelsButton": gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsButtonObjects3Objects = Hashtable.newFrom({"CommunityLevelsButton": gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3});
gdjs.MainMenuCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3, gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsButtonObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4[i].getBehavior("Animation").getAnimationName() == "Hover") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4[k] = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsHoverSoundEffect", false, 20, 1);
}
}

}


{

/* Reuse gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Idle") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[k] = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelsButton"), gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[k] = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects) == 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfEmptyGDTransitionToBuildLevelObjects = Hashtable.newFrom({"TransitionToBuildLevel": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsButtonObjects3Objects = Hashtable.newFrom({"CommunityLevelsButton": gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3});
gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects = Hashtable.newFrom({"UsernameMenu": []});
gdjs.MainMenuCode.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelsButton"), gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24021428);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[k] = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.tween.sceneTweenIsPlaying(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.tween.sceneTweenIsPlaying(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDTransitionToBuildLevelObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects) == 0;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3[i].getBehavior("Animation").setAnimationName("Pressed");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonClick.ogg", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelsButton"), gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2[k] = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2[k] = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24024532);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2 */
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Left", -(320), 180, "", "easeInOutBack", 0.7);
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.eventsList24 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList22(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList23(runtimeScene);
}


};gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects = Hashtable.newFrom({"UsernameMenu": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBackButtonObjects4Objects = Hashtable.newFrom({"BackButton": gdjs.MainMenuCode.GDBackButtonObjects4});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBackButtonObjects3Objects = Hashtable.newFrom({"BackButton": gdjs.MainMenuCode.GDBackButtonObjects3});
gdjs.MainMenuCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainMenuCode.GDBackButtonObjects3, gdjs.MainMenuCode.GDBackButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBackButtonObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBackButtonObjects4[i].getBehavior("Animation").getAnimationName() == "Hover") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects4[k] = gdjs.MainMenuCode.GDBackButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBackButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDBackButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackButtonObjects4[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsHoverSoundEffect", false, 20, 1);
}
}

}


{

/* Reuse gdjs.MainMenuCode.GDBackButtonObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBackButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBackButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Idle") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects3[k] = gdjs.MainMenuCode.GDBackButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBackButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDBackButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackButtonObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainMenuCode.GDBackButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBackButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects3[k] = gdjs.MainMenuCode.GDBackButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects) == 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList25(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBackButtonObjects3Objects = Hashtable.newFrom({"BackButton": gdjs.MainMenuCode.GDBackButtonObjects3});
gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects = Hashtable.newFrom({"UsernameMenu": []});
gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects = Hashtable.newFrom({"TransitionToPlayLevel": []});
gdjs.MainMenuCode.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainMenuCode.GDBackButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24029420);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBackButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects3[k] = gdjs.MainMenuCode.GDBackButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.tween.sceneTweenIsPlaying(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.tween.sceneTweenIsPlaying(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDBackButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects) == 0;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBackButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDBackButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackButtonObjects3[i].getBehavior("Animation").setAnimationName("Pressed");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonClick.ogg", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainMenuCode.GDBackButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBackButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects2[k] = gdjs.MainMenuCode.GDBackButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBackButtonObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects2[k] = gdjs.MainMenuCode.GDBackButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24032612);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBackButtonObjects2 */
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Right", 320, 180, "", "easeInOutBack", 0.7);
}
{for(var i = 0, len = gdjs.MainMenuCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackButtonObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.eventsList28 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList26(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList27(runtimeScene);
}


};gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects = Hashtable.newFrom({"UsernameMenu": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGetTheTemplateButtonObjects4Objects = Hashtable.newFrom({"GetTheTemplateButton": gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGetTheTemplateButtonObjects3Objects = Hashtable.newFrom({"GetTheTemplateButton": gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3});
gdjs.MainMenuCode.eventsList29 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3, gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGetTheTemplateButtonObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4[i].getBehavior("Animation").getAnimationName() == "Hover") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4[k] = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsHoverSoundEffect", false, 20, 1);
}
}

}


{

/* Reuse gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGetTheTemplateButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Idle") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[k] = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GetTheTemplateButton"), gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[k] = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects) == 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGetTheTemplateButtonObjects3Objects = Hashtable.newFrom({"GetTheTemplateButton": gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3});
gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects = Hashtable.newFrom({"UsernameMenu": []});
gdjs.MainMenuCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GetTheTemplateButton"), gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24038028);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[k] = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.tween.sceneTweenIsPlaying(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.tween.sceneTweenIsPlaying(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGetTheTemplateButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDUsernameMenuObjects) == 0;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3[i].getBehavior("Animation").setAnimationName("Pressed");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonClick.ogg", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GetTheTemplateButton"), gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2[k] = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2[k] = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24040492);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{gdjs.evtTools.window.openURL("https://vegetato.itch.io/land-maker-template/purchase", runtimeScene);
}
}

}


};gdjs.MainMenuCode.eventsList32 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList30(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList31(runtimeScene);
}


};gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects = Hashtable.newFrom({"TransitionToPlayLevel": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRefreshListButtonObjects3Objects = Hashtable.newFrom({"RefreshListButton": gdjs.MainMenuCode.GDRefreshListButtonObjects3});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRefreshListButtonObjects2Objects = Hashtable.newFrom({"RefreshListButton": gdjs.MainMenuCode.GDRefreshListButtonObjects2});
gdjs.MainMenuCode.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RefreshListButton"), gdjs.MainMenuCode.GDRefreshListButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRefreshListButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRefreshListButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDRefreshListButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Hover") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRefreshListButtonObjects3[k] = gdjs.MainMenuCode.GDRefreshListButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRefreshListButtonObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDRefreshListButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDRefreshListButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRefreshListButtonObjects3[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsHoverSoundEffect", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RefreshListButton"), gdjs.MainMenuCode.GDRefreshListButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRefreshListButtonObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRefreshListButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDRefreshListButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Idle") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRefreshListButtonObjects2[k] = gdjs.MainMenuCode.GDRefreshListButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRefreshListButtonObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDRefreshListButtonObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDRefreshListButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRefreshListButtonObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainMenuCode.GDBackButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBackButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects2[k] = gdjs.MainMenuCode.GDBackButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects) == 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList33(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects = Hashtable.newFrom({"TransitionToPlayLevel": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRefreshListButtonObjects2Objects = Hashtable.newFrom({"RefreshListButton": gdjs.MainMenuCode.GDRefreshListButtonObjects2});
gdjs.MainMenuCode.eventsList35 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MainMenuCode.GDBackButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RefreshListButton"), gdjs.MainMenuCode.GDRefreshListButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24046428);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBackButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackButtonObjects2[k] = gdjs.MainMenuCode.GDBackButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRefreshListButtonObjects2Objects, runtimeScene, true, false);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelName"), gdjs.MainMenuCode.GDCommunityLevelNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelOwner"), gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2);
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelsStars"), gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2);
gdjs.copyArray(runtimeScene.getObjects("MaskObject"), gdjs.MainMenuCode.GDMaskObjectObjects2);
/* Reuse gdjs.MainMenuCode.GDRefreshListButtonObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonClick.ogg", false, 80, 1);
}
{for(var i = 0, len = gdjs.MainMenuCode.GDRefreshListButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRefreshListButtonObjects2[i].getBehavior("Tween").addObjectScaleTween3("ScaleDown", 0.7, "linear", 0.03, false, true);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelNameObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelNameObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMaskObjectObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMaskObjectObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}
{gdjs.evtTools.firebaseTools.firestore.startQuery("Levels", "CommunityLevels");
}
{gdjs.evtTools.firebaseTools.firestore.queryWhere("Levels", "Username", "!=", "0");
}
{gdjs.evtTools.firebaseTools.firestore.executeQuery("Levels", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(2));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RefreshListButton"), gdjs.MainMenuCode.GDRefreshListButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRefreshListButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDRefreshListButtonObjects1[i].getBehavior("Tween").hasFinished("ScaleDown") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRefreshListButtonObjects1[k] = gdjs.MainMenuCode.GDRefreshListButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRefreshListButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDRefreshListButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDRefreshListButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRefreshListButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("ScaleBack", 1, "linear", 0.03, false, true);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDRefreshListButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRefreshListButtonObjects1[i].getBehavior("Tween").removeTween("ScaleDown");
}
}
}

}


};gdjs.MainMenuCode.eventsList36 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList34(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList35(runtimeScene);
}


};gdjs.MainMenuCode.eventsList37 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList20(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList24(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList28(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList32(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList36(runtimeScene);
}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects4Objects = Hashtable.newFrom({"CommunityLevelButton": gdjs.MainMenuCode.GDCommunityLevelButtonObjects4});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects3Objects = Hashtable.newFrom({"CommunityLevelButton": gdjs.MainMenuCode.GDCommunityLevelButtonObjects3});
gdjs.MainMenuCode.eventsList38 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects4);
gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCommunityLevelButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCommunityLevelButtonObjects4[i].getBehavior("Animation").getAnimationName() == "Hover") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCommunityLevelButtonObjects4[k] = gdjs.MainMenuCode.GDCommunityLevelButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCommunityLevelButtonObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects4.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects4[k] = gdjs.MainMenuCode.GDScrollButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < 340;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) > 28;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCommunityLevelButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects4[i].getBehavior("Animation").setAnimationName("Hover");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsHoverSoundEffect", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Idle") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[k] = gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects3[k] = gdjs.MainMenuCode.GDScrollButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCommunityLevelButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects = Hashtable.newFrom({"TransitionToPlayLevel": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects3Objects = Hashtable.newFrom({"CommunityLevelButton": gdjs.MainMenuCode.GDCommunityLevelButtonObjects3});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDTransitionToPlayLevelObjects3Objects = Hashtable.newFrom({"TransitionToPlayLevel": gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3});
gdjs.MainMenuCode.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24057836);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < 340;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) > 28;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects3Objects, runtimeScene, true, false);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCommunityLevelButtonObjects3 */
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3.length = 0;

{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(4)), runtimeScene.getGame().getVariables().getFromIndex(1));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(5)), runtimeScene.getGame().getVariables().getFromIndex(2));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(6)), runtimeScene.getGame().getVariables().getFromIndex(3));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(7)), runtimeScene.getGame().getVariables().getFromIndex(4));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(8)), runtimeScene.getGame().getVariables().getFromIndex(5));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(9)), runtimeScene.getGame().getVariables().getFromIndex(6));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(10)), runtimeScene.getGame().getVariables().getFromIndex(7));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(11)), runtimeScene.getGame().getVariables().getFromIndex(8));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(12)), runtimeScene.getGame().getVariables().getFromIndex(9));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(13)), runtimeScene.getGame().getVariables().getFromIndex(10));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(14)), runtimeScene.getGame().getVariables().getFromIndex(11));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(15)), runtimeScene.getGame().getVariables().getFromIndex(12));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(16)), runtimeScene.getGame().getVariables().getFromIndex(13));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(17)), runtimeScene.getGame().getVariables().getFromIndex(14));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(18)), runtimeScene.getGame().getVariables().getFromIndex(15));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(19)), runtimeScene.getGame().getVariables().getFromIndex(16));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(20)), runtimeScene.getGame().getVariables().getFromIndex(17));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(21)), runtimeScene.getGame().getVariables().getFromIndex(18));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(22)), runtimeScene.getGame().getVariables().getFromIndex(19));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.objectVariableStructureToJSON((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getVariables()).getFromIndex(23)), runtimeScene.getGame().getVariables().getFromIndex(20));
}
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonClick.ogg", false, 80, 1);
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[i].getBehavior("Tween").addObjectScaleTween3("ScaleDown", 0.6, "linear", 0.03, false, true);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDTransitionToPlayLevelObjects3Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3[i].setZOrder(200);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.7, "Circular", "Forward", 0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransitionToPlayLevel"), gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3[k] = gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24066460);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayLevel", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].getBehavior("Tween").hasFinished("ScaleDown") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[k] = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDCommunityLevelButtonObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].getBehavior("Tween").addObjectScaleTween3("ScaleBack", 1, "linear", 0.03, false, true);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].getBehavior("Tween").removeTween("ScaleDown");
}
}
}

}


};gdjs.MainMenuCode.eventsList40 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList38(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList39(runtimeScene);
}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDScrollButtonObjects4Objects = Hashtable.newFrom({"ScrollButton": gdjs.MainMenuCode.GDScrollButtonObjects4});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDScrollButtonObjects3Objects = Hashtable.newFrom({"ScrollButton": gdjs.MainMenuCode.GDScrollButtonObjects3});
gdjs.MainMenuCode.eventsList41 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDScrollButtonObjects4Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDScrollButtonObjects4[i].getBehavior("Animation").getAnimationName() == "Hover") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects4[k] = gdjs.MainMenuCode.GDScrollButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects4[i].getBehavior("Animation").setAnimationName("Hover");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDScrollButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Idle") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects3[k] = gdjs.MainMenuCode.GDScrollButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects3[k] = gdjs.MainMenuCode.GDScrollButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDScrollButtonObjects4Objects = Hashtable.newFrom({"ScrollButton": gdjs.MainMenuCode.GDScrollButtonObjects4});
gdjs.MainMenuCode.eventsList42 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(10).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDScrollButtonObjects4Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setBoolean(true);
}
}

}


};gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects = Hashtable.newFrom({"TransitionToPlayLevel": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDScrollButtonObjects4Objects = Hashtable.newFrom({"ScrollButton": gdjs.MainMenuCode.GDScrollButtonObjects4});
gdjs.MainMenuCode.eventsList43 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects5.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects5[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects5[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects5[k] = gdjs.MainMenuCode.GDScrollButtonObjects5[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects5 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects5.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects5[i].returnVariable(gdjs.MainMenuCode.GDScrollButtonObjects5[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects4.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects4[k] = gdjs.MainMenuCode.GDScrollButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects4[i].returnVariable(gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}
}

}


};gdjs.MainMenuCode.eventsList44 = function(runtimeScene) {

};gdjs.MainMenuCode.mapOfEmptyGDCommunityLevelButtonObjects = Hashtable.newFrom({"CommunityLevelButton": []});
gdjs.MainMenuCode.eventsList45 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList42(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects4.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects4[k] = gdjs.MainMenuCode.GDScrollButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDScrollButtonObjects4Objects, runtimeScene, true, false);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects4[i].returnVariable(gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects4[i].returnVariable(gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - (( gdjs.MainMenuCode.GDScrollButtonObjects4.length === 0 ) ? 0 :gdjs.MainMenuCode.GDScrollButtonObjects4[0].getPointY("")) - 8.5);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList43(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects4.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects4[k] = gdjs.MainMenuCode.GDScrollButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects4.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects4[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects4[k] = gdjs.MainMenuCode.GDScrollButtonObjects4[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects4 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects4[i].setY(gdjs.evtTools.common.clamp(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() - 8.5, 37, 314));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects4);

for (gdjs.MainMenuCode.forEachIndex5 = 0;gdjs.MainMenuCode.forEachIndex5 < gdjs.MainMenuCode.GDCommunityLevelButtonObjects4.length;++gdjs.MainMenuCode.forEachIndex5) {
gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects5);
gdjs.MainMenuCode.GDCommunityLevelButtonObjects5.length = 0;


gdjs.MainMenuCode.forEachTemporary5 = gdjs.MainMenuCode.GDCommunityLevelButtonObjects4[gdjs.MainMenuCode.forEachIndex5];
gdjs.MainMenuCode.GDCommunityLevelButtonObjects5.push(gdjs.MainMenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects5.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects5[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects5[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects5[k] = gdjs.MainMenuCode.GDScrollButtonObjects5[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects5.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects5.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects5[i].setY(gdjs.MainMenuCode.GDCommunityLevelButtonObjects5[i].getVariables().getFromIndex(3).getAsNumber() - ((( gdjs.MainMenuCode.GDScrollButtonObjects5.length === 0 ) ? 0 :gdjs.MainMenuCode.GDScrollButtonObjects5[0].getPointY("")) - 37) * runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(24 * gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDCommunityLevelButtonObjects));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(312);
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(277);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber((runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber()) / runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}

}


};gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects = Hashtable.newFrom({"TransitionToPlayLevel": []});
gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects = Hashtable.newFrom({"TransitionToPlayLevel": []});
gdjs.MainMenuCode.eventsList46 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects3[i].getY() < 314 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects3[k] = gdjs.MainMenuCode.GDScrollButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) == -(320);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects) == 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects3[i].returnVariable(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects3[i].setY(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getY() + (4));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects3[i].getY() > 37 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects3[k] = gdjs.MainMenuCode.GDScrollButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) == -(320);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDTransitionToPlayLevelObjects) == 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects3[i].returnVariable(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects3[i].setY(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getY() - (4));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isScrollingDown(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isScrollingUp(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects3[k] = gdjs.MainMenuCode.GDScrollButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariableBoolean(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects3[k] = gdjs.MainMenuCode.GDScrollButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects3[i].returnVariable(gdjs.MainMenuCode.GDScrollButtonObjects3[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects3[i].getY() > 314 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects3[k] = gdjs.MainMenuCode.GDScrollButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects3[i].setY(314);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ScrollButton"), gdjs.MainMenuCode.GDScrollButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDScrollButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDScrollButtonObjects2[i].getY() < 37 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDScrollButtonObjects2[k] = gdjs.MainMenuCode.GDScrollButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDScrollButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDScrollButtonObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDScrollButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDScrollButtonObjects2[i].setY(37);
}
}
}

}


};gdjs.MainMenuCode.eventsList47 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList41(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList45(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList46(runtimeScene);
}


};gdjs.MainMenuCode.mapOfEmptyGDCommunityLevelButtonObjects = Hashtable.newFrom({"CommunityLevelButton": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects = Hashtable.newFrom({"MaskObject": gdjs.MainMenuCode.GDMaskObjectObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects2Objects = Hashtable.newFrom({"CommunityLevelButton": gdjs.MainMenuCode.GDCommunityLevelButtonObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects = Hashtable.newFrom({"MaskObject": gdjs.MainMenuCode.GDMaskObjectObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelNameObjects2Objects = Hashtable.newFrom({"CommunityLevelName": gdjs.MainMenuCode.GDCommunityLevelNameObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects = Hashtable.newFrom({"MaskObject": gdjs.MainMenuCode.GDMaskObjectObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelOwnerObjects2Objects = Hashtable.newFrom({"CommunityLevelOwner": gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects = Hashtable.newFrom({"MaskObject": gdjs.MainMenuCode.GDMaskObjectObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsStarsObjects2Objects = Hashtable.newFrom({"CommunityLevelsStars": gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects = Hashtable.newFrom({"MaskObject": gdjs.MainMenuCode.GDMaskObjectObjects2});
gdjs.MainMenuCode.eventsList48 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDCommunityLevelButtonObjects) == 0);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24095716);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelName"), gdjs.MainMenuCode.GDCommunityLevelNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelOwner"), gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2);
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelsStars"), gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2);
gdjs.MainMenuCode.GDMaskObjectObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects, -(621), 28, "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDMaskObjectObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMaskObjectObjects2[i].setZOrder(50);
}
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects2Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects, null);
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelNameObjects2Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects, null);
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelOwnerObjects2Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects, null);
}
{gdjs.evtsExt__SpriteMasking__Mask.func(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsStarsObjects2Objects, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDMaskObjectObjects2Objects, null);
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects4Objects = Hashtable.newFrom({"CommunityLevelButton": gdjs.MainMenuCode.GDCommunityLevelButtonObjects4});
gdjs.MainMenuCode.eventsList49 = function(runtimeScene) {

};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects4Objects = Hashtable.newFrom({"CommunityLevelButton": gdjs.MainMenuCode.GDCommunityLevelButtonObjects4});
gdjs.MainMenuCode.eventsList50 = function(runtimeScene) {

};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects3Objects = Hashtable.newFrom({"CommunityLevelButton": gdjs.MainMenuCode.GDCommunityLevelButtonObjects3});
gdjs.MainMenuCode.eventsList51 = function(runtimeScene) {

};gdjs.MainMenuCode.eventsList52 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelName"), gdjs.MainMenuCode.GDCommunityLevelNameObjects3);

for (gdjs.MainMenuCode.forEachIndex4 = 0;gdjs.MainMenuCode.forEachIndex4 < gdjs.MainMenuCode.GDCommunityLevelNameObjects3.length;++gdjs.MainMenuCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects4);
gdjs.MainMenuCode.GDCommunityLevelNameObjects4.length = 0;


gdjs.MainMenuCode.forEachTemporary4 = gdjs.MainMenuCode.GDCommunityLevelNameObjects3[gdjs.MainMenuCode.forEachIndex4];
gdjs.MainMenuCode.GDCommunityLevelNameObjects4.push(gdjs.MainMenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects4Objects, (gdjs.MainMenuCode.GDCommunityLevelNameObjects4.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelNameObjects4[0] : null), null);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelNameObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelNameObjects4[i].setY((( gdjs.MainMenuCode.GDCommunityLevelButtonObjects4.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects4[0].getPointY("LevelName")));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelOwner"), gdjs.MainMenuCode.GDCommunityLevelOwnerObjects3);

for (gdjs.MainMenuCode.forEachIndex4 = 0;gdjs.MainMenuCode.forEachIndex4 < gdjs.MainMenuCode.GDCommunityLevelOwnerObjects3.length;++gdjs.MainMenuCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects4);
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects4.length = 0;


gdjs.MainMenuCode.forEachTemporary4 = gdjs.MainMenuCode.GDCommunityLevelOwnerObjects3[gdjs.MainMenuCode.forEachIndex4];
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects4.push(gdjs.MainMenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects4Objects, (gdjs.MainMenuCode.GDCommunityLevelOwnerObjects4.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelOwnerObjects4[0] : null), null);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelOwnerObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelOwnerObjects4[i].setY((( gdjs.MainMenuCode.GDCommunityLevelButtonObjects4.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects4[0].getPointY("LevelOwner")));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CommunityLevelsStars"), gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2);

for (gdjs.MainMenuCode.forEachIndex3 = 0;gdjs.MainMenuCode.forEachIndex3 < gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2.length;++gdjs.MainMenuCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("CommunityLevelButton"), gdjs.MainMenuCode.GDCommunityLevelButtonObjects3);
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects3.length = 0;


gdjs.MainMenuCode.forEachTemporary3 = gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2[gdjs.MainMenuCode.forEachIndex3];
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects3.push(gdjs.MainMenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects3Objects, (gdjs.MainMenuCode.GDCommunityLevelsStarsObjects3.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelsStarsObjects3[0] : null), null);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelsStarsObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelsStarsObjects3[i].setY((( gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects3[0].getPointY("Stars")));
}
}
}
}

}


};gdjs.MainMenuCode.eventsList53 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.startQuery("Levels", "CommunityLevels");
}
{gdjs.evtTools.firebaseTools.firestore.queryWhere("Levels", "Username", "!=", "0");
}
{gdjs.evtTools.firebaseTools.firestore.executeQuery("Levels", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().getFromIndex(2));
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects2Objects = Hashtable.newFrom({"CommunityLevelButton": gdjs.MainMenuCode.GDCommunityLevelButtonObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelNameObjects2Objects = Hashtable.newFrom({"CommunityLevelName": gdjs.MainMenuCode.GDCommunityLevelNameObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelOwnerObjects2Objects = Hashtable.newFrom({"CommunityLevelOwner": gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsStarsObjects2Objects = Hashtable.newFrom({"CommunityLevelsStars": gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2});
gdjs.MainMenuCode.eventsList54 = function(runtimeScene) {

};gdjs.MainMenuCode.eventsList55 = function(runtimeScene) {

{


const iterableReference2 = runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length = 0;

gdjs.MainMenuCode.GDCommunityLevelNameObjects2.length = 0;

gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2.length = 0;

gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24104956);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelButtonObjects2Objects, -(615), 30 + runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].setZOrder(3);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].returnVariable(gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].getVariables().getFromIndex(3)).setNumber((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].returnVariable(gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].getVariables().getFromIndex(0)).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("Username").getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].returnVariable(gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].getVariables().getFromIndex(1)).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("LevelName").getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].returnVariable(gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[i].getVariables().getFromIndex(2)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("LevelDifficulty").getAsNumber());
}
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("Tile1XPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(4));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("Tile1YPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(5));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("Tile2XPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(6));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("Tile2YPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(7));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("Tile3XPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(8));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("Tile3YPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(9));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("Tile4XPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(10));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("Tile4YPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(11));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("PlatformXPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(12));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("PlatformYPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(13));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("CharacterXPosition")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(14));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("CharacterYPosition")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(15));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("SpikeXPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(16));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("SpikeYPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(17));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("EnemyXPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(18));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("EnemyYPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(19));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("SpikeBallXPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(20));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("SpikeBallYPositions")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(21));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("GoalObjectXPosition")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(22));
}
{gdjs.evtTools.network.jsonToObjectVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("docs").getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()).getChild("data").getChild("GoalObjectYPosition")), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null), ((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(23));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelNameObjects2Objects, (( gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getPointX("LevelName")), (( gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getPointY("LevelName")), "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelNameObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelNameObjects2[i].getBehavior("Text").setText(((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelNameObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelNameObjects2[i].setX((( gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getPointX("LevelName")) - ((gdjs.MainMenuCode.GDCommunityLevelNameObjects2[i].getWidth()) / 2));
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelNameObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelNameObjects2[i].setZOrder(4);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.MainMenuCode.GDCommunityLevelNameObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelNameObjects2[0] : null), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelOwnerObjects2Objects, (( gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getPointX("LevelOwner")), (( gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getPointY("LevelOwner")), "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2[i].getBehavior("Text").setText(((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2[i].setX((( gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getPointX("LevelOwner")) - ((gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2[i].getWidth()) / 2));
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2[i].setZOrder(4);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2[0] : null), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCommunityLevelsStarsObjects2Objects, (( gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getPointX("Stars")), (( gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? 0 :gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getPointY("Stars")), "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2[i].getBehavior("Animation").setAnimationIndex(((gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0].getVariables()).getFromIndex(2).getAsNumber() - 1);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2[i].setZOrder(4);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2[0] : null), (gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length !== 0 ? gdjs.MainMenuCode.GDCommunityLevelButtonObjects2[0] : null));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(24);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
}
}
}

}


};gdjs.MainMenuCode.eventsList56 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "ok");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("");
}

{ //Subevents
gdjs.MainMenuCode.eventsList55(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList57 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList40(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList47(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList48(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList52(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList53(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList56(runtimeScene);
}


};gdjs.MainMenuCode.eventsList58 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.MainMenuCode.GDCursorObjectObjects1.length = 0;

gdjs.MainMenuCode.GDTransitionInObjects1.length = 0;

{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDCursorObjectObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDCursorObjectObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCursorObjectObjects1[i].setZOrder(100);
}
}
{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDTransitionInObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionInObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionInObjects1[i].setZOrder(200);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionInObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionInObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.4, "Circular", "Backward", 0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransitionIn"), gdjs.MainMenuCode.GDTransitionInObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTransitionInObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTransitionInObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTransitionInObjects1[k] = gdjs.MainMenuCode.GDTransitionInObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTransitionInObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23959564);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDTransitionInObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionInObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionInObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


gdjs.MainMenuCode.eventsList7(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList8(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList11(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList16(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList37(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList57(runtimeScene);
}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBlueBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects5.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects6.length = 0;
gdjs.MainMenuCode.GDCloudsObjects1.length = 0;
gdjs.MainMenuCode.GDCloudsObjects2.length = 0;
gdjs.MainMenuCode.GDCloudsObjects3.length = 0;
gdjs.MainMenuCode.GDCloudsObjects4.length = 0;
gdjs.MainMenuCode.GDCloudsObjects5.length = 0;
gdjs.MainMenuCode.GDCloudsObjects6.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects4.length = 0;
gdjs.MainMenuCode.GDTitleObjects5.length = 0;
gdjs.MainMenuCode.GDTitleObjects6.length = 0;
gdjs.MainMenuCode.GDFloorObjects1.length = 0;
gdjs.MainMenuCode.GDFloorObjects2.length = 0;
gdjs.MainMenuCode.GDFloorObjects3.length = 0;
gdjs.MainMenuCode.GDFloorObjects4.length = 0;
gdjs.MainMenuCode.GDFloorObjects5.length = 0;
gdjs.MainMenuCode.GDFloorObjects6.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects1.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects2.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects3.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects4.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects5.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects6.length = 0;
gdjs.MainMenuCode.GDEnemyObjects1.length = 0;
gdjs.MainMenuCode.GDEnemyObjects2.length = 0;
gdjs.MainMenuCode.GDEnemyObjects3.length = 0;
gdjs.MainMenuCode.GDEnemyObjects4.length = 0;
gdjs.MainMenuCode.GDEnemyObjects5.length = 0;
gdjs.MainMenuCode.GDEnemyObjects6.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects1.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects2.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects3.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects4.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects5.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects6.length = 0;
gdjs.MainMenuCode.GDSpikeObjects1.length = 0;
gdjs.MainMenuCode.GDSpikeObjects2.length = 0;
gdjs.MainMenuCode.GDSpikeObjects3.length = 0;
gdjs.MainMenuCode.GDSpikeObjects4.length = 0;
gdjs.MainMenuCode.GDSpikeObjects5.length = 0;
gdjs.MainMenuCode.GDSpikeObjects6.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects1.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects2.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects4.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects5.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects6.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects1.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects2.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects3.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects4.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects5.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects6.length = 0;
gdjs.MainMenuCode.GDLampObjects1.length = 0;
gdjs.MainMenuCode.GDLampObjects2.length = 0;
gdjs.MainMenuCode.GDLampObjects3.length = 0;
gdjs.MainMenuCode.GDLampObjects4.length = 0;
gdjs.MainMenuCode.GDLampObjects5.length = 0;
gdjs.MainMenuCode.GDLampObjects6.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects1.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects2.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects3.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects4.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects5.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects6.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects1.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects2.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects3.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects4.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects5.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects6.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects1.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects2.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects3.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects4.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects5.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects6.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects1.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects5.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects6.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects1.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects2.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects3.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects4.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects5.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects6.length = 0;
gdjs.MainMenuCode.GDFadeObjects1.length = 0;
gdjs.MainMenuCode.GDFadeObjects2.length = 0;
gdjs.MainMenuCode.GDFadeObjects3.length = 0;
gdjs.MainMenuCode.GDFadeObjects4.length = 0;
gdjs.MainMenuCode.GDFadeObjects5.length = 0;
gdjs.MainMenuCode.GDFadeObjects6.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects1.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects2.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects3.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects4.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects5.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects6.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects1.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects2.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects3.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects4.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects5.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects6.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects1.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects2.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects3.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects4.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects5.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects6.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects1.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects2.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects3.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects4.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects5.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects6.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects1.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects2.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects4.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects5.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects6.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects1.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects2.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects3.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects4.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects5.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects6.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects5.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects6.length = 0;

gdjs.MainMenuCode.eventsList58(runtimeScene);
gdjs.MainMenuCode.GDBlueBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects5.length = 0;
gdjs.MainMenuCode.GDBlueBackgroundObjects6.length = 0;
gdjs.MainMenuCode.GDCloudsObjects1.length = 0;
gdjs.MainMenuCode.GDCloudsObjects2.length = 0;
gdjs.MainMenuCode.GDCloudsObjects3.length = 0;
gdjs.MainMenuCode.GDCloudsObjects4.length = 0;
gdjs.MainMenuCode.GDCloudsObjects5.length = 0;
gdjs.MainMenuCode.GDCloudsObjects6.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects4.length = 0;
gdjs.MainMenuCode.GDTitleObjects5.length = 0;
gdjs.MainMenuCode.GDTitleObjects6.length = 0;
gdjs.MainMenuCode.GDFloorObjects1.length = 0;
gdjs.MainMenuCode.GDFloorObjects2.length = 0;
gdjs.MainMenuCode.GDFloorObjects3.length = 0;
gdjs.MainMenuCode.GDFloorObjects4.length = 0;
gdjs.MainMenuCode.GDFloorObjects5.length = 0;
gdjs.MainMenuCode.GDFloorObjects6.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects1.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects2.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects3.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects4.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects5.length = 0;
gdjs.MainMenuCode.GDCharacterObjectObjects6.length = 0;
gdjs.MainMenuCode.GDEnemyObjects1.length = 0;
gdjs.MainMenuCode.GDEnemyObjects2.length = 0;
gdjs.MainMenuCode.GDEnemyObjects3.length = 0;
gdjs.MainMenuCode.GDEnemyObjects4.length = 0;
gdjs.MainMenuCode.GDEnemyObjects5.length = 0;
gdjs.MainMenuCode.GDEnemyObjects6.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects1.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects2.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects3.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects4.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects5.length = 0;
gdjs.MainMenuCode.GDGoalObjectObjects6.length = 0;
gdjs.MainMenuCode.GDSpikeObjects1.length = 0;
gdjs.MainMenuCode.GDSpikeObjects2.length = 0;
gdjs.MainMenuCode.GDSpikeObjects3.length = 0;
gdjs.MainMenuCode.GDSpikeObjects4.length = 0;
gdjs.MainMenuCode.GDSpikeObjects5.length = 0;
gdjs.MainMenuCode.GDSpikeObjects6.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects1.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects2.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects3.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects4.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects5.length = 0;
gdjs.MainMenuCode.GDBuildLevelButtonObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsButtonObjects6.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects1.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects2.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects3.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects4.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects5.length = 0;
gdjs.MainMenuCode.GDCursorObjectObjects6.length = 0;
gdjs.MainMenuCode.GDLampObjects1.length = 0;
gdjs.MainMenuCode.GDLampObjects2.length = 0;
gdjs.MainMenuCode.GDLampObjects3.length = 0;
gdjs.MainMenuCode.GDLampObjects4.length = 0;
gdjs.MainMenuCode.GDLampObjects5.length = 0;
gdjs.MainMenuCode.GDLampObjects6.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects1.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects2.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects3.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects4.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects5.length = 0;
gdjs.MainMenuCode.GDTransitionToBuildLevelObjects6.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects1.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects2.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects3.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects4.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects5.length = 0;
gdjs.MainMenuCode.GDBackButtonObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsFrameObjects6.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects1.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects2.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects3.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects4.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects5.length = 0;
gdjs.MainMenuCode.GDScrollButtonObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelButtonObjects6.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects1.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects2.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects3.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects4.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects5.length = 0;
gdjs.MainMenuCode.GDGetTheTemplateButtonObjects6.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects1.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects2.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects3.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects4.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects5.length = 0;
gdjs.MainMenuCode.GDUsernameMenuObjects6.length = 0;
gdjs.MainMenuCode.GDFadeObjects1.length = 0;
gdjs.MainMenuCode.GDFadeObjects2.length = 0;
gdjs.MainMenuCode.GDFadeObjects3.length = 0;
gdjs.MainMenuCode.GDFadeObjects4.length = 0;
gdjs.MainMenuCode.GDFadeObjects5.length = 0;
gdjs.MainMenuCode.GDFadeObjects6.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects1.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects2.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects3.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects4.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects5.length = 0;
gdjs.MainMenuCode.GDEnterButtonObjects6.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects1.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects2.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects3.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects4.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects5.length = 0;
gdjs.MainMenuCode.GDUsernameTextInputObjects6.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects1.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects2.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects3.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects4.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects5.length = 0;
gdjs.MainMenuCode.GDTransitionInObjects6.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects1.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects2.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects3.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects4.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects5.length = 0;
gdjs.MainMenuCode.GDMaskObjectObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelNameObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelOwnerObjects6.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects1.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects2.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects3.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects4.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects5.length = 0;
gdjs.MainMenuCode.GDCommunityLevelsStarsObjects6.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects1.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects2.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects3.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects4.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects5.length = 0;
gdjs.MainMenuCode.GDTransitionToPlayLevelObjects6.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects1.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects2.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects3.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects4.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects5.length = 0;
gdjs.MainMenuCode.GDRefreshListButtonObjects6.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects5.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects6.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
