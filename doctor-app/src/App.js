// doctor-app/src/App.js
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as RNLocalize from "react-native-localize";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./screens/Welcome";
import DoctorsList from "./screens/DoctorsList";
import PatientDetails from "./screens/PatientDetails";
import Consultation from "./screens/Consultation";

const Stack = createStackNavigator();

export default function App() {
  const [locale, setLocale] = useState("en-US"); // default locale

  useEffect(() => {
    // Only run on supported native platforms (iOS/Android)
    if (Platform.OS === "ios" || Platform.OS === "android") {
      const locales = RNLocalize.getLocales();
      if (locales && locales.length > 0) {
        setLocale(locales[0].languageTag); // e.g., "en-US"
        console.log("Detected locale:", locales[0].languageTag);
      }
    }
  }, []);

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
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: `Welcome (${locale})` }}
        />
        <Stack.Screen name="Doctors" component={DoctorsList} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
        <Stack.Screen name="Consultation" component={Consultation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
