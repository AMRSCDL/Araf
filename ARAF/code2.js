gdjs.Giris_32Konusma_32SayfasiCode = {};
gdjs.Giris_32Konusma_32SayfasiCode.GDNewSpriteObjects1= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDNewSpriteObjects2= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDNewSpriteObjects3= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDEkranaYazdirObjects1= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDEkranaYazdirObjects2= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDEkranaYazdirObjects3= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects1= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects2= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects3= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects2= [];
gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects3= [];

gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_0 = {val:false};
gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0 = {val:false};
gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0 = {val:false};
gdjs.Giris_32Konusma_32SayfasiCode.condition2IsTrue_0 = {val:false};
gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_1 = {val:false};
gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_1 = {val:false};
gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_1 = {val:false};
gdjs.Giris_32Konusma_32SayfasiCode.condition2IsTrue_1 = {val:false};


gdjs.Giris_32Konusma_32SayfasiCode.mapOfGDgdjs_46Giris_9532Konusma_9532SayfasiCode_46GDimlecObjects2Objects = Hashtable.newFrom({"imlec": gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects2});
gdjs.Giris_32Konusma_32SayfasiCode.eventsList0 = function(runtimeScene) {

{


gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = false;
{
gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val) {
gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Giris_32Konusma_32SayfasiCode.mapOfGDgdjs_46Giris_9532Konusma_9532SayfasiCode_46GDimlecObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("imlec"), gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects1);
{for(var i = 0, len = gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects1.length ;i < len;++i) {
    gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


};gdjs.Giris_32Konusma_32SayfasiCode.mapOfGDgdjs_46Giris_9532Konusma_9532SayfasiCode_46GDOyunObjects1Objects = Hashtable.newFrom({"Oyun": gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1});
gdjs.Giris_32Konusma_32SayfasiCode.eventsList1 = function(runtimeScene) {

{


gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = false;
{
{gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_1 = gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0;
gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14539156);
}
}if (gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1, gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects2);

{for(var i = 0, len = gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects2.length ;i < len;++i) {
    gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = false;
gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0.val = false;
{
gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val ) {
{
{gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_1 = gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0;
gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14540620);
}
}}
if (gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1, gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects2);

{for(var i = 0, len = gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects2.length ;i < len;++i) {
    gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.95, 0.95, "easeOutQuad", 50, false, false);
}
}}

}


{


gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = false;
gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0.val = false;
{
gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val ) {
{
{gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_1 = gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0;
gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14542004);
}
}}
if (gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1 */
{for(var i = 0, len = gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1.length ;i < len;++i) {
    gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Oyun Alani", false);
}}

}


};gdjs.Giris_32Konusma_32SayfasiCode.mapOfGDgdjs_46Giris_9532Konusma_9532SayfasiCode_46GDOyunObjects1Objects = Hashtable.newFrom({"Oyun": gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1});
gdjs.Giris_32Konusma_32SayfasiCode.eventsList2 = function(runtimeScene) {

{


gdjs.Giris_32Konusma_32SayfasiCode.eventsList0(runtimeScene);
}


{


gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = false;
{
gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "i.mp3", false, 100, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Oyun"), gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1);
{for(var i = 0, len = gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1.length ;i < len;++i) {
    gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 1.1);
}
}{for(var i = 0, len = gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1.length ;i < len;++i) {
    gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1[i].setY(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Oyun"), gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1);

gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = false;
{
gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Giris_32Konusma_32SayfasiCode.mapOfGDgdjs_46Giris_9532Konusma_9532SayfasiCode_46GDOyunObjects1Objects, runtimeScene, true, false);
}if (gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Giris_32Konusma_32SayfasiCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Oyun"), gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1);

gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = false;
gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0.val = false;
{
gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Giris_32Konusma_32SayfasiCode.mapOfGDgdjs_46Giris_9532Konusma_9532SayfasiCode_46GDOyunObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Giris_32Konusma_32SayfasiCode.condition0IsTrue_0.val ) {
{
{gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_1 = gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0;
gdjs.Giris_32Konusma_32SayfasiCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14543556);
}
}}
if (gdjs.Giris_32Konusma_32SayfasiCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1 */
{for(var i = 0, len = gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1.length ;i < len;++i) {
    gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 1, 1, "bouncePast", 100, false, false);
}
}}

}


};

gdjs.Giris_32Konusma_32SayfasiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Giris_32Konusma_32SayfasiCode.GDNewSpriteObjects1.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDNewSpriteObjects2.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDNewSpriteObjects3.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDEkranaYazdirObjects1.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDEkranaYazdirObjects2.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDEkranaYazdirObjects3.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects1.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects2.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDimlecObjects3.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects1.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects2.length = 0;
gdjs.Giris_32Konusma_32SayfasiCode.GDOyunObjects3.length = 0;

gdjs.Giris_32Konusma_32SayfasiCode.eventsList2(runtimeScene);

return;

}

gdjs['Giris_32Konusma_32SayfasiCode'] = gdjs.Giris_32Konusma_32SayfasiCode;
