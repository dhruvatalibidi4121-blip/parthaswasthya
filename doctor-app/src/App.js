// doctor-app/src/App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./screens/Welcome";
import DoctorsList from "./screens/DoctorsList";
import PatientDetails from "./screens/PatientDetails";
import Consultation from "./screens/Consultation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "#0B6E4F" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Doctors" component={DoctorsList} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
        <Stack.Screen name="Consultation" component={Consultation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
