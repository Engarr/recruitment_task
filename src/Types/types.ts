import { Dispatch, SetStateAction } from 'react';

export type CityType = {
  id: string;
  city: string;
  temperatureCelsius: string;
  description: string;
  units: string;
};
export type FilterCityDataProps = {
  citiesData: CityType[];
  searchValue: string;
  setFiteredCities : Dispatch<SetStateAction<CityType[]>>;
};
