gdjs.Giris_32Animasyon_32sahnesiCode = {};
gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1= [];
gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects2= [];

gdjs.Giris_32Animasyon_32sahnesiCode.conditionTrue_0 = {val:false};
gdjs.Giris_32Animasyon_32sahnesiCode.condition0IsTrue_0 = {val:false};
gdjs.Giris_32Animasyon_32sahnesiCode.condition1IsTrue_0 = {val:false};


gdjs.Giris_32Animasyon_32sahnesiCode.eventsList0 = function(runtimeScene) {

{


gdjs.Giris_32Animasyon_32sahnesiCode.condition0IsTrue_0.val = false;
{
gdjs.Giris_32Animasyon_32sahnesiCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Giris_32Animasyon_32sahnesiCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1);

gdjs.Giris_32Animasyon_32sahnesiCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Giris_32Animasyon_32sahnesiCode.condition0IsTrue_0.val = true;
        gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1[k] = gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1.length = k;}if (gdjs.Giris_32Animasyon_32sahnesiCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Giris Konusma Sayfasi", false);
}}

}


};

gdjs.Giris_32Animasyon_32sahnesiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects1.length = 0;
gdjs.Giris_32Animasyon_32sahnesiCode.GDNewVideoObjects2.length = 0;

gdjs.Giris_32Animasyon_32sahnesiCode.eventsList0(runtimeScene);

return;

}

gdjs['Giris_32Animasyon_32sahnesiCode'] = gdjs.Giris_32Animasyon_32sahnesiCode;
