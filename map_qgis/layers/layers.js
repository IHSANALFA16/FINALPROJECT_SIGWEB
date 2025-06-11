var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DESA_DIY_1 = new ol.format.GeoJSON();
var features_DESA_DIY_1 = format_DESA_DIY_1.readFeatures(json_DESA_DIY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_DIY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_DIY_1.addFeatures(features_DESA_DIY_1);
var lyr_DESA_DIY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESA_DIY_1, 
                style: style_DESA_DIY_1,
                popuplayertitle: 'DESA_DIY',
                interactive: true,
                title: '<img src="styles/legend/DESA_DIY_1.png" /> DESA_DIY'
            });
var lyr_GHIDIY_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'GHI DIY<br />\
    <img src="styles/legend/GHIDIY_2_0.png" /> <= 1503.3687<br />\
    <img src="styles/legend/GHIDIY_2_1.png" /> 1503.3687 - 1621.3446<br />\
    <img src="styles/legend/GHIDIY_2_2.png" /> 1621.3446 - 1739.3204<br />\
    <img src="styles/legend/GHIDIY_2_3.png" /> 1739.3204 - 1857.2962<br />\
    <img src="styles/legend/GHIDIY_2_4.png" /> > 1857.2962<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GHIDIY_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12245700.584714, -916233.185779, 12337817.463346, -842062.868443]
        })
    });
var format_PEMUKIMANDIY_3 = new ol.format.GeoJSON();
var features_PEMUKIMANDIY_3 = format_PEMUKIMANDIY_3.readFeatures(json_PEMUKIMANDIY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMANDIY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMANDIY_3.addFeatures(features_PEMUKIMANDIY_3);
var lyr_PEMUKIMANDIY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMANDIY_3, 
                style: style_PEMUKIMANDIY_3,
                popuplayertitle: 'PEMUKIMAN DIY',
                interactive: false,
                title: '<img src="styles/legend/PEMUKIMANDIY_3.png" /> PEMUKIMAN DIY'
            });
var format_JALAN_DIY_4 = new ol.format.GeoJSON();
var features_JALAN_DIY_4 = format_JALAN_DIY_4.readFeatures(json_JALAN_DIY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_DIY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_DIY_4.addFeatures(features_JALAN_DIY_4);
var lyr_JALAN_DIY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_DIY_4, 
                style: style_JALAN_DIY_4,
                popuplayertitle: 'JALAN_DIY',
                interactive: false,
                title: '<img src="styles/legend/JALAN_DIY_4.png" /> JALAN_DIY'
            });
var format_SUNGAI_DIY_5 = new ol.format.GeoJSON();
var features_SUNGAI_DIY_5 = format_SUNGAI_DIY_5.readFeatures(json_SUNGAI_DIY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_DIY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_DIY_5.addFeatures(features_SUNGAI_DIY_5);
var lyr_SUNGAI_DIY_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_DIY_5, 
                style: style_SUNGAI_DIY_5,
                popuplayertitle: 'SUNGAI_DIY',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_DIY_5.png" /> SUNGAI_DIY'
            });
var format_LOKASIPOTENSIALPLTS_6 = new ol.format.GeoJSON();
var features_LOKASIPOTENSIALPLTS_6 = format_LOKASIPOTENSIALPLTS_6.readFeatures(json_LOKASIPOTENSIALPLTS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKASIPOTENSIALPLTS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKASIPOTENSIALPLTS_6.addFeatures(features_LOKASIPOTENSIALPLTS_6);
var lyr_LOKASIPOTENSIALPLTS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOKASIPOTENSIALPLTS_6, 
                style: style_LOKASIPOTENSIALPLTS_6,
                popuplayertitle: 'LOKASI POTENSIAL PLTS',
                interactive: true,
                title: '<img src="styles/legend/LOKASIPOTENSIALPLTS_6.png" /> LOKASI POTENSIAL PLTS'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_DESA_DIY_1.setVisible(true);lyr_GHIDIY_2.setVisible(false);lyr_PEMUKIMANDIY_3.setVisible(false);lyr_JALAN_DIY_4.setVisible(false);lyr_SUNGAI_DIY_5.setVisible(false);lyr_LOKASIPOTENSIALPLTS_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DESA_DIY_1,lyr_GHIDIY_2,lyr_PEMUKIMANDIY_3,lyr_JALAN_DIY_4,lyr_SUNGAI_DIY_5,lyr_LOKASIPOTENSIALPLTS_6];
lyr_DESA_DIY_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'STATUS_KOT': 'STATUS_KOT', 'KODE_2008': 'KODE_2008', 'DESA_2008': 'DESA_2008', 'KEC_2008': 'KEC_2008', 'KAB_2008': 'KAB_2008', 'PROP_2008': 'PROP_2008', 'layer': 'layer', 'path': 'path', });
lyr_PEMUKIMANDIY_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_JALAN_DIY_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_SUNGAI_DIY_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_LOKASIPOTENSIALPLTS_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'STATUS_KOT': 'STATUS_KOT', 'KODE_2008': 'KODE_2008', 'DESA_2008': 'DESA_2008', 'KEC_2008': 'KEC_2008', 'KAB_2008': 'KAB_2008', 'PROP_2008': 'PROP_2008', 'layer': 'layer', 'path': 'path', 'lu': 'lu', 'luas': 'luas', });
lyr_DESA_DIY_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'KODE_2008': 'TextEdit', 'DESA_2008': 'TextEdit', 'KEC_2008': 'TextEdit', 'KAB_2008': 'TextEdit', 'PROP_2008': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PEMUKIMANDIY_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', });
lyr_JALAN_DIY_4.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_SUNGAI_DIY_5.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'layer': '', 'path': '', });
lyr_LOKASIPOTENSIALPLTS_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'KODE_2008': 'TextEdit', 'DESA_2008': 'TextEdit', 'KEC_2008': 'TextEdit', 'KAB_2008': 'TextEdit', 'PROP_2008': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'lu': '', 'luas': '', });
lyr_DESA_DIY_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WIADKC': 'hidden field', 'WADMKK': 'inline label - visible with data', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'inline label - visible with data', 'STATUS_KOT': 'hidden field', 'KODE_2008': 'hidden field', 'DESA_2008': 'inline label - visible with data', 'KEC_2008': 'inline label - visible with data', 'KAB_2008': 'inline label - visible with data', 'PROP_2008': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PEMUKIMANDIY_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JALAN_DIY_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_SUNGAI_DIY_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'NAMWS': 'hidden field', 'NAMDAS': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_LOKASIPOTENSIALPLTS_6.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'hidden field', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'STATUS_KOT': 'hidden field', 'KODE_2008': 'hidden field', 'DESA_2008': 'hidden field', 'KEC_2008': 'hidden field', 'KAB_2008': 'no label', 'PROP_2008': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'lu': 'no label', 'luas': 'no label', });
lyr_LOKASIPOTENSIALPLTS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});