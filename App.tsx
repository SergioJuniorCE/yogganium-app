import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { About, HomeScreen, NetherCoordsCalculator } from './screens';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="NetherCoordsCalculator" component={NetherCoordsCalculator}
          options={{
            title: 'Nether Coords Calculator',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}