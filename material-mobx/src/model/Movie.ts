
export interface IMovie {
  id: string;
  episodeId: string;
  title: string;
  openingCrawl: string;
  director: string;
  producer: string[];
  releaseDate: string;
  planets: string[];
  characters: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
}

export const sortByEpisodeId = (movies: IMovie[]) => {
  return movies.sort(
    (movie1, movie2) => movie1.episodeId < movie2.episodeId ? -1 : 1
  );
}