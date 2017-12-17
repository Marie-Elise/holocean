console.log("kjh");
// Add map
mapboxgl.accessToken = 'pk.eyJ1IjoibWFlaGRkIiwiYSI6ImNqYjJvdWQ3ZDhrb3gyeWp1MWhoZzVqamIifQ.640_SxF9gWDY14tifRjvkw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/maehdd/cjbayn0st6rtn2rpmgo89cp2x'
});

/*Add icon click 
map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Titre</strong><p>texte du blablabla</p>",
                        "icon": "map"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.038659, 38.931567]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Titre</strong><p>texte du blablabla</p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [79.038659, 10.931567]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Titre</strong><p>texte du blablabla</p>",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-4.493696, 48.510609]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    // popup
    map.on('click', 'places', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});*/