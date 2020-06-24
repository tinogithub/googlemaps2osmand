// Convert Google Maps Locations export to GPX-Data for OSMAnd i.e.
// (build 202006241545)
//
// Howto
// 1. You need a Javascript runtime like Node.js (https://nodejs.org/en/)
// 2. Copy the script into the same directory as your downloaded JSON-File
// 3. Change the "filename" in the script to your JSON-filename
// 4. Run the script on a commandline like "node google2osmand.js"
// 5. Copy/Paste the printed text into a new file which must be called "favourites.gpx"
// 6. Force OsmAnd-App on your mobil to stop. 
// 7. Copy the file to your OsmAnd directory on your mobil /storage/emulated/0/Android/data/net.osmand/files (overwrite)
// 8. Run OsmAnd again and then you should have a new directory of locations called "Google Import"
//
//

const fs = require('fs');
var google_category = "Google Import";
var filename = "googledata.json";

fs.readFile(filename, 'utf-8', (err, data) => { 
    if (err) throw err; 

    var mydata = JSON.parse(data);

    console.log("<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>");
    console.log("<gpx version=\"1.1\" creator=\"OsmAnd 3.7.3\" xmlns=\"http://www.topografix.com/GPX/1/1\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd\">");
    console.log("<metadata>");
    console.log("<name>favourites</name>");
    console.log("</metadata>");

    var i = 0;
    while(mydata.features[i]) {
        var location = {
            coordinates: mydata.features[i].geometry.coordinates,
            address : mydata.features[i].properties.Location.Address,
            name: mydata.features[i].properties.Title.replace("&", "&amp;")
        }

        console.log("  <wpt lat=\"" + location.coordinates[1] + "\" lon=\"" + location.coordinates[0] + "\">")
        console.log("    <name>" + location.name + "</name>");
        console.log("    <type>" + google_category + "</type>");
        console.log("    <extensions>");
        if(location.address != undefined) {
            console.log("      <address>" + location.address + "</address>");
        }
        console.log("      <icon>special_star</icon>");
        console.log("      <background>circle</background>");
        console.log("      <color>#b4eecc22</color>");
        console.log("    </extensions>");
        console.log("  </wpt>");

        i++;
    }

    console.log("</gpx>");
})

