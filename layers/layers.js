var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Desa_Kel_Demak_1 = new ol.format.GeoJSON();
var features_Desa_Kel_Demak_1 = format_Desa_Kel_Demak_1.readFeatures(json_Desa_Kel_Demak_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_Kel_Demak_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_Kel_Demak_1.addFeatures(features_Desa_Kel_Demak_1);
var lyr_Desa_Kel_Demak_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_Kel_Demak_1, 
                style: style_Desa_Kel_Demak_1,
                popuplayertitle: 'Desa_Kel_Demak',
                interactive: true,
    title: 'Desa_Kel_Demak<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_0.png" /> Bango<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_1.png" /> Betokan<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_2.png" /> Bintoro<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_3.png" /> Bolo<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_4.png" /> Cabean<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_5.png" /> Donorojo<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_6.png" /> Kadilangu<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_7.png" /> Kalicilik<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_8.png" /> Kalikondang<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_9.png" /> Karangmlati<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_10.png" /> Katonsari<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_11.png" /> Kedondong<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_12.png" /> Mangunjiwan<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_13.png" /> Mulyorejo<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_14.png" /> Raji<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_15.png" /> Sedo<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_16.png" /> Singorejo<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_17.png" /> Tempuran<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_18.png" /> Turirejo<br />\
    <img src="styles/legend/Desa_Kel_Demak_1_19.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Desa_Kel_Demak_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Desa_Kel_Demak_1];
lyr_Desa_Kel_Demak_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Desa_Kel_Demak_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Desa_Kel_Demak_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Desa_Kel_Demak_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});