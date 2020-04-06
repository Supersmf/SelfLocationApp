import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { NAVIGATION_SCREENS, HIDDEN_TAB_SCREENS } from './Screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../common/colors';

const BottomTabNavigate = createBottomTabNavigator();
const MapNavigateStack = createStackNavigator();
const HistoryNavigateStack = createStackNavigator();

const getTabBarVisible = ({ state }) =>
  HIDDEN_TAB_SCREENS.some((name) => state?.routes[state?.index].name !== name);

const HistoryNavigateScreen = () => (
  <HistoryNavigateStack.Navigator>
    <HistoryNavigateStack.Screen
      name={NAVIGATION_SCREENS.HISTORY_SCREEN}
      component={HistoryScreen}
      options={{
        title: 'History Screen',
        headerTitleStyle: { left: '80%' },
      }}
    />
    <HistoryNavigateStack.Screen
      name={NAVIGATION_SCREENS.HISTORY_MAP_SCREEN}
      component={MapScreen}
      options={{ title: 'History Map Screen' }}
    />
  </HistoryNavigateStack.Navigator>
);

const MapNavigateStackScreen = () => (
  <MapNavigateStack.Navigator>
    <MapNavigateStack.Screen
      name={NAVIGATION_SCREENS.MAP_SCREEN}
      component={MapScreen}
      options={{
        title: 'Map Screen',
        headerTitleStyle: { left: '115%' },
      }}
    />
  </MapNavigateStack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <BottomTabNavigate.Navigator
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <Icon
            name={
              name === NAVIGATION_SCREENS.MAP_SCREEN
                ? 'map-marked-alt'
                : 'history'
            }
            size={focused ? size * 1.1 : size}
            color={color}
          />
        ),
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
      }}>
      <BottomTabNavigate.Screen
        name={NAVIGATION_SCREENS.MAP_SCREEN}
        component={MapNavigateStackScreen}
        options={{
          title: 'Location',
        }}
      />
      <BottomTabNavigate.Screen
        name={NAVIGATION_SCREENS.HISTORY_SCREEN}
        component={HistoryNavigateScreen}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          title: 'History',
        })}
      />
    </BottomTabNavigate.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
