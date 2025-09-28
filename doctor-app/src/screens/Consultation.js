// doctor-app/src/screens/Consultation.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Alert, Linking, SafeAreaView } from "react-native";
import I18n from "../i18n/translations";

export default function Consultation({ route, navigation }) {
  const doctor = route.params?.doctor || { name: "Unknown Doctor" };
  const patient = route.params?.patient || { name: "Anonymous", contact: "" };

  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Set bilingual screen title
    navigation.setOptions({ title: I18n.t("consultation") });
  }, [navigation]);

  const sendMessageLocal = () => {
    if (!message.trim()) return;
    const newMsg = {
      id: Date.now().toString(),
      from: patient.name || "Patient",
      text: message.trim(),
      time: new Date().toLocaleTimeString(),
    };
    setChat((c) => [newMsg, ...c]);
    setMessage("");
  };

  const startVideoCall = () => {
    Alert.alert(I18n.t("video_call"), `${doctor.name} (${doctor.specialization || ""})`);
  };

  const sendPrescriptionWhatsApp = (diagnosis = "General checkup") => {
  const messageText = 
    `${I18n.t("prescription_for")} ${patient.name || "Patient"} (${I18n.t("aadhaar")}: ${
      patient.aadhaar || "N/A"
    }):\n${I18n.t("doctor")}: ${doctor.name}\n${I18n.t("diagnosis")}: ${diagnosis}\n${I18n.t("medicines")}:\n${I18n.t("medicine_1")}\n${I18n.t("medicine_2")}\n\n- ${I18n.t("app_title")}`;

  const encoded = encodeURIComponent(messageText);
  const url = `https://wa.me/?text=${encoded}`;

  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert("WhatsApp", "Unable to open WhatsApp on this device.");
    }
  });
};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {I18n.t("consultation_with")} {doctor.name}
        </Text>
        <Text style={styles.headerSub}>
          {doctor.degree || ""} • {doctor.specialization || ""}
        </Text>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionBtn} onPress={startVideoCall}>
          <Text style={styles.actionText}>📹 {I18n.t("video_call")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => Alert.alert(I18n.t("messages"), "Chat demo enabled")}
        >
          <Text style={styles.actionText}>💬 {I18n.t("messages")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn} onPress={() => sendPrescriptionWhatsApp()}>
          <Text style={styles.actionText}>📤 {I18n.t("send_rx")}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chatWrap}>
        <Text style={{ fontWeight: "700", marginBottom: 8 }}>{I18n.t("messages")} (demo)</Text>
        <FlatList
          data={chat}
          inverted
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.msg,
                {
                  alignSelf:
                    item.from === (patient.name || "Patient")
                      ? "flex-end"
                      : "flex-start",
                  backgroundColor:
                    item.from === (patient.name || "Patient")
                      ? "#D1F2E8"
                      : "#F1F1F1",
                },
              ]}
            >
              <Text style={{ fontWeight: "700" }}>{item.from}</Text>
              <Text>{item.text}</Text>
              <Text style={{ fontSize: 10, color: "#666", marginTop: 6 }}>
                {item.time}
              </Text>
            </View>
          )}
        />
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder={I18n.t("type_message")}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessageLocal}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F6FFF9",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#0B6E4F" },
  headerSub: { fontSize: 13, color: "#666", marginTop: 4 },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    backgroundColor: "#fff",
  },
  actionBtn: { backgroundColor: "#0B6E4F", padding: 10, borderRadius: 8 },
  actionText: { color: "#fff", fontWeight: "700" },

  chatWrap: { flex: 1, padding: 12, backgroundColor: "#FAFFFC" },
  msg: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: "80%",
  },

  inputRow: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  sendBtn: {
    backgroundColor: "#0B6E4F",
    paddingHorizontal: 14,
    justifyContent: "center",
    borderRadius: 8,
  },
});
