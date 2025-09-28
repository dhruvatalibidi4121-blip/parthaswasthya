// doctor-app/src/screens/Welcome.js
import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Linking, SafeAreaView, ScrollView } from "react-native";
import I18n from "../i18n/translations";

const TOLL_FREE = "7892165354";

export default function Welcome({ navigation }) {
  const [lang, setLang] = useState(I18n.locale);

  const openDial = () => Linking.openURL(`tel:${TOLL_FREE}`);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "kn" : "en";
    I18n.locale = newLang;
    setLang(newLang); // re-render UI with new locale
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/god_of_medicine.jpg")}
        resizeMode="cover"
        style={styles.bg}
        imageStyle={{ opacity: 0.3 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>{I18n.t("app_title")}</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>{I18n.t("free_services")}</Text>
            <Text>• {I18n.t("free_1")}</Text>
            <Text>• {I18n.t("free_2")}</Text>
            <Text>• {I18n.t("free_3")}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>{I18n.t("toll_free")}</Text>
            <Text style={styles.phone}>{TOLL_FREE}</Text>
            <TouchableOpacity style={styles.callButton} onPress={openDial}>
              <Text style={styles.callButtonText}>{I18n.t("call_now")}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Doctors")}>
            <Text style={styles.navButtonText}>{I18n.t("view_doctors")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navButtonAlt} onPress={() => navigation.navigate("PatientDetails")}>
            <Text style={styles.navButtonText}>{I18n.t("patient_details")}</Text>
          </TouchableOpacity>

          {/* Language toggle */}
          <TouchableOpacity onPress={toggleLanguage}>
            <Text style={{ color: "#0B6E4F", marginTop: 20, fontWeight: "600" }}>
              {lang === "en" ? "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ" : "Switch to English"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 28, fontWeight: "700", color: "#063E2C", marginBottom: 16 },
  card: { width: "100%", backgroundColor: "rgba(255,255,255,0.9)", borderRadius: 10, padding: 16, marginBottom: 12 },
  cardTitle: { fontSize: 18, fontWeight: "600", marginBottom: 8, color: "#0B6E4F" },
  phone: { fontSize: 22, fontWeight: "700", color: "#0B6E4F", marginBottom: 8 },
  callButton: { backgroundColor: "#0B6E4F", padding: 10, borderRadius: 8, alignItems: "center" },
  callButtonText: { color: "#fff", fontWeight: "600" },
  navButton: { marginTop: 10, width: "100%", backgroundColor: "#1B9A6A", padding: 12, borderRadius: 10, alignItems: "center" },
  navButtonAlt: { marginTop: 8, width: "100%", backgroundColor: "#0B6E4F", padding: 12, borderRadius: 10, alignItems: "center" },
  navButtonText: { color: "#fff", fontWeight: "700" },
});
