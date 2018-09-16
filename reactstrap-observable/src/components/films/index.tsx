import { makeRenderListComponent, makeRenderPageComponent } from '../../app/routes/renderer';
import { ISubRouterPath, SubRouter } from '../../app/routes/subRouter';
import { URL_FILMS } from '../../model';
import { FilmList } from './filmList';
import { FilmsRecord } from './filmRecord';

const list: ISubRouterPath = { url: URL_FILMS.list, renderer: makeRenderListComponent(FilmList) };
const record: ISubRouterPath = { url: URL_FILMS.record, renderer: makeRenderPageComponent(FilmsRecord) };

export const FilmsSubRouter = SubRouter({ list, record })