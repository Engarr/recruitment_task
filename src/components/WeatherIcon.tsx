import { IconType } from 'react-icons';
import {
  TiWeatherPartlySunny,
  TiWeatherStormy,
  TiWeatherSunny,
} from 'react-icons/ti';

interface PropsType {
  description: string;
}

const weatherIcons: Record<string, IconType> = {
  stormy: TiWeatherStormy,
  cloudy: TiWeatherPartlySunny,
  sunny: TiWeatherSunny,
};

export const WeatherIcon = ({ description }: PropsType) => {
  const Icon = weatherIcons[description] || TiWeatherSunny;

  return <Icon size={'2rem'} />;
};
