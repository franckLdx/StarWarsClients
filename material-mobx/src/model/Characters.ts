export interface ICharacter {
  id: string;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string,
  movies: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
}

export const sortByName = (characters: ICharacter[]): ICharacter[] =>
  characters.sort((c1, c2) => c1!.name < c2!.name ? -1 : 1);
