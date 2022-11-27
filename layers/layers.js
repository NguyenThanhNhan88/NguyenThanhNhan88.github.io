var wms_layers = [];

var format_Mtdnsngikm2_0 = new ol.format.GeoJSON();
var features_Mtdnsngikm2_0 = format_Mtdnsngikm2_0.readFeatures(json_Mtdnsngikm2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mtdnsngikm2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mtdnsngikm2_0.addFeatures(features_Mtdnsngikm2_0);
var lyr_Mtdnsngikm2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mtdnsngikm2_0, 
                style: style_Mtdnsngikm2_0,
                interactive: true,
    title: 'Mật độ dân số (người/km2)<br />\
    <img src="styles/legend/Mtdnsngikm2_0_0.png" /> 30<br />\
    <img src="styles/legend/Mtdnsngikm2_0_1.png" /> 37<br />\
    <img src="styles/legend/Mtdnsngikm2_0_2.png" /> 40<br />\
    <img src="styles/legend/Mtdnsngikm2_0_3.png" /> 56<br />\
    <img src="styles/legend/Mtdnsngikm2_0_4.png" /> 74<br />\
    <img src="styles/legend/Mtdnsngikm2_0_5.png" /> 77<br />\
    <img src="styles/legend/Mtdnsngikm2_0_6.png" /> 84<br />\
    <img src="styles/legend/Mtdnsngikm2_0_7.png" /> 101<br />\
    <img src="styles/legend/Mtdnsngikm2_0_8.png" /> 109<br />\
    <img src="styles/legend/Mtdnsngikm2_0_9.png" /> 921<br />\
    <img src="styles/legend/Mtdnsngikm2_0_10.png" /> <br />'
        });

lyr_Mtdnsngikm2_0.setVisible(true);
var layersList = [lyr_Mtdnsngikm2_0];
lyr_Mtdnsngikm2_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_VI': 'ADM2_VI', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM2ALT1VI': 'ADM2ALT1VI', 'ADM2ALT2VI': 'ADM2ALT2VI', 'ADM1_EN': 'ADM1_EN', 'ADM1_VI': 'ADM1_VI', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_VI': 'ADM0_VI', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Dan_so': 'Dan_so', 'DienTich': 'DienTich', 'MatDo_DS': 'MatDo_DS', });
lyr_Mtdnsngikm2_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_VI': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM2ALT1VI': 'TextEdit', 'ADM2ALT2VI': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_VI': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_VI': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Dan_so': 'TextEdit', 'DienTich': 'TextEdit', 'MatDo_DS': 'TextEdit', });
lyr_Mtdnsngikm2_0.set('fieldLabels', {'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'ADM2_EN': 'inline label', 'ADM2_VI': 'inline label', 'ADM2_PCODE': 'inline label', 'ADM2_REF': 'inline label', 'ADM2ALT1EN': 'inline label', 'ADM2ALT2EN': 'inline label', 'ADM2ALT1VI': 'inline label', 'ADM2ALT2VI': 'inline label', 'ADM1_EN': 'inline label', 'ADM1_VI': 'inline label', 'ADM1_PCODE': 'inline label', 'ADM0_EN': 'inline label', 'ADM0_VI': 'inline label', 'ADM0_PCODE': 'inline label', 'date': 'inline label', 'validOn': 'inline label', 'validTo': 'inline label', 'Dan_so': 'inline label', 'DienTich': 'inline label', 'MatDo_DS': 'inline label', });
lyr_Mtdnsngikm2_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});