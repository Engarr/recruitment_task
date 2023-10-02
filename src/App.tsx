import { useState, useContext, useMemo } from 'react';
import { Input } from '@/components/ui/input.tsx';
import { Header } from '@/components/ui/Header.tsx';
import { CityListCard } from '@/components/CityListCard.tsx';
import { TemperatureUnitSelect } from '@/components/TemperatureUnitSelect.tsx';
import { CityType } from './Types/types';
import { UseQueryResult, useQuery } from 'react-query';
import { QUERY_KEY_WEATHER, fetchWeatherData } from './lib/weather';
import FavoritesContext from './store/favorites-context';

export type TemperatureUnit = 'CELSIUS' | 'FAHRENHEIT';
export type TWeatherDescription = 'cloudy' | 'sunny' | 'stormy';
export type TDataItem = {
  id: string;
  city: string;
  temperatureCelsius: number;
  description: TWeatherDescription;
};

function App() {
  const ctx = useContext(FavoritesContext);
  const [units, setUnits] = useState<TemperatureUnit>('CELSIUS');
  const [searchValue, setSearchValue] = useState('');
  const {
    data: citiesData,
    isLoading,
    isError,
    isSuccess,
  }: UseQueryResult<CityType[]> = useQuery(QUERY_KEY_WEATHER, fetchWeatherData);

  const fiteredCities = isSuccess
    ? citiesData.filter((item) =>
        item.city.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  const favoriteCities = useMemo(
    () =>
      isSuccess
        ? citiesData.filter((city) => ctx.favArr.includes(city.id))
        : [],
    [citiesData, ctx.favArr, isSuccess]
  );


  return (
    <>
      <Header />
      <div className={'container max-w-lg mx-auto my-4 flex flex-col gap-4'}>
        <div className={'flex justify-between gap-4'}>
          <Input
            className={'flex-grow'}
            placeholder={'Search city...'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(event.target.value);
            }}
          />
          <TemperatureUnitSelect
            value={units}
            onChange={(_val: TemperatureUnit) => {
              setUnits(_val);
            }}
          />
        </div>

        <CityListCard
          title={'Weather in cities'}
          cytiesData={fiteredCities}
          isLoading={isLoading}
          units={units}
          isError={isError}
        />
        {favoriteCities?.length > 0 && (
          <CityListCard
            title={'Favorites'}
            cytiesData={favoriteCities}
            units={units}
          />
        )}
      </div>
    </>
  );
}

export default App;
