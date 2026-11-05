export const getDramas = series => series.filter(show => show.genre === "Drama");

export const getEpisodeById = (season, idText) =>
  season.episodes.find(episode => episode.id === Number(idText));

export const addEpisodeToFirstSeason = (show, episode) => {
  const firstSeason = show.seasons[0];
  const newFirstSeason = { ...firstSeason, episodes: [...firstSeason.episodes, episode] };
  return { ...show, seasons: [newFirstSeason, ...show.seasons.slice(1)] };
};
