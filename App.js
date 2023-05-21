import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostsScreen from './src/screens/PostsScreen';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'fontisto': require('./src/assets/fonts/Fontisto.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
      <StatusBar style="light" />
    </>
  );
}


