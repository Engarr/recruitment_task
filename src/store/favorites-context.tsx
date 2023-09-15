import { createContext, useState, ReactNode } from 'react';

const FavoritesContext = createContext<{
  favArr: string[];
  onToggle: (id: string) => void;
}>({
  favArr: [],
  onToggle: () => {},
});

export const FavoritesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleClickFavorite = (id: string) => {
    const idExists = favorites.some((oldId) => oldId === id);
    if (idExists) {
      setFavorites((prevIds) => prevIds.filter((oldId) => oldId !== id));
    } else {
      setFavorites((prevIds) => [...prevIds, id]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favArr: favorites, onToggle: handleClickFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
