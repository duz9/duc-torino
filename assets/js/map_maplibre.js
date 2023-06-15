const key = 'rsk8Cp2v98fKfEuYnuHi';

function openNav() {
    document.getElementById("myNav").style.width = "320px";
   }
   
   
   
   /* Close when someone clicks on the "x" symbol inside the overlay */
   function closeNav() {
    document.getElementById("myNav").style.width = "0%";
   }


var map = new maplibregl.Map({
    container: 'map',
    //style: 'https://erds.ithacaweb.org/duc_style.json',
    style: 'assets/style/duc_style.json',
    center: [7.682446257594994, 45.06778499987508],
    zoom: 14,
    minZoom: 12,
    maxZoom: 18,
    pitch: 45,
    attributionControl: true
/*     pitchWithRotate: false,
    dragRotate: true,
    touchZoomRotate: true */
});

map.addControl(new maplibregl.NavigationControl({visualizePitch: true}));
map.addControl(new maplibregl.FullscreenControl());
map.addControl(new maplibregl.GeolocateControl({positionOptions: {enableHighAccuracy: true},trackUserLocation: true}));
map.addControl(new maplibregl.AttributionControl({customAttribution: 'Map produced by Ithaca S.r.l. | OpenStreetMap contributors | Dati Geoportale Comune di Torino'}));
map.setMaxBounds([
    [7.6201961664197855, 45.036139036390324], //SO
    [7.73014527611393, 45.095305908712874] //NE
    ]);    


map.on('load', function () {

//--------adding sources-------------------------------------
    map.addSource('attiv_comm', {
        type: 'geojson',
        data: 'assets/json/attivita_commerciali.geojson',
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 60
    });

    map.addSource('sub_ambiti', {
        type: 'geojson',
        data: 'assets/json/sub_ambiti.geojson'
    });

//-----------adding layers--------------------------------------
    map.addLayer({
        'id': 'sub_ambiti',
        'type': 'fill',
        'source': 'sub_ambiti',
        'paint': {
            'fill-antialias': true,
            'fill-color': [
                'match',
                ['get', 'num_ambito'],
                1,
                '#FF0036',
                2,
                '#FF00F3',
                3,
                '#FF8300',
                4,
                '#0059FF',
                5,
                '#33FF42',
                6,
                '#ECFF00',
                7,
                '#00FFFB',
                8,
                '#FF0087',
                /* other */ '#ccc'
            ],
            'fill-opacity': 0.1,
            'fill-outline-color':'#00FFFB',
                }
            });


    map.addLayer({
        'id': 'cluster',
        'type': 'circle',
        'source': 'attiv_comm',
        'filter': ['has', 'point_count'],
        'minzoom':13,
        'maxZoom': 15,
        'paint': {
            // 'circle-radius': 4,
            'circle-stroke-width': 0.3,
            // 'circle-color': 'yellow',
            'circle-stroke-color': '#000000',
            'circle-color': '#FFFFFF',
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                10,
                50,
                15,
                250,
                20
                ],
             'circle-opacity': 0.9,
                }
            });

    map.addLayer({
        'id': 'unclustered-point',
        'type': 'symbol',
        'source': 'attiv_comm',
        'minZoom': 15,
        'filter': ['!', ['has', 'point_count']],
        'layout': {
            'icon-image': [
                'case',
                ['==', ['get', 'CAT_MER'], 'Alimentari'],'grocery_11',
                ['==', ['get', 'CAT_MER'], 'Extralimentari'],'commercial_11',
                ['==', ['get', 'CAT_MER'], 'Abbigliamento'],'clothing_store_11',
                ['==', ['get', 'CAT_MER'], 'Nessuna'],'commercial_11',
                ['==', ['get', 'CAT_MER'], 'Alimentari annessi ad altra attività'],'grocery_11',
                ['==', ['get', 'CAT_MER'], 'Bibite'],'alcohol_shop_11',
                ['==', ['get', 'CAT_MER'], 'Minimercato'],'grocery_11',
                ['==', ['get', 'CAT_MER'], 'Quotidiani e periodici'],'post_11',
                ['==', ['get', 'CAT_MER'], 'Tabacchi'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Pastigliaggi'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Fotografia'],'attraction_11',
                ['==', ['get', 'CAT_MER'], 'Acconciatore/Estetista'],'hairdresser_11',
                ['==', ['get', 'CAT_MER'], 'Mobili'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Elettronica'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Erboristeria'],'wetland_11',
                ['==', ['get', 'CAT_MER'], 'Gastronomia'],'restaurant_11',
                ['==', ['get', 'CAT_MER'], 'Numismatica e filatelia'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Vendita al dettaglio di cose antiche ed usate'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Mista'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Phone center'],'telephone_11',
                ['==', ['get', 'CAT_MER'], 'Oggetti preziosi'],'suitcase_11',
                ['==', ['get', 'CAT_MER'], 'Articoli pr la casa'],'commercial_11',
                ['==', ['get', 'CAT_MER'], 'Telefonia'],'telephone_11',
                ['==', ['get', 'CAT_MER'], 'Audiovisivi'],'cinema_11',
                ['==', ['get', 'CAT_MER'], 'Pizza al taglio'],'restaurant_11',
                ['==', ['get', 'CAT_MER'], 'Librerie'],'library_11',
                ['==', ['get', 'CAT_MER'], 'Frutta e verdura'],'wetland_11',
                ['==', ['get', 'CAT_MER'], 'Profumeria'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Pasticceria'],'restaurant_11',
                ['==', ['get', 'CAT_MER'], 'Gelateria'],'restaurant_11',
                ['==', ['get', 'CAT_MER'], 'Bigiotteria'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Articoli sportivi'],'soccer_11',
                ['==', ['get', 'CAT_MER'], 'Ottica'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Autoveicoli e motoveicoli'],'car_11',
                ['==', ['get', 'CAT_MER'], 'Cialde caffè'],'cafe_11',
                ['==', ['get', 'CAT_MER'], 'Enoteca'],'alcohol_shop_11',
                ['==', ['get', 'CAT_MER'], 'Panetteria'],'bakery_11',
                ['==', ['get', 'CAT_MER'], 'Non alimentari annessi ad altre attività'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Cartolerie'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Informatica'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Calzature'],'clothing_store_11',
                ['==', ['get', 'CAT_MER'], "Opere d'arte"],'art_gallery_11',
                ['==', ['get', 'CAT_MER'], 'Pelletteria'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Tessuti'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Negozio con apparecchi automatici'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Panificio'],'bakery_11',
                ['==', ['get', 'CAT_MER'], 'Farmacia'],'pharmacy_11',
                ['==', ['get', 'CAT_MER'], 'Carburanti'],'fuel_11',
                ['==', ['get', 'CAT_MER'], 'Fiori e piante'],'garden_11',
                ['==', ['get', 'CAT_MER'], 'Alimenti per animali'],'veterinary_11',
                ['==', ['get', 'CAT_MER'], 'Casalinghi - Igiene casa e persona'],'building_11',
                ['==', ['get', 'CAT_MER'], 'Spaccio alimentare e non alimentare'],'grocery_11',
                ['==', ['get', 'CAT_MER'], 'Accessori abbigliamento'],'clothing_store_11',
                ['==', ['get', 'CAT_MER'], 'Macelleria'],'zoo_11',
                ['==', ['get', 'CAT_MER'], 'Giocattoli'],'gift_11',
                ['==', ['get', 'CAT_MER'], 'Biciclette'],'bicycle_11',
                ['==', ['get', 'CAT_MER'], "Complementi d'arredo"],'building_11',
                ['==', ['get', 'CAT_MER'], 'Intimo'],'clothing_store_11',
                ['==', ['get', 'CAT_MER'], 'Oggettistica'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Cosmetici'],'clothing_store_11',
                ['==', ['get', 'CAT_MER'], 'Edilizia/Sanitari'],'building_11',
                ['==', ['get', 'CAT_MER'], 'Supermercato'],'grocery_11',
                ['==', ['get', 'CAT_MER'], 'Ricambi auto e accessori'],'car_11',
                ['==', ['get', 'CAT_MER'], 'Non alimentari generici'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Alimenti biologici'],'zoo_11',
                ['==', ['get', 'CAT_MER'], 'Pescheria'],'restaurant_11',
                ['==', ['get', 'CAT_MER'], 'Tappeti'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Articoli per animali'],'veterinary_11',
                ['==', ['get', 'CAT_MER'], 'Ferramenta'],'industry_11',
                ['==', ['get', 'CAT_MER'], 'Sexy shop'],'cross_11',
                ['==', ['get', 'CAT_MER'], 'Parafarmacia'],'pharmacy_11',
                ['==', ['get', 'CAT_MER'], 'Vendita non esclusiva di giornali'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Articoli sanitari e ortopedici'],'doctor_11',
                ['==', ['get', 'CAT_MER'], 'Articoli funerari'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Elettrodomestici e/o ricambi'],'building_11',
                ['==', ['get', 'CAT_MER'], 'Serramenti'],'building_11',
                ['==', ['get', 'CAT_MER'], 'Salumeria'],'fast_food_11',
                ['==', ['get', 'CAT_MER'], 'Strumenti musicali'],'music_11',
                ['==', ['get', 'CAT_MER'], 'Drogheria'],'garden_11',
                ['==', ['get', 'CAT_MER'], 'Latteria'],'grocery_11',
                ['==', ['get', 'CAT_MER'], 'Colorificio'],'shop_11',
                ['==', ['get', 'CAT_MER'], 'Commercio equo e solidale'],'commercial_11',
                'commercial_11' // default
              ]
            }
/*         'paint': {
        'circle-color': '#11b4da',
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff',
        } */
        });

//--Stili cluster-------------------------------------------------------------------------------------
    map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'attiv_comm',
        filter: ['has', 'point_count'],
        layout: {
        'text-field': '{point_count_abbreviated}',
        "text-font": ["Metropolis Regular"],
        'text-size': 13
        }
        });
    map.on('click', 'cluster', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
        layers: ['cluster']});
        var clusterId = features[0].properties.cluster_id;
        map.getSource('attiv_comm').getClusterExpansionZoom(
        clusterId,
        function (err, zoom) {
        if (err) return;   
        map.easeTo({
        center: features[0].geometry.coordinates,
        zoom: zoom});
        }
        );
        });

    map.on('mouseenter', 'cluster', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'cluster', function () {
        map.getCanvas().style.cursor = '';
    });


    //-----------------display popup--------------------------------------------------------------------------------------
    map.on('click', 'unclustered-point', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var indirizzo = e.features[0].properties.INDIRIZZ;
        var categoria = e.features[0].properties.CAT_MER;
        var sub_ambito = e.features[0].properties.sub_ambito_new;


        //converting in uppercase the correct letters
        var first, frase_new, frase_old, l, lung;
        
        frase_old = indirizzo;
        lung = frase_old.length;
        frase_new = [];
        
        for (var i = 0, _pj_a = lung; i < _pj_a; i += 1) {
          if (i === 0) {
            first = frase_old[0].toUpperCase();
            frase_new.push(first);
          }
        
          if (i > 0) {
            if (frase_old[i] === " ") {
              l = frase_old[i + 1].toUpperCase();
              frase_new.push(" ");
              frase_new.push(l);
            } else {
              if (frase_old[i - 1] !== " ") {
                frase_new.push(frase_old[i]);
              }
            }
          }
        }
        correct_address=frase_new.join("")

        if (categoria=="Nessuna"){
            var categoria="Altro"
        }

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        var div = document.createElement('div');
        div.innerHTML = categoria + '<br>'+ correct_address + '<br>' + sub_ambito;

        new maplibregl.Popup()
        .setLngLat(coordinates)
        .setDOMContent(div)
        //.setHTML(description)
        .addTo(map);
        });
         
        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'unclustered-point', function () {
        map.getCanvas().style.cursor = 'pointer';
        });
        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'unclustered-point', function () {
        map.getCanvas().style.cursor = '';
        });


    //Filtro per anno----------------------------------------------------------------------
/*     var slider = document.getElementById("barra");
    var output = document.getElementById("valore");
    output.innerHTML = slider.value; 
    slider.oninput = function() {
        output.innerHTML = this.value;
        var filter_value = parseInt(this.value)
        map.setFilter('unclustered-point',['==', ['get', 'ANNO_INI'], filter_value]);
      } */


    //Filtro per categoria 1-----------------------------------------------------
/*     var drop_item = document.getElementById("menu-drop1");
    drop_item.oninput = function() {
        var drop_value = this.value.toUpperCase();
        map.setFilter('unclustered-point', ['==', ['get', 'TIPO_MER'], drop_value]);
    };
 */

    //Filtro per categoria 2-----------------------------------------------------
    var drop_item = document.getElementById("menu-drop2");
    drop_item.oninput = function() {
        var drop_value = this.value;
        map.setFilter('unclustered-point', ['==', ['get', 'CAT_MER'], drop_value]);
    };


    //Filtro per sub-ambito-----------------------------------------------------
    var drop_item = document.getElementById("menu-drop3");
    drop_item.oninput = function() {
        var drop_value = this.value;
        map.setFilter('unclustered-point', ['==', ['get', 'sub_ambito'], drop_value]);
    };


    //Reset----------------------------------------------------------------------
    reset.onclick = function() {
        map.setFilter('unclustered-point', null);
    }


   /*  //scritta torino--------------------------------------------------------------
    const geoJSON = {
        type : "FeatureCollection",
        features : [{
            type : "Feature",
            properties : {
                name : "TORINO"
            },
            geometry : {
                type : "Point",
                coordinates : [7.6782, 45.0644]}}]}

    map.addSource('my-point', {
        type : 'geojson',
        data : geoJSON})

    map.addLayer({
        id: 'my-point-layer',
        type: "symbol",
        source: 'my-point',
        maxzoom: 14,
        layout : {
            'text-field' : ['get', 'name'],
            'text-font': ['Metropolis Regular'],
            'text-letter-spacing': 1,
            'text-size': 48}})
    //-------------------------------------------------------------------------- */

});
