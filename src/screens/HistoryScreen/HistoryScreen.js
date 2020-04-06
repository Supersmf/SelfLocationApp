import React from 'react';
import { FlatList } from 'react-native';
import LocationListItem from '../../components/LocationListItem';
import Divider from '../../components/Divider';
import { NAVIGATION_SCREENS } from '../..//navigation/Screens';
import Spinner from 'react-native-spinkit';
import styles from './styles';
import colors from '../../common/colors';

const HistoryScreen = ({ locations, navigate, handleLoadMore, isLoadMore }) => (
  <FlatList
    data={locations}
    style={styles.list}
    keyExtractor={({ id }) => id}
    ItemSeparatorComponent={Divider}
    onEndReached={handleLoadMore}
    ListEmptyComponent={() => (
      <Spinner
        style={styles.emptySpinner}
        color={colors.primary}
        size={60}
        type={'9CubeGrid'}
      />
    )}
    renderItem={({ item: location }) => (
      <LocationListItem
        key={location.id}
        location={location}
        onPress={() =>
          navigate(NAVIGATION_SCREENS.HISTORY_MAP_SCREEN, location)
        }
      />
    )}
    ListFooterComponent={
      isLoadMore && (
        <Spinner
          style={styles.loadMoreSpinner}
          color={colors.secondary}
          size={50}
          type={'ThreeBounce'}
        />
      )
    }
  />
);

export default HistoryScreen;
