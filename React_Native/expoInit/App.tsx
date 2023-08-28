import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';
import { useState } from 'react';
import { MoviesNowContext, MoviesNowContextProps } from './src/context/moviesContext';


export default function App() {

  const [moviesNow, setMoviesNow] = useState<any>([])

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <MoviesNowContextProps.Provider value={[moviesNow, setMoviesNow]}>
        <MoviesNowContext.Provider value={moviesNow}>
          <Routes />
        </MoviesNowContext.Provider>
      </MoviesNowContextProps.Provider>
    </NavigationContainer>
  );
}