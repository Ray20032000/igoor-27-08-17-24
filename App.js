import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./telas/Home";
import Especies from "./telas/Especies";
import Leeknow from "./telas/Leeknow";
import Galeria from "./telas/Galeria";
import Curiosidades from "./telas/Curiosidades";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Especies" component={Especies}/>
          <Stack.Screen name="Leeknow" component={Leeknow}/>
          <Stack.Screen name="Galeria" component={Galeria}/>
          <Stack.Screen name="Curiosidades" component={Curiosidades}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}