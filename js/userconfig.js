

/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [42.381899, -71.122499],
	south : 42.24 ,
	west : -71.27,
	north : 42.453,
	east : -70.95,

	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1IjoicmhleXdvb2QiLCJhIjoiY2l1cmZnYXJlMDA4MDJ5cnY2azJvNmNtNCJ9.HqJZu0f7QVenQA2vtk2z5w',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'rheywood',
	cartoDBinsertfunction : 'insert_transitways_data',
	walkthroughWelcome: "<p>This webmap allows you to view data collected by the New York City Department of Transportation on public transportation in NYC.</p><p>It also allows you to submit input on where transit could be improved by drawing on the map! </p>"
};
