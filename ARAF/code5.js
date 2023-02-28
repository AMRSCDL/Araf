gdjs.sonCode = {};
gdjs.sonCode.GDNewSpriteObjects1= [];
gdjs.sonCode.GDNewSpriteObjects2= [];
gdjs.sonCode.GDNewSpriteObjects3= [];
gdjs.sonCode.GDEndTextObjects1= [];
gdjs.sonCode.GDEndTextObjects2= [];
gdjs.sonCode.GDEndTextObjects3= [];
gdjs.sonCode.GDimlecObjects1= [];
gdjs.sonCode.GDimlecObjects2= [];
gdjs.sonCode.GDimlecObjects3= [];

gdjs.sonCode.conditionTrue_0 = {val:false};
gdjs.sonCode.condition0IsTrue_0 = {val:false};
gdjs.sonCode.condition1IsTrue_0 = {val:false};
gdjs.sonCode.condition2IsTrue_0 = {val:false};
gdjs.sonCode.conditionTrue_1 = {val:false};
gdjs.sonCode.condition0IsTrue_1 = {val:false};
gdjs.sonCode.condition1IsTrue_1 = {val:false};
gdjs.sonCode.condition2IsTrue_1 = {val:false};


gdjs.sonCode.mapOfGDgdjs_46sonCode_46GDimlecObjects2Objects = Hashtable.newFrom({"imlec": gdjs.sonCode.GDimlecObjects2});
gdjs.sonCode.eventsList0 = function(runtimeScene) {

{


gdjs.sonCode.condition0IsTrue_0.val = false;
{
gdjs.sonCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.sonCode.condition0IsTrue_0.val) {
gdjs.sonCode.GDimlecObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sonCode.mapOfGDgdjs_46sonCode_46GDimlecObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("imlec"), gdjs.sonCode.GDimlecObjects1);
{for(var i = 0, len = gdjs.sonCode.GDimlecObjects1.length ;i < len;++i) {
    gdjs.sonCode.GDimlecObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


};gdjs.sonCode.mapOfGDgdjs_46sonCode_46GDEndTextObjects1Objects = Hashtable.newFrom({"EndText": gdjs.sonCode.GDEndTextObjects1});
gdjs.sonCode.eventsList1 = function(runtimeScene) {

{


gdjs.sonCode.condition0IsTrue_0.val = false;
{
{gdjs.sonCode.conditionTrue_1 = gdjs.sonCode.condition0IsTrue_0;
gdjs.sonCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14764412);
}
}if (gdjs.sonCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.sonCode.GDEndTextObjects1, gdjs.sonCode.GDEndTextObjects2);

{for(var i = 0, len = gdjs.sonCode.GDEndTextObjects2.length ;i < len;++i) {
    gdjs.sonCode.GDEndTextObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 2, 2, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.sonCode.condition0IsTrue_0.val = false;
gdjs.sonCode.condition1IsTrue_0.val = false;
{
gdjs.sonCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.sonCode.condition0IsTrue_0.val ) {
{
{gdjs.sonCode.conditionTrue_1 = gdjs.sonCode.condition1IsTrue_0;
gdjs.sonCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14764988);
}
}}
if (gdjs.sonCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.sonCode.GDEndTextObjects1, gdjs.sonCode.GDEndTextObjects2);

{for(var i = 0, len = gdjs.sonCode.GDEndTextObjects2.length ;i < len;++i) {
    gdjs.sonCode.GDEndTextObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.6, 0.6, "easeOutQuad", 50, false, false);
}
}}

}


{


gdjs.sonCode.condition0IsTrue_0.val = false;
gdjs.sonCode.condition1IsTrue_0.val = false;
{
gdjs.sonCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.sonCode.condition0IsTrue_0.val ) {
{
{gdjs.sonCode.conditionTrue_1 = gdjs.sonCode.condition1IsTrue_0;
gdjs.sonCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14765460);
}
}}
if (gdjs.sonCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sonCode.GDEndTextObjects1 */
{for(var i = 0, len = gdjs.sonCode.GDEndTextObjects1.length ;i < len;++i) {
    gdjs.sonCode.GDEndTextObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 2, 2, "bouncePast", 100, false, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.sonCode.mapOfGDgdjs_46sonCode_46GDEndTextObjects1Objects = Hashtable.newFrom({"EndText": gdjs.sonCode.GDEndTextObjects1});
gdjs.sonCode.eventsList2 = function(runtimeScene) {

{


gdjs.sonCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("EndText"), gdjs.sonCode.GDEndTextObjects1);
{for(var i = 0, len = gdjs.sonCode.GDEndTextObjects1.length ;i < len;++i) {
    gdjs.sonCode.GDEndTextObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2.2);
}
}{for(var i = 0, len = gdjs.sonCode.GDEndTextObjects1.length ;i < len;++i) {
    gdjs.sonCode.GDEndTextObjects1[i].setY(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EndText"), gdjs.sonCode.GDEndTextObjects1);

gdjs.sonCode.condition0IsTrue_0.val = false;
{
gdjs.sonCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sonCode.mapOfGDgdjs_46sonCode_46GDEndTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.sonCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sonCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EndText"), gdjs.sonCode.GDEndTextObjects1);

gdjs.sonCode.condition0IsTrue_0.val = false;
gdjs.sonCode.condition1IsTrue_0.val = false;
{
gdjs.sonCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sonCode.mapOfGDgdjs_46sonCode_46GDEndTextObjects1Objects, runtimeScene, true, true);
}if ( gdjs.sonCode.condition0IsTrue_0.val ) {
{
{gdjs.sonCode.conditionTrue_1 = gdjs.sonCode.condition1IsTrue_0;
gdjs.sonCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14767364);
}
}}
if (gdjs.sonCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sonCode.GDEndTextObjects1 */
{for(var i = 0, len = gdjs.sonCode.GDEndTextObjects1.length ;i < len;++i) {
    gdjs.sonCode.GDEndTextObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 0.6, 0.6, "bouncePast", 100, false, false);
}
}}

}


};

gdjs.sonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sonCode.GDNewSpriteObjects1.length = 0;
gdjs.sonCode.GDNewSpriteObjects2.length = 0;
gdjs.sonCode.GDNewSpriteObjects3.length = 0;
gdjs.sonCode.GDEndTextObjects1.length = 0;
gdjs.sonCode.GDEndTextObjects2.length = 0;
gdjs.sonCode.GDEndTextObjects3.length = 0;
gdjs.sonCode.GDimlecObjects1.length = 0;
gdjs.sonCode.GDimlecObjects2.length = 0;
gdjs.sonCode.GDimlecObjects3.length = 0;

gdjs.sonCode.eventsList2(runtimeScene);

return;

}

gdjs['sonCode'] = gdjs.sonCode;
