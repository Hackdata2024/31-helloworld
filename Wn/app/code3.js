gdjs.Overworld3Code = {};
gdjs.Overworld3Code.GDPlayerObjects1= [];
gdjs.Overworld3Code.GDPlayerObjects2= [];
gdjs.Overworld3Code.GDNPCObjects1= [];
gdjs.Overworld3Code.GDNPCObjects2= [];
gdjs.Overworld3Code.GDDock1Objects1= [];
gdjs.Overworld3Code.GDDock1Objects2= [];
gdjs.Overworld3Code.GDTree1Objects1= [];
gdjs.Overworld3Code.GDTree1Objects2= [];
gdjs.Overworld3Code.GDTree2Objects1= [];
gdjs.Overworld3Code.GDTree2Objects2= [];
gdjs.Overworld3Code.GDBush1Objects1= [];
gdjs.Overworld3Code.GDBush1Objects2= [];
gdjs.Overworld3Code.GDHouse1Objects1= [];
gdjs.Overworld3Code.GDHouse1Objects2= [];
gdjs.Overworld3Code.GDHouse2Objects1= [];
gdjs.Overworld3Code.GDHouse2Objects2= [];
gdjs.Overworld3Code.GDCornerWaterObjects1= [];
gdjs.Overworld3Code.GDCornerWaterObjects2= [];
gdjs.Overworld3Code.GDWaterCorner2Objects1= [];
gdjs.Overworld3Code.GDWaterCorner2Objects2= [];
gdjs.Overworld3Code.GDGrassObjects1= [];
gdjs.Overworld3Code.GDGrassObjects2= [];
gdjs.Overworld3Code.GDWaterEdgeRightObjects1= [];
gdjs.Overworld3Code.GDWaterEdgeRightObjects2= [];
gdjs.Overworld3Code.GDNewTiledSpriteObjects1= [];
gdjs.Overworld3Code.GDNewTiledSpriteObjects2= [];
gdjs.Overworld3Code.GDWater1Objects1= [];
gdjs.Overworld3Code.GDWater1Objects2= [];
gdjs.Overworld3Code.GDRoad1Objects1= [];
gdjs.Overworld3Code.GDRoad1Objects2= [];
gdjs.Overworld3Code.GDRoadEdge1Objects1= [];
gdjs.Overworld3Code.GDRoadEdge1Objects2= [];
gdjs.Overworld3Code.GDCollisionDetectObjects1= [];
gdjs.Overworld3Code.GDCollisionDetectObjects2= [];
gdjs.Overworld3Code.GDDialogueObjects1= [];
gdjs.Overworld3Code.GDDialogueObjects2= [];
gdjs.Overworld3Code.GDEObjects1= [];
gdjs.Overworld3Code.GDEObjects2= [];
gdjs.Overworld3Code.GDE2Objects1= [];
gdjs.Overworld3Code.GDE2Objects2= [];
gdjs.Overworld3Code.GDYesButtonObjects1= [];
gdjs.Overworld3Code.GDYesButtonObjects2= [];
gdjs.Overworld3Code.GDNoButtonObjects1= [];
gdjs.Overworld3Code.GDNoButtonObjects2= [];
gdjs.Overworld3Code.GDShadedDarkJoystickObjects1= [];
gdjs.Overworld3Code.GDShadedDarkJoystickObjects2= [];
gdjs.Overworld3Code.GDTargetRoundButtonObjects1= [];
gdjs.Overworld3Code.GDTargetRoundButtonObjects2= [];
gdjs.Overworld3Code.GDEmptyCloudBackgroundObjects1= [];
gdjs.Overworld3Code.GDEmptyCloudBackgroundObjects2= [];
gdjs.Overworld3Code.GDGreenSmallTree3Objects1= [];
gdjs.Overworld3Code.GDGreenSmallTree3Objects2= [];
gdjs.Overworld3Code.GDWoodYellowBarObjects1= [];
gdjs.Overworld3Code.GDWoodYellowBarObjects2= [];
gdjs.Overworld3Code.GDGoldObjects1= [];
gdjs.Overworld3Code.GDGoldObjects2= [];
gdjs.Overworld3Code.GDGreyButtonObjects1= [];
gdjs.Overworld3Code.GDGreyButtonObjects2= [];
gdjs.Overworld3Code.GDYellowButtonObjects1= [];
gdjs.Overworld3Code.GDYellowButtonObjects2= [];
gdjs.Overworld3Code.GDGreenButtonObjects1= [];
gdjs.Overworld3Code.GDGreenButtonObjects2= [];
gdjs.Overworld3Code.GDMaleCasualHoodieObjects1= [];
gdjs.Overworld3Code.GDMaleCasualHoodieObjects2= [];
gdjs.Overworld3Code.GDMaleCharacter9Objects1= [];
gdjs.Overworld3Code.GDMaleCharacter9Objects2= [];
gdjs.Overworld3Code.GDLargeExitButtonObjects1= [];
gdjs.Overworld3Code.GDLargeExitButtonObjects2= [];
gdjs.Overworld3Code.GDHelpObjects1= [];
gdjs.Overworld3Code.GDHelpObjects2= [];
gdjs.Overworld3Code.GDMenuObjects1= [];
gdjs.Overworld3Code.GDMenuObjects2= [];
gdjs.Overworld3Code.GDBlueButtonObjects1= [];
gdjs.Overworld3Code.GDBlueButtonObjects2= [];
gdjs.Overworld3Code.GDGreyButton2Objects1= [];
gdjs.Overworld3Code.GDGreyButton2Objects2= [];
gdjs.Overworld3Code.GDPlusObjects1= [];
gdjs.Overworld3Code.GDPlusObjects2= [];
gdjs.Overworld3Code.GDBlackSpaceObjects1= [];
gdjs.Overworld3Code.GDBlackSpaceObjects2= [];
gdjs.Overworld3Code.GDSmallGreenPlasticRoundToggleObjects1= [];
gdjs.Overworld3Code.GDSmallGreenPlasticRoundToggleObjects2= [];
gdjs.Overworld3Code.GDApplyObjects1= [];
gdjs.Overworld3Code.GDApplyObjects2= [];
gdjs.Overworld3Code.GDApply2Objects1= [];
gdjs.Overworld3Code.GDApply2Objects2= [];
gdjs.Overworld3Code.GDPlus2Objects1= [];
gdjs.Overworld3Code.GDPlus2Objects2= [];
gdjs.Overworld3Code.GDNewTextObjects1= [];
gdjs.Overworld3Code.GDNewTextObjects2= [];
gdjs.Overworld3Code.GDNewTextInputObjects1= [];
gdjs.Overworld3Code.GDNewTextInputObjects2= [];
gdjs.Overworld3Code.GDNewTextInput2Objects1= [];
gdjs.Overworld3Code.GDNewTextInput2Objects2= [];
gdjs.Overworld3Code.GDTransitionObjects1= [];
gdjs.Overworld3Code.GDTransitionObjects2= [];
gdjs.Overworld3Code.GDTextBorderObjects1= [];
gdjs.Overworld3Code.GDTextBorderObjects2= [];


gdjs.Overworld3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Apply"), gdjs.Overworld3Code.GDApplyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Overworld3Code.GDApplyObjects1.length;i<l;++i) {
    if ( gdjs.Overworld3Code.GDApplyObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Overworld3Code.GDApplyObjects1[k] = gdjs.Overworld3Code.GDApplyObjects1[i];
        ++k;
    }
}
gdjs.Overworld3Code.GDApplyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plus2"), gdjs.Overworld3Code.GDPlus2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Overworld3Code.GDPlus2Objects1.length;i<l;++i) {
    if ( gdjs.Overworld3Code.GDPlus2Objects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Overworld3Code.GDPlus2Objects1[k] = gdjs.Overworld3Code.GDPlus2Objects1[i];
        ++k;
    }
}
gdjs.Overworld3Code.GDPlus2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld2", false);
}}

}


};

gdjs.Overworld3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Overworld3Code.GDPlayerObjects1.length = 0;
gdjs.Overworld3Code.GDPlayerObjects2.length = 0;
gdjs.Overworld3Code.GDNPCObjects1.length = 0;
gdjs.Overworld3Code.GDNPCObjects2.length = 0;
gdjs.Overworld3Code.GDDock1Objects1.length = 0;
gdjs.Overworld3Code.GDDock1Objects2.length = 0;
gdjs.Overworld3Code.GDTree1Objects1.length = 0;
gdjs.Overworld3Code.GDTree1Objects2.length = 0;
gdjs.Overworld3Code.GDTree2Objects1.length = 0;
gdjs.Overworld3Code.GDTree2Objects2.length = 0;
gdjs.Overworld3Code.GDBush1Objects1.length = 0;
gdjs.Overworld3Code.GDBush1Objects2.length = 0;
gdjs.Overworld3Code.GDHouse1Objects1.length = 0;
gdjs.Overworld3Code.GDHouse1Objects2.length = 0;
gdjs.Overworld3Code.GDHouse2Objects1.length = 0;
gdjs.Overworld3Code.GDHouse2Objects2.length = 0;
gdjs.Overworld3Code.GDCornerWaterObjects1.length = 0;
gdjs.Overworld3Code.GDCornerWaterObjects2.length = 0;
gdjs.Overworld3Code.GDWaterCorner2Objects1.length = 0;
gdjs.Overworld3Code.GDWaterCorner2Objects2.length = 0;
gdjs.Overworld3Code.GDGrassObjects1.length = 0;
gdjs.Overworld3Code.GDGrassObjects2.length = 0;
gdjs.Overworld3Code.GDWaterEdgeRightObjects1.length = 0;
gdjs.Overworld3Code.GDWaterEdgeRightObjects2.length = 0;
gdjs.Overworld3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Overworld3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Overworld3Code.GDWater1Objects1.length = 0;
gdjs.Overworld3Code.GDWater1Objects2.length = 0;
gdjs.Overworld3Code.GDRoad1Objects1.length = 0;
gdjs.Overworld3Code.GDRoad1Objects2.length = 0;
gdjs.Overworld3Code.GDRoadEdge1Objects1.length = 0;
gdjs.Overworld3Code.GDRoadEdge1Objects2.length = 0;
gdjs.Overworld3Code.GDCollisionDetectObjects1.length = 0;
gdjs.Overworld3Code.GDCollisionDetectObjects2.length = 0;
gdjs.Overworld3Code.GDDialogueObjects1.length = 0;
gdjs.Overworld3Code.GDDialogueObjects2.length = 0;
gdjs.Overworld3Code.GDEObjects1.length = 0;
gdjs.Overworld3Code.GDEObjects2.length = 0;
gdjs.Overworld3Code.GDE2Objects1.length = 0;
gdjs.Overworld3Code.GDE2Objects2.length = 0;
gdjs.Overworld3Code.GDYesButtonObjects1.length = 0;
gdjs.Overworld3Code.GDYesButtonObjects2.length = 0;
gdjs.Overworld3Code.GDNoButtonObjects1.length = 0;
gdjs.Overworld3Code.GDNoButtonObjects2.length = 0;
gdjs.Overworld3Code.GDShadedDarkJoystickObjects1.length = 0;
gdjs.Overworld3Code.GDShadedDarkJoystickObjects2.length = 0;
gdjs.Overworld3Code.GDTargetRoundButtonObjects1.length = 0;
gdjs.Overworld3Code.GDTargetRoundButtonObjects2.length = 0;
gdjs.Overworld3Code.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.Overworld3Code.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.Overworld3Code.GDGreenSmallTree3Objects1.length = 0;
gdjs.Overworld3Code.GDGreenSmallTree3Objects2.length = 0;
gdjs.Overworld3Code.GDWoodYellowBarObjects1.length = 0;
gdjs.Overworld3Code.GDWoodYellowBarObjects2.length = 0;
gdjs.Overworld3Code.GDGoldObjects1.length = 0;
gdjs.Overworld3Code.GDGoldObjects2.length = 0;
gdjs.Overworld3Code.GDGreyButtonObjects1.length = 0;
gdjs.Overworld3Code.GDGreyButtonObjects2.length = 0;
gdjs.Overworld3Code.GDYellowButtonObjects1.length = 0;
gdjs.Overworld3Code.GDYellowButtonObjects2.length = 0;
gdjs.Overworld3Code.GDGreenButtonObjects1.length = 0;
gdjs.Overworld3Code.GDGreenButtonObjects2.length = 0;
gdjs.Overworld3Code.GDMaleCasualHoodieObjects1.length = 0;
gdjs.Overworld3Code.GDMaleCasualHoodieObjects2.length = 0;
gdjs.Overworld3Code.GDMaleCharacter9Objects1.length = 0;
gdjs.Overworld3Code.GDMaleCharacter9Objects2.length = 0;
gdjs.Overworld3Code.GDLargeExitButtonObjects1.length = 0;
gdjs.Overworld3Code.GDLargeExitButtonObjects2.length = 0;
gdjs.Overworld3Code.GDHelpObjects1.length = 0;
gdjs.Overworld3Code.GDHelpObjects2.length = 0;
gdjs.Overworld3Code.GDMenuObjects1.length = 0;
gdjs.Overworld3Code.GDMenuObjects2.length = 0;
gdjs.Overworld3Code.GDBlueButtonObjects1.length = 0;
gdjs.Overworld3Code.GDBlueButtonObjects2.length = 0;
gdjs.Overworld3Code.GDGreyButton2Objects1.length = 0;
gdjs.Overworld3Code.GDGreyButton2Objects2.length = 0;
gdjs.Overworld3Code.GDPlusObjects1.length = 0;
gdjs.Overworld3Code.GDPlusObjects2.length = 0;
gdjs.Overworld3Code.GDBlackSpaceObjects1.length = 0;
gdjs.Overworld3Code.GDBlackSpaceObjects2.length = 0;
gdjs.Overworld3Code.GDSmallGreenPlasticRoundToggleObjects1.length = 0;
gdjs.Overworld3Code.GDSmallGreenPlasticRoundToggleObjects2.length = 0;
gdjs.Overworld3Code.GDApplyObjects1.length = 0;
gdjs.Overworld3Code.GDApplyObjects2.length = 0;
gdjs.Overworld3Code.GDApply2Objects1.length = 0;
gdjs.Overworld3Code.GDApply2Objects2.length = 0;
gdjs.Overworld3Code.GDPlus2Objects1.length = 0;
gdjs.Overworld3Code.GDPlus2Objects2.length = 0;
gdjs.Overworld3Code.GDNewTextObjects1.length = 0;
gdjs.Overworld3Code.GDNewTextObjects2.length = 0;
gdjs.Overworld3Code.GDNewTextInputObjects1.length = 0;
gdjs.Overworld3Code.GDNewTextInputObjects2.length = 0;
gdjs.Overworld3Code.GDNewTextInput2Objects1.length = 0;
gdjs.Overworld3Code.GDNewTextInput2Objects2.length = 0;
gdjs.Overworld3Code.GDTransitionObjects1.length = 0;
gdjs.Overworld3Code.GDTransitionObjects2.length = 0;
gdjs.Overworld3Code.GDTextBorderObjects1.length = 0;
gdjs.Overworld3Code.GDTextBorderObjects2.length = 0;

gdjs.Overworld3Code.eventsList0(runtimeScene);

return;

}

gdjs['Overworld3Code'] = gdjs.Overworld3Code;
