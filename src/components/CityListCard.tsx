import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { CityListItem } from '@/components/CityListItem.tsx';
import { CityType } from '@/Types/types';

type CityListCardProps = {
  title: string;
  cytiesData: CityType[];
  isLoading?: boolean;
  isError?: boolean;
  units: string;
};

export const CityListCard = ({
  title,
  cytiesData,
  isLoading,
  isError,
  units,
}: CityListCardProps) => {
  const content = isLoading ? (
    <p className={'text-center text-ml'}>Loading...</p>
  ) : cytiesData?.length > 0 ? (
    cytiesData.map((city) => (
      <CityListItem
        key={city.id}
        city={city.city}
        description={city.description}
        temperatureCelsius={city.temperatureCelsius}
        id={city.id}
        units={units}
      />
    ))
  ) : (
    <p className={'text-center text-ml '}>
      No cities found with this search criteria
    </p>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {isError ? (
        <p className={'text-center text-ml '}>Data download error</p>
      ) : (
        <CardContent>{content}</CardContent>
      )}
    </Card>
  );
};
