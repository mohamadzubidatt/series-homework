// ===== Part A: data access =====

// Returns the title of an episode, by the position of its season and the position of the episode (both start from 0)
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) =>
  show.seasons[seasonIndex].episodes[episodeIndex].title; // go into the season by index, then the episode by index, and take its title

// Returns the "number" of the last season, or 0 if the show has no seasons
export const getLastSeasonNumber = show =>
  show.seasons[show.seasons.length - 1]?.number ?? 0; // last item is at length - 1; ?. avoids a crash if it's missing, ?? gives 0 instead of undefined

// Returns the year of the next season, or "No announcement" if there is no nextSeason
export const getNextSeasonYear = show => show.nextSeason?.year ?? "No announcement"; // ?. returns undefined if nextSeason is missing, ?? replaces it with the text

// ===== Part B: array functions =====

// Returns the show with the given id, or undefined if none is found
export const getById = (series, id) => series.find(show => show.id === id); // find returns the first show whose id matches

// Returns a new array of objects: each show's title and how many seasons it has
export const getSeasonsCount = series =>
  series.map(show => ({ title: show.title, seasons: show.seasons.length })); // map turns every show into a small new object (the () around {} return an object)

// Returns true if any episode, in any season, has a rating of minRating or more
export const hasTopEpisode = (show, minRating) =>
  show.seasons.some(season => season.episodes.some(episode => episode.rating >= minRating)); // outer some checks each season, inner some checks each episode in it

// Returns an array of creator names from the given country
export const getCreatorsFrom = (series, country) =>
  series
    .filter(show => show.creator.country === country) // keep only shows whose creator is from that country
    .map(show => show.creator.name); // turn each remaining show into just the creator's name

// Returns a new array sorted by startYear, from oldest to newest (the original stays the same)
export const sortByStartYear = series => [...series].sort((a, b) => a.startYear - b.startYear); // [...series] makes a copy first, because sort changes the array it is called on

// ===== Part C: updates without changing the original =====

// Returns a new series array where the show with this id has a new title
export const renameSeries = (series, id, newTitle) =>
  series.map(show => (show.id === id ? { ...show, title: newTitle } : show)); // matching show: copy it with a new title; other shows: return the same object

// Returns a new series array where the show got a new season at the end
export const addSeason = (series, showId, season) =>
  series.map(show =>
    show.id === showId // is this the show we want to change?
      ? { ...show, seasons: [...show.seasons, season] } // yes: copy the show, and make a new seasons array with the new season at the end
      : show // no: keep the same show object
  );

// Returns a new series array where an episode was added to the season with this number
export const addEpisode = (series, showId, seasonNumber, episode) =>
  series.map(show =>
    show.id === showId // is this the show we want to change?
      ? {
          ...show, // copy all the show's properties
          seasons: show.seasons.map(season => // make a new seasons array
            season.number === seasonNumber // is this the season we want (by its number, not its position)?
              ? { ...season, episodes: [...season.episodes, episode] } // yes: copy the season with a new episodes array that has the new episode at the end
              : season // no: keep the same season object
          ),
        }
      : show // other shows stay the same objects
  );
