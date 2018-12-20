import { URL_CHARACTERS } from '../router';
import { createSubRouter } from '../router/subRouter';
import Character from './character';
import CharactersList from './list';

export default createSubRouter({
  ListComponent: CharactersList,
  RecordComponent: Character,
  url: URL_CHARACTERS,
});
