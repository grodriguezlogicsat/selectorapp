export interface Country {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion:    Subregion;
  languages:    { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Region[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface SmallCountry{
  name: string;
  cca3: string;
  borders: string[];
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export interface Currencies {
  EUR?: TartuGecko;
  PLN?: TartuGecko;
  NOK?: TartuGecko;
  ALL?: TartuGecko;
  SEK?: TartuGecko;
  MKD?: TartuGecko;
  GBP?: TartuGecko;
  JEP?: TartuGecko;
  DKK?: TartuGecko;
  GIP?: TartuGecko;
  RUB?: TartuGecko;
  RSD?: TartuGecko;
  FOK?: TartuGecko;
  ISK?: TartuGecko;
  BAM?: BAM;
  MDL?: TartuGecko;
  BGN?: TartuGecko;
  CZK?: TartuGecko;
  RON?: TartuGecko;
  BYN?: TartuGecko;
  HUF?: TartuGecko;
  IMP?: TartuGecko;
  UAH?: TartuGecko;
  CHF?: TartuGecko;
  GGP?: TartuGecko;
}

export interface TartuGecko {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
