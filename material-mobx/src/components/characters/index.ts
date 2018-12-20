import { URL_CHARACTERS } from '../router';
import { createSubRouter } from '../router/subRouter';
import Character from './Character';
import CharactersList from './list';

export default createSubRouter({
  ListComponent: CharactersList,
  RecordComponent: Character,
  url: URL_CHARACTERS,
});
