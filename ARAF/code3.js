gdjs.AboutCode = {};
gdjs.AboutCode.GDNewSpriteObjects1= [];
gdjs.AboutCode.GDNewSpriteObjects2= [];
gdjs.AboutCode.GDNewSpriteObjects3= [];
gdjs.AboutCode.GDHakkindaObjects1= [];
gdjs.AboutCode.GDHakkindaObjects2= [];
gdjs.AboutCode.GDHakkindaObjects3= [];
gdjs.AboutCode.GDOyunObjects1= [];
gdjs.AboutCode.GDOyunObjects2= [];
gdjs.AboutCode.GDOyunObjects3= [];
gdjs.AboutCode.GDimlecObjects1= [];
gdjs.AboutCode.GDimlecObjects2= [];
gdjs.AboutCode.GDimlecObjects3= [];

gdjs.AboutCode.conditionTrue_0 = {val:false};
gdjs.AboutCode.condition0IsTrue_0 = {val:false};
gdjs.AboutCode.condition1IsTrue_0 = {val:false};
gdjs.AboutCode.condition2IsTrue_0 = {val:false};
gdjs.AboutCode.conditionTrue_1 = {val:false};
gdjs.AboutCode.condition0IsTrue_1 = {val:false};
gdjs.AboutCode.condition1IsTrue_1 = {val:false};
gdjs.AboutCode.condition2IsTrue_1 = {val:false};


gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDimlecObjects2Objects = Hashtable.newFrom({"imlec": gdjs.AboutCode.GDimlecObjects2});
gdjs.AboutCode.eventsList0 = function(runtimeScene) {

{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.AboutCode.condition0IsTrue_0.val) {
gdjs.AboutCode.GDimlecObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDimlecObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("imlec"), gdjs.AboutCode.GDimlecObjects1);
{for(var i = 0, len = gdjs.AboutCode.GDimlecObjects1.length ;i < len;++i) {
    gdjs.AboutCode.GDimlecObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


};gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDOyunObjects1Objects = Hashtable.newFrom({"Oyun": gdjs.AboutCode.GDOyunObjects1});
gdjs.AboutCode.eventsList1 = function(runtimeScene) {

{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
{gdjs.AboutCode.conditionTrue_1 = gdjs.AboutCode.condition0IsTrue_0;
gdjs.AboutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14556620);
}
}if (gdjs.AboutCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.AboutCode.GDOyunObjects1, gdjs.AboutCode.GDOyunObjects2);

{for(var i = 0, len = gdjs.AboutCode.GDOyunObjects2.length ;i < len;++i) {
    gdjs.AboutCode.GDOyunObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.AboutCode.condition0IsTrue_0.val = false;
gdjs.AboutCode.condition1IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.AboutCode.condition0IsTrue_0.val ) {
{
{gdjs.AboutCode.conditionTrue_1 = gdjs.AboutCode.condition1IsTrue_0;
gdjs.AboutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14557900);
}
}}
if (gdjs.AboutCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.AboutCode.GDOyunObjects1, gdjs.AboutCode.GDOyunObjects2);

{for(var i = 0, len = gdjs.AboutCode.GDOyunObjects2.length ;i < len;++i) {
    gdjs.AboutCode.GDOyunObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.95, 0.95, "easeOutQuad", 50, false, false);
}
}}

}


{


gdjs.AboutCode.condition0IsTrue_0.val = false;
gdjs.AboutCode.condition1IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.AboutCode.condition0IsTrue_0.val ) {
{
{gdjs.AboutCode.conditionTrue_1 = gdjs.AboutCode.condition1IsTrue_0;
gdjs.AboutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14558948);
}
}}
if (gdjs.AboutCode.condition1IsTrue_0.val) {
/* Reuse gdjs.AboutCode.GDOyunObjects1 */
{for(var i = 0, len = gdjs.AboutCode.GDOyunObjects1.length ;i < len;++i) {
    gdjs.AboutCode.GDOyunObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDOyunObjects1Objects = Hashtable.newFrom({"Oyun": gdjs.AboutCode.GDOyunObjects1});
gdjs.AboutCode.eventsList2 = function(runtimeScene) {

{


gdjs.AboutCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("Hakkinda"), gdjs.AboutCode.GDHakkindaObjects1);
{for(var i = 0, len = gdjs.AboutCode.GDHakkindaObjects1.length ;i < len;++i) {
    gdjs.AboutCode.GDHakkindaObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4);
}
}{for(var i = 0, len = gdjs.AboutCode.GDHakkindaObjects1.length ;i < len;++i) {
    gdjs.AboutCode.GDHakkindaObjects1[i].setY(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 5);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Oyun"), gdjs.AboutCode.GDOyunObjects1);
{for(var i = 0, len = gdjs.AboutCode.GDOyunObjects1.length ;i < len;++i) {
    gdjs.AboutCode.GDOyunObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 30);
}
}{for(var i = 0, len = gdjs.AboutCode.GDOyunObjects1.length ;i < len;++i) {
    gdjs.AboutCode.GDOyunObjects1[i].setY(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Oyun"), gdjs.AboutCode.GDOyunObjects1);

gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDOyunObjects1Objects, runtimeScene, true, false);
}if (gdjs.AboutCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.AboutCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Oyun"), gdjs.AboutCode.GDOyunObjects1);

gdjs.AboutCode.condition0IsTrue_0.val = false;
gdjs.AboutCode.condition1IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.AboutCode.mapOfGDgdjs_46AboutCode_46GDOyunObjects1Objects, runtimeScene, true, true);
}if ( gdjs.AboutCode.condition0IsTrue_0.val ) {
{
{gdjs.AboutCode.conditionTrue_1 = gdjs.AboutCode.condition1IsTrue_0;
gdjs.AboutCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14559940);
}
}}
if (gdjs.AboutCode.condition1IsTrue_0.val) {
/* Reuse gdjs.AboutCode.GDOyunObjects1 */
{for(var i = 0, len = gdjs.AboutCode.GDOyunObjects1.length ;i < len;++i) {
    gdjs.AboutCode.GDOyunObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 1, 1, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.AboutCode.condition0IsTrue_0.val = false;
{
gdjs.AboutCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.AboutCode.condition0IsTrue_0.val) {
}

}


};

gdjs.AboutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AboutCode.GDNewSpriteObjects1.length = 0;
gdjs.AboutCode.GDNewSpriteObjects2.length = 0;
gdjs.AboutCode.GDNewSpriteObjects3.length = 0;
gdjs.AboutCode.GDHakkindaObjects1.length = 0;
gdjs.AboutCode.GDHakkindaObjects2.length = 0;
gdjs.AboutCode.GDHakkindaObjects3.length = 0;
gdjs.AboutCode.GDOyunObjects1.length = 0;
gdjs.AboutCode.GDOyunObjects2.length = 0;
gdjs.AboutCode.GDOyunObjects3.length = 0;
gdjs.AboutCode.GDimlecObjects1.length = 0;
gdjs.AboutCode.GDimlecObjects2.length = 0;
gdjs.AboutCode.GDimlecObjects3.length = 0;

gdjs.AboutCode.eventsList2(runtimeScene);

return;

}

gdjs['AboutCode'] = gdjs.AboutCode;
