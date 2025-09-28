// doctor-app/src/screens/PatientDetails.js
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ScrollView } from "react-native";
import I18n from "../i18n/translations";

export default function PatientDetails({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  const saveAndProceed = () => {
    if (!name || !age || !contact || !aadhaar) {
      Alert.alert(I18n.t("missing_title"), I18n.t("missing_info"));
      return;
    }
    const patient = { name, age, contact, aadhaar };
    navigation.navigate("Doctors", { patient });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{I18n.t("patient_details")}</Text>

        <Text style={styles.label}>{I18n.t("name")}</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="e.g., Ramesh Kumar"
        />

        <Text style={styles.label}>{I18n.t("age")}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="e.g., 35"
        />

        <Text style={styles.label}>{I18n.t("contact")}</Text>
        <TextInput
          keyboardType="phone-pad"
          style={styles.input}
          value={contact}
          onChangeText={setContact}
          placeholder="10-digit mobile"
        />

        <Text style={styles.label}>{I18n.t("aadhaar")}</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={aadhaar}
          onChangeText={setAadhaar}
          placeholder="xxxx xxxx xxxx"
        />

        <TouchableOpacity style={styles.button} onPress={saveAndProceed}>
          <Text style={styles.buttonText}>{I18n.t("save_choose")}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "700", color: "#0B6E4F", marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", marginTop: 12, color: "#333" },
  input: {
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 24,
    backgroundColor: "#0B6E4F",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});
