import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { About, HomeScreen, NetherCoordsCalculator } from './screens';
import { 
  MD3DarkTheme as DefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';

const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  // colors: {
  //   primary: 'black',
  //   secondary: 'white',
  // },
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="NetherCoordsCalculator" component={NetherCoordsCalculator}
            options={{
              title: 'Nether Coords Calculator',
            }}
          />
        </Drawer.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}