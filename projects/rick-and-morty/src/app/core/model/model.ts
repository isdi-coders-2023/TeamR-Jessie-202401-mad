export interface CharacterList {
  info: Info;
  results: Character[];
}

export interface EpisodeList {
  info: Info;
  results: Episode[];
}

export interface LocationList {
  info: Info;
  results: Location[];
}

export type AnyList = CharacterList | EpisodeList | LocationList;

export type Any = Character | Episode | Location;

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
