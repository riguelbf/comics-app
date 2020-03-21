const apiKeyStored = localStorage.getItem('COMICS_API_KEY');

export const BASE_URL_MARVEL = 'https://gateway.marvel.com/v1/public';

export const API_KEY = apiKeyStored || process.env.REACT_APP_API_KEY || process.env.API_KEY;

export const HASH = '30bae93586c144ea5c27a2a91ebe3333';

export const TIME_STAMP = 1;
