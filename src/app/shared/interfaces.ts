export interface PeriodicElement {
  name: string;
  season: number;
  network: arrayNetwork;
  premiere: string;
  genre: arrayGenre
}

export interface arrayNetwork {
  name: string
}

export interface arrayGenre {
  name: string
}
