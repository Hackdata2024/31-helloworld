gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDEmptyCloudBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDEmptyCloudBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDFenceObjects1= [];
gdjs.Untitled_32sceneCode.GDFenceObjects2= [];
gdjs.Untitled_32sceneCode.GDDirt1Objects1= [];
gdjs.Untitled_32sceneCode.GDDirt1Objects2= [];
gdjs.Untitled_32sceneCode.GDFarmerObjects1= [];
gdjs.Untitled_32sceneCode.GDFarmerObjects2= [];
gdjs.Untitled_32sceneCode.GDBlueButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBlueButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDLargePlayButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDLargePlayButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDHelpObjects1= [];
gdjs.Untitled_32sceneCode.GDHelpObjects2= [];
gdjs.Untitled_32sceneCode.GDAdsObjects1= [];
gdjs.Untitled_32sceneCode.GDAdsObjects2= [];
gdjs.Untitled_32sceneCode.GDBackObjects1= [];
gdjs.Untitled_32sceneCode.GDBackObjects2= [];
gdjs.Untitled_32sceneCode.GDBuyObjects1= [];
gdjs.Untitled_32sceneCode.GDBuyObjects2= [];
gdjs.Untitled_32sceneCode.GDDownloadObjects1= [];
gdjs.Untitled_32sceneCode.GDDownloadObjects2= [];
gdjs.Untitled_32sceneCode.GDApplyObjects1= [];
gdjs.Untitled_32sceneCode.GDApplyObjects2= [];
gdjs.Untitled_32sceneCode.GDHeartObjects1= [];
gdjs.Untitled_32sceneCode.GDHeartObjects2= [];
gdjs.Untitled_32sceneCode.GDConfigObjects1= [];
gdjs.Untitled_32sceneCode.GDConfigObjects2= [];
gdjs.Untitled_32sceneCode.GDLargeExitButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDLargeExitButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDMenuObjects1= [];
gdjs.Untitled_32sceneCode.GDMenuObjects2= [];
gdjs.Untitled_32sceneCode.GDLargeBuyButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDLargeBuyButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDNextObjects1= [];
gdjs.Untitled_32sceneCode.GDNextObjects2= [];
gdjs.Untitled_32sceneCode.GDLeftArrowObjects1= [];
gdjs.Untitled_32sceneCode.GDLeftArrowObjects2= [];
gdjs.Untitled_32sceneCode.GDPauseObjects1= [];
gdjs.Untitled_32sceneCode.GDPauseObjects2= [];
gdjs.Untitled_32sceneCode.GDPlusObjects1= [];
gdjs.Untitled_32sceneCode.GDPlusObjects2= [];
gdjs.Untitled_32sceneCode.GDRightArrowObjects1= [];
gdjs.Untitled_32sceneCode.GDRightArrowObjects2= [];
gdjs.Untitled_32sceneCode.GDShareObjects1= [];
gdjs.Untitled_32sceneCode.GDShareObjects2= [];
gdjs.Untitled_32sceneCode.GDRetryObjects1= [];
gdjs.Untitled_32sceneCode.GDRetryObjects2= [];
gdjs.Untitled_32sceneCode.GDWorldObjects1= [];
gdjs.Untitled_32sceneCode.GDWorldObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayObjects2= [];
gdjs.Untitled_32sceneCode.GDStarObjects1= [];
gdjs.Untitled_32sceneCode.GDStarObjects2= [];
gdjs.Untitled_32sceneCode.GDBrownButtonWithShadowObjects1= [];
gdjs.Untitled_32sceneCode.GDBrownButtonWithShadowObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs.Untitled_32sceneCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs.Untitled_32sceneCode.GDInventorySlotHelmet5Objects1= [];
gdjs.Untitled_32sceneCode.GDInventorySlotHelmet5Objects2= [];
gdjs.Untitled_32sceneCode.GDTransitionObjects1= [];
gdjs.Untitled_32sceneCode.GDTransitionObjects2= [];
gdjs.Untitled_32sceneCode.GDTextBorderObjects1= [];
gdjs.Untitled_32sceneCode.GDTextBorderObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32sceneCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Overworld", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1[k] = gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Config"), gdjs.Untitled_32sceneCode.GDConfigObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDConfigObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDConfigObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDConfigObjects1[k] = gdjs.Untitled_32sceneCode.GDConfigObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDConfigObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.Untitled_32sceneCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlueButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBlueButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leader Board", false);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFenceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFenceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDirt1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDirt1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFarmerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFarmerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlueButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlueButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLargePlayButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLargePlayButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHelpObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHelpObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAdsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAdsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBuyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBuyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDownloadObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDownloadObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDApplyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDApplyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHeartObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHeartObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDConfigObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDConfigObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLargeExitButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLargeExitButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMenuObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMenuObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLargeBuyButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLargeBuyButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPauseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPauseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlusObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlusObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShareObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShareObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRetryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRetryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWorldObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWorldObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDInventorySlotHelmet5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDInventorySlotHelmet5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransitionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTextBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTextBorderObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
