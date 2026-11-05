import { writeFileSync } from "node:fs"; // writeFileSync writes text into a file
import { loadData } from "./load.js"; // loadData reads series.json and returns it as an object
import { addSeason } from "./series-service.js"; // our function from part C

const data = loadData(); // load the original data from series.json

// The new season we want to add to Desert Signal
const season = {
  number: 1, // season number 1
  episodes: [{ id: 801, title: "First Contact", rating: 8.0, duration: 44 }], // one episode
};

// A new object: same platform, and a new series array where show 5 (Desert Signal) has the season
const updated = { platform: data.platform, series: addSeason(data.series, 5, season) };

writeFileSync("series-updated.json", JSON.stringify(updated, null, 2)); // turn the object into JSON text (indented by 2 spaces) and save it to a new file
