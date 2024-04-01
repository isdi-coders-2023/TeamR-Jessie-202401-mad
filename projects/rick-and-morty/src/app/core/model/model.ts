export interface CharacterModel {
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

export interface LocationsModel {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

export interface EpisodesModel {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface InfoModel {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
