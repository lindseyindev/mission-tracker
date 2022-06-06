
export interface Mission {
  id: string;
  description: string;
  name: string;
  twitter: string;
  website: string;
  wikipedia: string;
  manufacturers: Array<string>;
  launches: Array<string>;
}

export interface Data {
  missions: Array<string>;
}
