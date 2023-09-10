import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ClientesScreen from './screens/ClientesScreen';
import OrcamentoScreen from "./screens/OrcamentoScreen";
import NovoClienteScreen from "./screens/NovoClienteScreen";
//import Database from "./models/Database";

const Stack = createStackNavigator();

const App = () => {
   // useEffect(() => {
   //     // Inicialize o banco de dados quando o aplicativo iniciar
   //     Database.init();
   // }, []);

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Clientes" component={ClientesScreen} />
            <Stack.Screen name="Orcamento" component={OrcamentoScreen} />
            <Stack.Screen name="NovoCliente" component={NovoClienteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
