export interface Bush {
  [key: string]: string;
}

export interface Contact {
  id: number;
  name: string;
  lastname: string;
  address: string;
  city: string;
  country: string;
  email: Bush;
  number: Bush;
}
