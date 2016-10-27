/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [40.730610, -73.935242],
	south : 40.59 ,
	west : -74.08,
	north : 40.80,
	east : -73.75,
	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1IjoicmhleXdvb2QiLCJhIjoiY2l1cmZnYXJlMDA4MDJ5cnY2azJvNmNtNCJ9.HqJZu0f7QVenQA2vtk2z5w',
	basemap: 'https://api.mapbox.com/styles/v1/rheywood/ciuskj4zn00hi2io2hkcxkjni/static/-73.953331,40.729284,9.81,0.00,0.00/800x800?access_token=pk.eyJ1IjoicmhleXdvb2QiLCJhIjoiY2l1cmZnYXJlMDA4MDJ5cnY2azJvNmNtNCJ9.HqJZu0f7QVenQA2vtk2z5w',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'rheywood',
	cartoDBinsertfunction : 'insert_transitways_data',
	walkthroughWelcome: "<p>This webmap allows you to view data collected by the New York City Department of Transportation on public transportation in NYC.</p><p>It also allows you to submit input on where transit could be improved by drawing on the map! </p>"
};
