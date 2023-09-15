import { FilterCityDataProps } from '@/Types/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterCityHandler = ({
  citiesData,
  searchValue,
  setFiteredCities ,
}: FilterCityDataProps) => {
  const filteredCities = citiesData.filter((city) => {
    const cityNameLowerCase = city.city.toLowerCase();
    const searchValueLowerCase = searchValue.toLowerCase();

    return cityNameLowerCase.includes(searchValueLowerCase);
  });
  if (searchValue === '') {
    setFiteredCities(citiesData);
  } else {
    setFiteredCities(filteredCities);
  }
};
