import { URL_MOVIES } from '../router';
import { createSubRouter } from '../router/subRouter';
import MoviesList from './List';
import Movie from './Movie';

export default createSubRouter({
  ListComponent: MoviesList,
  RecordComponent: Movie,
  url: URL_MOVIES,
});