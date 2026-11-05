// Part A: data access

export const getEpisodeTitle = (show, seasonIndex, episodeIndex) =>
  show.seasons[seasonIndex].episodes[episodeIndex].title;

export const getLastSeasonNumber = show =>
  show.seasons[show.seasons.length - 1]?.number ?? 0;

export const getNextSeasonYear = show => show.nextSeason?.year ?? "No announcement";

// Part B: array functions

export const getById = (series, id) => series.find(show => show.id === id);

export const getSeasonsCount = series =>
  series.map(show => ({ title: show.title, seasons: show.seasons.length }));

export const hasTopEpisode = (show, minRating) =>
  show.seasons.some(season => season.episodes.some(episode => episode.rating >= minRating));

export const getCreatorsFrom = (series, country) =>
  series
    .filter(show => show.creator.country === country)
    .map(show => show.creator.name);

export const sortByStartYear = series => [...series].sort((a, b) => a.startYear - b.startYear);

// Part C: updates without changing the original

export const renameSeries = (series, id, newTitle) =>
  series.map(show => (show.id === id ? { ...show, title: newTitle } : show));

export const addSeason = (series, showId, season) =>
  series.map(show =>
    show.id === showId ? { ...show, seasons: [...show.seasons, season] } : show
  );

export const addEpisode = (series, showId, seasonNumber, episode) =>
  series.map(show =>
    show.id === showId
      ? {
          ...show,
          seasons: show.seasons.map(season =>
            season.number === seasonNumber
              ? { ...season, episodes: [...season.episodes, episode] }
              : season
          ),
        }
      : show
  );
