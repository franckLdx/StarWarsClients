import * as React from 'react';
import { makeRenderPageComponent } from '../../app/routes/render';
import { ISubRouterPath, SubRouter } from '../../app/routes/subRouter';
import { URL_FILMS } from '../../model';
import { FilmList } from './filmList';
import { FilmsRecord } from './filmRecord';

const list: ISubRouterPath = { url: URL_FILMS.list, renderer: makeRenderPageComponent(FilmList) };
const record: ISubRouterPath = { url: URL_FILMS.record, renderer: () => <FilmsRecord /> };

export const FilmsSubRouter = SubRouter({ list, record })