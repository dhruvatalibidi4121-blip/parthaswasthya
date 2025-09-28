// doctor-app/src/screens/DoctorsList.js
import React, { useEffect } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import I18n from "../i18n/translations";

const DOCTORS = [
  { id: "1", name: "Dr. Rakshit", degree: "MBBS", specialization: "General Medicine" },
  { id: "2", name: "Dr. Sneha", degree: "MBBS", specialization: "Gynaecology" },
  { id: "3", name: "Dr. Vijay", degree: "MBBS", specialization: "Orthopaedics" },
];

function DoctorCard({ doc, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(doc)}>
      <Text style={styles.name}>{doc.name}</Text>
      <Text style={styles.sub}>
        {doc.degree} • {doc.specialization}
      </Text>
      <Text style={styles.time}>{I18n.t("timings")}</Text>
    </TouchableOpacity>
  );
}

export default function DoctorsList({ navigation }) {
  useEffect(() => {
    // Set bilingual screen title
    navigation.setOptions({ title: I18n.t("doctor_list") });
  }, [navigation]);

  const handleSelect = (doc) => {
    navigation.navigate("Consultation", { doctor: doc });
  };

  return (
    <SafeAreaView style={styles.wrap}>
      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={DOCTORS}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <DoctorCard doc={item} onPress={handleSelect} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#0B6E4F",
  },
  name: { fontSize: 18, fontWeight: "700", color: "#0B6E4F" },
  sub: { fontSize: 14, color: "#333", marginTop: 6 },
  time: { fontSize: 13, color: "#666", marginTop: 8 },
});
