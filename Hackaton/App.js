import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthProvider, {AuthContext} from './src/contexts/auth';
import { Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import CardScreen from './src/screens/Card';
import HomeScreen from './src/screens/Home';
import Login from './src/screens/Login';
import MySplashScreen from './src/screens/SplashScreen';
import EventsScreen from './src/screens/Events';
import CertificateScreen from './src/screens/Certificate';
import StartScreen from './src/screens/StartScreen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';



function App() {
  const Stack = createNativeStackNavigator();

  return (<>
    <StatusBar style="light" />
    <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Splash" component={MySplashScreen} />
            <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Start" component={StartScreen} />
            <Stack.Screen options={{ headerShown: false, gestureEnabled: true }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false, }} name="Card" component={CardScreen} />
            <Stack.Screen options={{ headerShown: false, }} name="Events" component={EventsScreen} />
            <Stack.Screen options={{ headerShown: false, }} name="Certificate" component={CertificateScreen} />
          </Stack.Navigator>
    </NavigationContainer>
    <Toast />
  </>

  );
}


export default App;