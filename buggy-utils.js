// Fix #1: was "=" (assigns "Drama" to every show), now "===" (only compares)
export const getDramas = series => series.filter(show => show.genre === "Drama"); // keep only the shows whose genre is "Drama"

// Fix #2: the id comes from the URL as text ("102"), but in the data it's a number (102), so we convert it
export const getEpisodeById = (season, idText) =>
  season.episodes.find(episode => episode.id === Number(idText)); // Number("102") gives 102, so === can match

// Fix #3: push changed the original season; now we build new copies instead
export const addEpisodeToFirstSeason = (show, episode) => {
  const firstSeason = show.seasons[0]; // the first season (still the original object, we only read from it)
  const newFirstSeason = { ...firstSeason, episodes: [...firstSeason.episodes, episode] }; // a copy of the season with a new episodes array that includes the new episode
  return { ...show, seasons: [newFirstSeason, ...show.seasons.slice(1)] }; // a copy of the show: new first season + the rest of the seasons (slice(1) = everything after the first)
};
