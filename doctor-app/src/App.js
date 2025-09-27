import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text>👩‍⚕️ Welcome, Doctor!</Text>
      <Button title="View Patients" onPress={() => navigation.navigate("Patients")} />
    </View>
  );
}

function PatientsScreen() {
  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center" }}>
      <Text>📋 Patient List (coming soon)</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Patients" component={PatientsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
