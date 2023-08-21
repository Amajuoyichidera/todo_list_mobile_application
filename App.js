import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Todo from './screens/Todo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="signin" component={SignIn} options={{headerShown: false}} />
        <Stack.Screen name="signup" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="todo" component={Todo} options={{headerShown: false}} />
      </Stack.Navigator>
     
      
       
      <StatusBar style="auto" />
   </NavigationContainer>
  );
}

