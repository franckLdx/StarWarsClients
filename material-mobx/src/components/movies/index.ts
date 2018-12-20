import { URL_MOVIES } from '../router';
import { createSubRouter } from '../router/subRouter';
import MoviesList from './list';
import Movie from './movie';

export default createSubRouter({
  ListComponent: MoviesList,
  RecordComponent: Movie,
  url: URL_MOVIES,
});