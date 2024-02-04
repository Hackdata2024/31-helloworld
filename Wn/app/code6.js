gdjs.Leader_32BoardCode = {};
gdjs.Leader_32BoardCode.GDBlueBackgroundObjects1= [];
gdjs.Leader_32BoardCode.GDBlueBackgroundObjects2= [];
gdjs.Leader_32BoardCode.GDBlackSpaceObjects1= [];
gdjs.Leader_32BoardCode.GDBlackSpaceObjects2= [];
gdjs.Leader_32BoardCode.GDBackObjects1= [];
gdjs.Leader_32BoardCode.GDBackObjects2= [];
gdjs.Leader_32BoardCode.GDShareObjects1= [];
gdjs.Leader_32BoardCode.GDShareObjects2= [];
gdjs.Leader_32BoardCode.GDTransitionObjects1= [];
gdjs.Leader_32BoardCode.GDTransitionObjects2= [];
gdjs.Leader_32BoardCode.GDTextBorderObjects1= [];
gdjs.Leader_32BoardCode.GDTextBorderObjects2= [];


gdjs.Leader_32BoardCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Leader_32BoardCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Leader_32BoardCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Leader_32BoardCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Leader_32BoardCode.GDBackObjects1[k] = gdjs.Leader_32BoardCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Leader_32BoardCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.Leader_32BoardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Leader_32BoardCode.GDBlueBackgroundObjects1.length = 0;
gdjs.Leader_32BoardCode.GDBlueBackgroundObjects2.length = 0;
gdjs.Leader_32BoardCode.GDBlackSpaceObjects1.length = 0;
gdjs.Leader_32BoardCode.GDBlackSpaceObjects2.length = 0;
gdjs.Leader_32BoardCode.GDBackObjects1.length = 0;
gdjs.Leader_32BoardCode.GDBackObjects2.length = 0;
gdjs.Leader_32BoardCode.GDShareObjects1.length = 0;
gdjs.Leader_32BoardCode.GDShareObjects2.length = 0;
gdjs.Leader_32BoardCode.GDTransitionObjects1.length = 0;
gdjs.Leader_32BoardCode.GDTransitionObjects2.length = 0;
gdjs.Leader_32BoardCode.GDTextBorderObjects1.length = 0;
gdjs.Leader_32BoardCode.GDTextBorderObjects2.length = 0;

gdjs.Leader_32BoardCode.eventsList0(runtimeScene);

return;

}

gdjs['Leader_32BoardCode'] = gdjs.Leader_32BoardCode;
