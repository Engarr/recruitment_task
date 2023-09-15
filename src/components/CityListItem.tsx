import { useContext } from 'react';
import { CityType } from '@/Types/types';
import { WeatherIcon } from '@/components/WeatherIcon.tsx';
import { Button } from '@/components/ui/button.tsx';
import { TbHeart } from 'react-icons/tb';
import FavoritesContext from '@/store/favorites-context';

export const CityListItem = ({
  id,
  city,
  temperatureCelsius,
  description,
  units,
}: CityType) => {
  const ctx = useContext(FavoritesContext);
  const isFavorite = ctx.favArr.includes(id);
  const isCelsius = units === 'CELSIUS';
  const convertedTemperature = isCelsius
    ? temperatureCelsius + ' °C'
    : ((Number(temperatureCelsius) * 9) / 5 + 32).toFixed(0) + ' °F';
  const handleClickFavorite = (id: string) => {
    ctx.onToggle(id);
  };
  return (
    <div
      className={
        'flex gap-4 items-center p-4 border-b last-of-type:border-none'
      }>
      <WeatherIcon description={description} />
      <div className={'flex flex-col'}>
        <span>{city}</span>
        <small className={'text-sm text-gray-600 capitalize'}>
          {description}
        </small>
      </div>
      <strong className={'ml-auto'}>{convertedTemperature}</strong>

      <Button
        variant={isFavorite ? 'default' : 'outline'}
        size={'icon'}
        onClick={handleClickFavorite.bind(this, id)}>
        <TbHeart />
      </Button>
    </div>
  );
};
