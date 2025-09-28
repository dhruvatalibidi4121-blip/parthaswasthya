import * as Localization from "react-native-localize";
import I18n from "i18n-js";

const en = {
  app_title: "Parthaswasthya",

  // Welcome
  welcome: "Welcome, Doctor!",
  free_services: "Free Services",
  free_1: "Free tele-consultation with government doctors",
  free_2: "Prescription via WhatsApp",
  free_3: "IVR support for keypad phones",
  toll_free: "Toll-free Helpline",
  call_now: "Call Now",
  view_doctors: "View Doctors",
  patient_details: "Patient Details",

  // Doctors
  doctor_list: "Doctors List",
  timings: "Timings: Morning 10:00–12:00 | Evening 5:00–7:00",

  // Patient details
  name: "Full Name",
  age: "Age",
  contact: "Contact Number",
  aadhaar: "Aadhaar Number",
  save_choose: "Save & Choose Doctor",
  missing_info: "Please fill all fields",
  missing_title: "Missing info",

  // Consultation
  consultation_with: "Consultation with",
  video_call: "Video Call",
  messages: "Messages",
  send_rx: "Send Rx via WhatsApp",
  type_message: "Type message to doctor...",

  // Prescription
  prescription_for: "Prescription for",
  aadhaar: "Aadhaar",
  doctor: "Doctor",
  diagnosis: "Diagnosis",
  medicines: "Medicines",
  medicine_1: "1) Syrup XYZ - 5ml twice daily",
  medicine_2: "2) Tablet ABC - 1 at night",

};

const kn = {
  app_title: "ಪಾರ್ಥಸ್ವಾಸ್ಥ್ಯ",

  // Welcome
  welcome: "ಸ್ವಾಗತ, ವೈದ್ಯರೇ!",
  free_services: "ಉಚಿತ ಸೇವೆಗಳು",
  free_1: "ಸರ್ಕಾರಿ ವೈದ್ಯರೊಂದಿಗೆ ಉಚಿತ ಟೆಲಿ-ಸಮಾಲೋಚನೆ",
  free_2: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್",
  free_3: "ಕೀಪ್ಯಾಡ್ ಫೋನ್‌ಗಳಿಗೆ IVR ಸಹಾಯ",
  toll_free: "ಟೋಲ್-ಫ್ರೀ ಸಹಾಯವಾಣಿ",
  call_now: "ಈಗ ಕರೆ ಮಾಡಿ",
  view_doctors: "ವೈದ್ಯರನ್ನು ನೋಡಿ",
  patient_details: "ರೋಗಿಯ ವಿವರಗಳು",

  // Doctors
  doctor_list: "ವೈದ್ಯರ ಪಟ್ಟಿ",
  timings: "ಸಮಯ: ಬೆಳಗ್ಗೆ 10–12 | ಸಂಜೆ 5–7",

  // Patient details
  name: "ಪೂರ್ಣ ಹೆಸರು",
  age: "ವಯಸ್ಸು",
  contact: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ",
  aadhaar: "ಆಧಾರ್ ಸಂಖ್ಯೆ",
  save_choose: "ಉಳಿಸಿ ಮತ್ತು ವೈದ್ಯರನ್ನು ಆರಿಸಿ",
  missing_info: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ತುಂಬಿ",
  missing_title: "ಮಾಹಿತಿ ಕೊರತೆ",

  // Consultation
  consultation_with: "ಸಮಾಲೋಚನೆ",
  video_call: "ವೀಡಿಯೋ ಕರೆ",
  messages: "ಸಂದೇಶಗಳು",
  send_rx: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಕಳುಹಿಸಿ",
  type_message: "ವೈದ್ಯರಿಗೆ ಸಂದೇಶ ಬರೆಯಿರಿ...",

  // Prescription
  prescription_for: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್",
  aadhaar: "ಆಧಾರ್",
  doctor: "ವೈದ್ಯರು",
  diagnosis: "ರೋಗನಿರ್ಣಯ",
  medicines: "ಔಷಧಿಗಳು",
  medicine_1: "೧) ಸಿರಪ್ XYZ - ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ 5ml",
  medicine_2: "೨) ಗಳಿ ABC - ರಾತ್ರಿ ಒಂದು",
};

I18n.translations = { en, kn };

const fallback = { languageTag: "en" };
const { languageTag } =
  Localization.findBestAvailableLanguage(Object.keys(I18n.translations)) || fallback;

I18n.locale = languageTag;
I18n.fallbacks = true;

export default I18n;
