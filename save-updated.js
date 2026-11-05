import { writeFileSync } from "node:fs";
import { loadData } from "./load.js";
import { addSeason } from "./series-service.js";

const data = loadData();

const season = {
  number: 1,
  episodes: [{ id: 801, title: "First Contact", rating: 8.0, duration: 44 }],
};

const updated = { platform: data.platform, series: addSeason(data.series, 5, season) };

writeFileSync("series-updated.json", JSON.stringify(updated, null, 2));
