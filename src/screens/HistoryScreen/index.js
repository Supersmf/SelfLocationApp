import React, { useState, useEffect, useCallback } from 'react';
import HistoryScreen from './HistoryScreen';
import { fetchLocations } from '../../services/firebase/thunk';
import { ITEMS_PER_PAGE } from '../../common/constants';

const HistoryScreenContainer = ({ navigation: { navigate } }) => {
  const [locations, setLocations] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const getLocations = useCallback(async () => {
    const newLocations = await fetchLocations(
      locations[locations.length - 1],
      () => setIsLoadMore(false),
    );
    setLocations([...locations.concat(newLocations)]);
  }, [locations]);

  useEffect(() => {
    getLocations();
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!(locations.length % ITEMS_PER_PAGE)) {
      setIsLoadMore(true);
      getLocations();
    }
  }, []);

  return (
    <HistoryScreen
      locations={locations}
      navigate={navigate}
      handleLoadMore={handleLoadMore}
      isLoadMore={isLoadMore}
    />
  );
};

export default HistoryScreenContainer;
