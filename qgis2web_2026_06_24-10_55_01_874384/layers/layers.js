var wms_layers = [];

var format_REGIONBF_0 = new ol.format.GeoJSON();
var features_REGIONBF_0 = format_REGIONBF_0.readFeatures(json_REGIONBF_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIONBF_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIONBF_0.addFeatures(features_REGIONBF_0);
var lyr_REGIONBF_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIONBF_0, 
                style: style_REGIONBF_0,
                popuplayertitle: 'REGION BF',
                interactive: true,
                title: '<img src="styles/legend/REGIONBF_0.png" /> REGION BF'
            });
var format_CHEFLIEUREGION_1 = new ol.format.GeoJSON();
var features_CHEFLIEUREGION_1 = format_CHEFLIEUREGION_1.readFeatures(json_CHEFLIEUREGION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHEFLIEUREGION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHEFLIEUREGION_1.addFeatures(features_CHEFLIEUREGION_1);
var lyr_CHEFLIEUREGION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHEFLIEUREGION_1, 
                style: style_CHEFLIEUREGION_1,
                popuplayertitle: 'CHEF LIEU REGION',
                interactive: true,
                title: '<img src="styles/legend/CHEFLIEUREGION_1.png" /> CHEF LIEU REGION'
            });

lyr_REGIONBF_0.setVisible(true);lyr_CHEFLIEUREGION_1.setVisible(true);
var layersList = [lyr_REGIONBF_0,lyr_CHEFLIEUREGION_1];
lyr_REGIONBF_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CHEFLIEUREGION_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_REGIONBF_0.set('fieldImages', {'OBJECTID': '', 'Nom': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_CHEFLIEUREGION_1.set('fieldImages', {'OBJECTID': '', 'Nom': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_REGIONBF_0.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'hidden field', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CHEFLIEUREGION_1.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CHEFLIEUREGION_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});