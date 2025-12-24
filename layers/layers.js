var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pases_1 = new ol.format.GeoJSON();
var features_Pases_1 = format_Pases_1.readFeatures(json_Pases_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pases_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pases_1.addFeatures(features_Pases_1);
var lyr_Pases_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pases_1, 
                style: style_Pases_1,
                popuplayertitle: 'Países',
                interactive: false,
    title: 'Países<br />\
    <img src="styles/legend/Pases_1_0.png" /> <br />\
    <img src="styles/legend/Pases_1_1.png" /> <br />' });
var format_Argentina_2 = new ol.format.GeoJSON();
var features_Argentina_2 = format_Argentina_2.readFeatures(json_Argentina_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Argentina_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Argentina_2.addFeatures(features_Argentina_2);
var lyr_Argentina_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Argentina_2, 
                style: style_Argentina_2,
                popuplayertitle: 'Argentina',
                interactive: false,
                title: '<img src="styles/legend/Argentina_2.png" /> Argentina'
            });
var format_Localidades_3 = new ol.format.GeoJSON();
var features_Localidades_3 = format_Localidades_3.readFeatures(json_Localidades_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_3.addFeatures(features_Localidades_3);
var lyr_Localidades_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidades_3, 
                style: style_Localidades_3,
                popuplayertitle: 'Localidades',
                interactive: true,
    title: 'Localidades<br />\
    <img src="styles/legend/Localidades_3_0.png" /> <br />\
    <img src="styles/legend/Localidades_3_1.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Pases_1.setVisible(true);lyr_Argentina_2.setVisible(true);lyr_Localidades_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Pases_1,lyr_Argentina_2,lyr_Localidades_3];
lyr_Pases_1.set('fieldAliases', {'fid': 'fid', 'WP_Name': 'WP_Name', 'WP_Name_ND': 'WP_Name_ND', 'MapTint_2': 'MapTint_2', 'MapTint_3': 'MapTint_3', 'GENC_2': 'GENC_2', 'GENC_3': 'GENC_3', 'Tejedoras': 'Tejedoras', 'label': 'label', });
lyr_Argentina_2.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Localidades_3.set('fieldAliases', {'fid': 'fid', 'PAIS': 'PAIS', 'CIUDAD': 'CIUDAD', 'labelpos': 'labelpos', 'labelshow': 'labelshow', 'CIUDAD2': 'CIUDAD2', 'labelalign': 'labelalign', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Pases_1.set('fieldImages', {'fid': 'TextEdit', 'WP_Name': 'TextEdit', 'WP_Name_ND': 'TextEdit', 'MapTint_2': 'TextEdit', 'MapTint_3': 'TextEdit', 'GENC_2': 'TextEdit', 'GENC_3': 'TextEdit', 'Tejedoras': 'Range', 'label': 'TextEdit', });
lyr_Argentina_2.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Localidades_3.set('fieldImages', {'fid': 'TextEdit', 'PAIS': 'TextEdit', 'CIUDAD': 'TextEdit', 'labelpos': 'TextEdit', 'labelshow': 'TextEdit', 'CIUDAD2': 'TextEdit', 'labelalign': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Pases_1.set('fieldLabels', {'fid': 'hidden field', 'WP_Name': 'no label', 'WP_Name_ND': 'hidden field', 'MapTint_2': 'hidden field', 'MapTint_3': 'hidden field', 'GENC_2': 'hidden field', 'GENC_3': 'hidden field', 'Tejedoras': 'hidden field', 'label': 'hidden field', });
lyr_Argentina_2.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'entidad': 'inline label - always visible', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_Localidades_3.set('fieldLabels', {'fid': 'hidden field', 'PAIS': 'header label - always visible', 'CIUDAD': 'header label - visible with data', 'labelpos': 'hidden field', 'labelshow': 'hidden field', 'CIUDAD2': 'hidden field', 'labelalign': 'hidden field', });
lyr_Localidades_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});