gdjs.MenuCode = {};
gdjs.MenuCode.GDGirisEkraniObjects1= [];
gdjs.MenuCode.GDGirisEkraniObjects2= [];
gdjs.MenuCode.GDGirisEkraniObjects3= [];
gdjs.MenuCode.GDSoulObjects1= [];
gdjs.MenuCode.GDSoulObjects2= [];
gdjs.MenuCode.GDSoulObjects3= [];
gdjs.MenuCode.GDNewSprite2Objects1= [];
gdjs.MenuCode.GDNewSprite2Objects2= [];
gdjs.MenuCode.GDNewSprite2Objects3= [];
gdjs.MenuCode.GDsolObjects1= [];
gdjs.MenuCode.GDsolObjects2= [];
gdjs.MenuCode.GDsolObjects3= [];
gdjs.MenuCode.GDsagObjects1= [];
gdjs.MenuCode.GDsagObjects2= [];
gdjs.MenuCode.GDsagObjects3= [];
gdjs.MenuCode.GDsol1ustObjects1= [];
gdjs.MenuCode.GDsol1ustObjects2= [];
gdjs.MenuCode.GDsol1ustObjects3= [];
gdjs.MenuCode.GDsol1altObjects1= [];
gdjs.MenuCode.GDsol1altObjects2= [];
gdjs.MenuCode.GDsol1altObjects3= [];
gdjs.MenuCode.GDsag1ustObjects1= [];
gdjs.MenuCode.GDsag1ustObjects2= [];
gdjs.MenuCode.GDsag1ustObjects3= [];
gdjs.MenuCode.GDsag1altObjects1= [];
gdjs.MenuCode.GDsag1altObjects2= [];
gdjs.MenuCode.GDsag1altObjects3= [];
gdjs.MenuCode.GDcarkSapObjects1= [];
gdjs.MenuCode.GDcarkSapObjects2= [];
gdjs.MenuCode.GDcarkSapObjects3= [];
gdjs.MenuCode.GDdonenCarkObjects1= [];
gdjs.MenuCode.GDdonenCarkObjects2= [];
gdjs.MenuCode.GDdonenCarkObjects3= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDPlayObjects3= [];
gdjs.MenuCode.GDhakkindaObjects1= [];
gdjs.MenuCode.GDhakkindaObjects2= [];
gdjs.MenuCode.GDhakkindaObjects3= [];
gdjs.MenuCode.GDimlecObjects1= [];
gdjs.MenuCode.GDimlecObjects2= [];
gdjs.MenuCode.GDimlecObjects3= [];
gdjs.MenuCode.GDARAFObjects1= [];
gdjs.MenuCode.GDARAFObjects2= [];
gdjs.MenuCode.GDARAFObjects3= [];
gdjs.MenuCode.GDARAF2Objects1= [];
gdjs.MenuCode.GDARAF2Objects2= [];
gdjs.MenuCode.GDARAF2Objects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDimlecObjects2Objects = Hashtable.newFrom({"imlec": gdjs.MenuCode.GDimlecObjects2});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDimlecObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDimlecObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("imlec"), gdjs.MenuCode.GDimlecObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDimlecObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDimlecObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14501244);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MenuCode.GDPlayObjects1, gdjs.MenuCode.GDPlayObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14501148);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.MenuCode.GDPlayObjects1, gdjs.MenuCode.GDPlayObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.95, 0.95, "easeOutQuad", 50, false, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14502756);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Giris Animasyon sahnesi", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDhakkindaObjects1Objects = Hashtable.newFrom({"hakkinda": gdjs.MenuCode.GDhakkindaObjects1});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14504708);
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MenuCode.GDhakkindaObjects1, gdjs.MenuCode.GDhakkindaObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDhakkindaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDhakkindaObjects2[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14505852);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.MenuCode.GDhakkindaObjects1, gdjs.MenuCode.GDhakkindaObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDhakkindaObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDhakkindaObjects2[i].getBehavior("Tween").addObjectScaleTween("Press", 0.95, 0.95, "easeOutQuad", 50, false, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14507212);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDhakkindaObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDhakkindaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDhakkindaObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.1, 1.1, "bouncePast", 100, false, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "About", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDhakkindaObjects1Objects = Hashtable.newFrom({"hakkinda": gdjs.MenuCode.GDhakkindaObjects1});
gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("ARAF"), gdjs.MenuCode.GDARAFObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("hakkinda"), gdjs.MenuCode.GDhakkindaObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2.26);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setY(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4);
}
}{for(var i = 0, len = gdjs.MenuCode.GDhakkindaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDhakkindaObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2.26);
}
}{for(var i = 0, len = gdjs.MenuCode.GDhakkindaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDhakkindaObjects1[i].setY(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 3);
}
}{for(var i = 0, len = gdjs.MenuCode.GDARAFObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDARAFObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2.40);
}
}{for(var i = 0, len = gdjs.MenuCode.GDARAFObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDARAFObjects1[i].setY(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14503996);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 1, 1, "bouncePast", 100, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hakkinda"), gdjs.MenuCode.GDhakkindaObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDhakkindaObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("hakkinda"), gdjs.MenuCode.GDhakkindaObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDhakkindaObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14506484);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDhakkindaObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDhakkindaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDhakkindaObjects1[i].getBehavior("Tween").addObjectScaleTween("Default", 1, 1, "bouncePast", 100, false, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jam game 2.mp3", true, 25, 1);
}}

}


{


{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDGirisEkraniObjects1.length = 0;
gdjs.MenuCode.GDGirisEkraniObjects2.length = 0;
gdjs.MenuCode.GDGirisEkraniObjects3.length = 0;
gdjs.MenuCode.GDSoulObjects1.length = 0;
gdjs.MenuCode.GDSoulObjects2.length = 0;
gdjs.MenuCode.GDSoulObjects3.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects3.length = 0;
gdjs.MenuCode.GDsolObjects1.length = 0;
gdjs.MenuCode.GDsolObjects2.length = 0;
gdjs.MenuCode.GDsolObjects3.length = 0;
gdjs.MenuCode.GDsagObjects1.length = 0;
gdjs.MenuCode.GDsagObjects2.length = 0;
gdjs.MenuCode.GDsagObjects3.length = 0;
gdjs.MenuCode.GDsol1ustObjects1.length = 0;
gdjs.MenuCode.GDsol1ustObjects2.length = 0;
gdjs.MenuCode.GDsol1ustObjects3.length = 0;
gdjs.MenuCode.GDsol1altObjects1.length = 0;
gdjs.MenuCode.GDsol1altObjects2.length = 0;
gdjs.MenuCode.GDsol1altObjects3.length = 0;
gdjs.MenuCode.GDsag1ustObjects1.length = 0;
gdjs.MenuCode.GDsag1ustObjects2.length = 0;
gdjs.MenuCode.GDsag1ustObjects3.length = 0;
gdjs.MenuCode.GDsag1altObjects1.length = 0;
gdjs.MenuCode.GDsag1altObjects2.length = 0;
gdjs.MenuCode.GDsag1altObjects3.length = 0;
gdjs.MenuCode.GDcarkSapObjects1.length = 0;
gdjs.MenuCode.GDcarkSapObjects2.length = 0;
gdjs.MenuCode.GDcarkSapObjects3.length = 0;
gdjs.MenuCode.GDdonenCarkObjects1.length = 0;
gdjs.MenuCode.GDdonenCarkObjects2.length = 0;
gdjs.MenuCode.GDdonenCarkObjects3.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects3.length = 0;
gdjs.MenuCode.GDhakkindaObjects1.length = 0;
gdjs.MenuCode.GDhakkindaObjects2.length = 0;
gdjs.MenuCode.GDhakkindaObjects3.length = 0;
gdjs.MenuCode.GDimlecObjects1.length = 0;
gdjs.MenuCode.GDimlecObjects2.length = 0;
gdjs.MenuCode.GDimlecObjects3.length = 0;
gdjs.MenuCode.GDARAFObjects1.length = 0;
gdjs.MenuCode.GDARAFObjects2.length = 0;
gdjs.MenuCode.GDARAFObjects3.length = 0;
gdjs.MenuCode.GDARAF2Objects1.length = 0;
gdjs.MenuCode.GDARAF2Objects2.length = 0;
gdjs.MenuCode.GDARAF2Objects3.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
