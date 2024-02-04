gdjs.OverworldCode = {};
gdjs.OverworldCode.GDPlayerObjects1= [];
gdjs.OverworldCode.GDPlayerObjects2= [];
gdjs.OverworldCode.GDNPCObjects1= [];
gdjs.OverworldCode.GDNPCObjects2= [];
gdjs.OverworldCode.GDDock1Objects1= [];
gdjs.OverworldCode.GDDock1Objects2= [];
gdjs.OverworldCode.GDTree1Objects1= [];
gdjs.OverworldCode.GDTree1Objects2= [];
gdjs.OverworldCode.GDTree2Objects1= [];
gdjs.OverworldCode.GDTree2Objects2= [];
gdjs.OverworldCode.GDBush1Objects1= [];
gdjs.OverworldCode.GDBush1Objects2= [];
gdjs.OverworldCode.GDHouse1Objects1= [];
gdjs.OverworldCode.GDHouse1Objects2= [];
gdjs.OverworldCode.GDHouse2Objects1= [];
gdjs.OverworldCode.GDHouse2Objects2= [];
gdjs.OverworldCode.GDCornerWaterObjects1= [];
gdjs.OverworldCode.GDCornerWaterObjects2= [];
gdjs.OverworldCode.GDWaterCorner2Objects1= [];
gdjs.OverworldCode.GDWaterCorner2Objects2= [];
gdjs.OverworldCode.GDGrassObjects1= [];
gdjs.OverworldCode.GDGrassObjects2= [];
gdjs.OverworldCode.GDWaterEdgeRightObjects1= [];
gdjs.OverworldCode.GDWaterEdgeRightObjects2= [];
gdjs.OverworldCode.GDNewTiledSpriteObjects1= [];
gdjs.OverworldCode.GDNewTiledSpriteObjects2= [];
gdjs.OverworldCode.GDWater1Objects1= [];
gdjs.OverworldCode.GDWater1Objects2= [];
gdjs.OverworldCode.GDRoad1Objects1= [];
gdjs.OverworldCode.GDRoad1Objects2= [];
gdjs.OverworldCode.GDRoadEdge1Objects1= [];
gdjs.OverworldCode.GDRoadEdge1Objects2= [];
gdjs.OverworldCode.GDCollisionDetectObjects1= [];
gdjs.OverworldCode.GDCollisionDetectObjects2= [];
gdjs.OverworldCode.GDDialogueObjects1= [];
gdjs.OverworldCode.GDDialogueObjects2= [];
gdjs.OverworldCode.GDEObjects1= [];
gdjs.OverworldCode.GDEObjects2= [];
gdjs.OverworldCode.GDE2Objects1= [];
gdjs.OverworldCode.GDE2Objects2= [];
gdjs.OverworldCode.GDYesButtonObjects1= [];
gdjs.OverworldCode.GDYesButtonObjects2= [];
gdjs.OverworldCode.GDNoButtonObjects1= [];
gdjs.OverworldCode.GDNoButtonObjects2= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects1= [];
gdjs.OverworldCode.GDShadedDarkJoystickObjects2= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects1= [];
gdjs.OverworldCode.GDTargetRoundButtonObjects2= [];
gdjs.OverworldCode.GDEmptyCloudBackgroundObjects1= [];
gdjs.OverworldCode.GDEmptyCloudBackgroundObjects2= [];
gdjs.OverworldCode.GDGreenSmallTree3Objects1= [];
gdjs.OverworldCode.GDGreenSmallTree3Objects2= [];
gdjs.OverworldCode.GDWoodYellowBarObjects1= [];
gdjs.OverworldCode.GDWoodYellowBarObjects2= [];
gdjs.OverworldCode.GDGoldObjects1= [];
gdjs.OverworldCode.GDGoldObjects2= [];
gdjs.OverworldCode.GDGreyButtonObjects1= [];
gdjs.OverworldCode.GDGreyButtonObjects2= [];
gdjs.OverworldCode.GDYellowButtonObjects1= [];
gdjs.OverworldCode.GDYellowButtonObjects2= [];
gdjs.OverworldCode.GDGreenButtonObjects1= [];
gdjs.OverworldCode.GDGreenButtonObjects2= [];
gdjs.OverworldCode.GDMaleCasualHoodieObjects1= [];
gdjs.OverworldCode.GDMaleCasualHoodieObjects2= [];
gdjs.OverworldCode.GDMaleCharacter9Objects1= [];
gdjs.OverworldCode.GDMaleCharacter9Objects2= [];
gdjs.OverworldCode.GDLargeExitButtonObjects1= [];
gdjs.OverworldCode.GDLargeExitButtonObjects2= [];
gdjs.OverworldCode.GDHelpObjects1= [];
gdjs.OverworldCode.GDHelpObjects2= [];
gdjs.OverworldCode.GDMenuObjects1= [];
gdjs.OverworldCode.GDMenuObjects2= [];
gdjs.OverworldCode.GDBlueButtonObjects1= [];
gdjs.OverworldCode.GDBlueButtonObjects2= [];
gdjs.OverworldCode.GDGreyButton2Objects1= [];
gdjs.OverworldCode.GDGreyButton2Objects2= [];
gdjs.OverworldCode.GDPlusObjects1= [];
gdjs.OverworldCode.GDPlusObjects2= [];
gdjs.OverworldCode.GDTransitionObjects1= [];
gdjs.OverworldCode.GDTransitionObjects2= [];
gdjs.OverworldCode.GDTextBorderObjects1= [];
gdjs.OverworldCode.GDTextBorderObjects2= [];


gdjs.OverworldCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.OverworldCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDGreenButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDGreenButtonObjects1[k] = gdjs.OverworldCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld5", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.OverworldCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDYellowButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDYellowButtonObjects1[k] = gdjs.OverworldCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton2"), gdjs.OverworldCode.GDGreyButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDGreyButton2Objects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDGreyButton2Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDGreyButton2Objects1[k] = gdjs.OverworldCode.GDGreyButton2Objects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDGreyButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargeExitButton"), gdjs.OverworldCode.GDLargeExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDLargeExitButtonObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDLargeExitButtonObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDLargeExitButtonObjects1[k] = gdjs.OverworldCode.GDLargeExitButtonObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDLargeExitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plus"), gdjs.OverworldCode.GDPlusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OverworldCode.GDPlusObjects1.length;i<l;++i) {
    if ( gdjs.OverworldCode.GDPlusObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OverworldCode.GDPlusObjects1[k] = gdjs.OverworldCode.GDPlusObjects1[i];
        ++k;
    }
}
gdjs.OverworldCode.GDPlusObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("", runtimeScene);
}}

}


};

gdjs.OverworldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OverworldCode.GDPlayerObjects1.length = 0;
gdjs.OverworldCode.GDPlayerObjects2.length = 0;
gdjs.OverworldCode.GDNPCObjects1.length = 0;
gdjs.OverworldCode.GDNPCObjects2.length = 0;
gdjs.OverworldCode.GDDock1Objects1.length = 0;
gdjs.OverworldCode.GDDock1Objects2.length = 0;
gdjs.OverworldCode.GDTree1Objects1.length = 0;
gdjs.OverworldCode.GDTree1Objects2.length = 0;
gdjs.OverworldCode.GDTree2Objects1.length = 0;
gdjs.OverworldCode.GDTree2Objects2.length = 0;
gdjs.OverworldCode.GDBush1Objects1.length = 0;
gdjs.OverworldCode.GDBush1Objects2.length = 0;
gdjs.OverworldCode.GDHouse1Objects1.length = 0;
gdjs.OverworldCode.GDHouse1Objects2.length = 0;
gdjs.OverworldCode.GDHouse2Objects1.length = 0;
gdjs.OverworldCode.GDHouse2Objects2.length = 0;
gdjs.OverworldCode.GDCornerWaterObjects1.length = 0;
gdjs.OverworldCode.GDCornerWaterObjects2.length = 0;
gdjs.OverworldCode.GDWaterCorner2Objects1.length = 0;
gdjs.OverworldCode.GDWaterCorner2Objects2.length = 0;
gdjs.OverworldCode.GDGrassObjects1.length = 0;
gdjs.OverworldCode.GDGrassObjects2.length = 0;
gdjs.OverworldCode.GDWaterEdgeRightObjects1.length = 0;
gdjs.OverworldCode.GDWaterEdgeRightObjects2.length = 0;
gdjs.OverworldCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OverworldCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OverworldCode.GDWater1Objects1.length = 0;
gdjs.OverworldCode.GDWater1Objects2.length = 0;
gdjs.OverworldCode.GDRoad1Objects1.length = 0;
gdjs.OverworldCode.GDRoad1Objects2.length = 0;
gdjs.OverworldCode.GDRoadEdge1Objects1.length = 0;
gdjs.OverworldCode.GDRoadEdge1Objects2.length = 0;
gdjs.OverworldCode.GDCollisionDetectObjects1.length = 0;
gdjs.OverworldCode.GDCollisionDetectObjects2.length = 0;
gdjs.OverworldCode.GDDialogueObjects1.length = 0;
gdjs.OverworldCode.GDDialogueObjects2.length = 0;
gdjs.OverworldCode.GDEObjects1.length = 0;
gdjs.OverworldCode.GDEObjects2.length = 0;
gdjs.OverworldCode.GDE2Objects1.length = 0;
gdjs.OverworldCode.GDE2Objects2.length = 0;
gdjs.OverworldCode.GDYesButtonObjects1.length = 0;
gdjs.OverworldCode.GDYesButtonObjects2.length = 0;
gdjs.OverworldCode.GDNoButtonObjects1.length = 0;
gdjs.OverworldCode.GDNoButtonObjects2.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.OverworldCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects1.length = 0;
gdjs.OverworldCode.GDTargetRoundButtonObjects2.length = 0;
gdjs.OverworldCode.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.OverworldCode.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.OverworldCode.GDGreenSmallTree3Objects1.length = 0;
gdjs.OverworldCode.GDGreenSmallTree3Objects2.length = 0;
gdjs.OverworldCode.GDWoodYellowBarObjects1.length = 0;
gdjs.OverworldCode.GDWoodYellowBarObjects2.length = 0;
gdjs.OverworldCode.GDGoldObjects1.length = 0;
gdjs.OverworldCode.GDGoldObjects2.length = 0;
gdjs.OverworldCode.GDGreyButtonObjects1.length = 0;
gdjs.OverworldCode.GDGreyButtonObjects2.length = 0;
gdjs.OverworldCode.GDYellowButtonObjects1.length = 0;
gdjs.OverworldCode.GDYellowButtonObjects2.length = 0;
gdjs.OverworldCode.GDGreenButtonObjects1.length = 0;
gdjs.OverworldCode.GDGreenButtonObjects2.length = 0;
gdjs.OverworldCode.GDMaleCasualHoodieObjects1.length = 0;
gdjs.OverworldCode.GDMaleCasualHoodieObjects2.length = 0;
gdjs.OverworldCode.GDMaleCharacter9Objects1.length = 0;
gdjs.OverworldCode.GDMaleCharacter9Objects2.length = 0;
gdjs.OverworldCode.GDLargeExitButtonObjects1.length = 0;
gdjs.OverworldCode.GDLargeExitButtonObjects2.length = 0;
gdjs.OverworldCode.GDHelpObjects1.length = 0;
gdjs.OverworldCode.GDHelpObjects2.length = 0;
gdjs.OverworldCode.GDMenuObjects1.length = 0;
gdjs.OverworldCode.GDMenuObjects2.length = 0;
gdjs.OverworldCode.GDBlueButtonObjects1.length = 0;
gdjs.OverworldCode.GDBlueButtonObjects2.length = 0;
gdjs.OverworldCode.GDGreyButton2Objects1.length = 0;
gdjs.OverworldCode.GDGreyButton2Objects2.length = 0;
gdjs.OverworldCode.GDPlusObjects1.length = 0;
gdjs.OverworldCode.GDPlusObjects2.length = 0;
gdjs.OverworldCode.GDTransitionObjects1.length = 0;
gdjs.OverworldCode.GDTransitionObjects2.length = 0;
gdjs.OverworldCode.GDTextBorderObjects1.length = 0;
gdjs.OverworldCode.GDTextBorderObjects2.length = 0;

gdjs.OverworldCode.eventsList0(runtimeScene);

return;

}

gdjs['OverworldCode'] = gdjs.OverworldCode;
