# googlemaps2osmand

Convert Google Maps Locations export to GPX-Data for OSMAnd i.e.

## Howto
1. You need a Javascript runtime like Node.js (https://nodejs.org/en/)
2. Copy the script into the same directory as your downloaded JSON-File
3. Change the "filename" in the script to your JSON-filename
4. Run the script on a commandline like "node google2osmand.js"
5. Copy/Paste the printed text into a new file which must be called "favourites.gpx"
6. Force OsmAnd-App on your mobil to stop. 
7. Copy the file to your OsmAnd directory on your mobil /storage/emulated/0/Android/data/net.osmand/files (overwrite)
8. Run OsmAnd again and then you should have a new directory of locations called "Google Import"
