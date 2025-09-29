# 🏥 MedConnect Mobile Health Application
MedConnect is a single-file, responsive web application designed to simulate a modern, bilingual doctor consultation platform. It allows users to browse a list of specialists, submit patient details, and engage in real-time chat or simulated video calls to receive instant, translated prescriptions.

# ✨ Features
This application is built as a Single Page Application (SPA) using HTML, Tailwind CSS, and Vanilla JavaScript, ensuring a fast, mobile-first experience.

- Bilingual Support (English / ಕನ್ನಡ - KN): A global toggle button allows users to switch the entire interface, including all text and prescriptions, between English and Kannada instantly.

- Multi-View Navigation: Four main pages handle the user journey:

1. Welcome Screen: Features a medical aesthetic, a list of free services, and a prominent toll-free number.

2. Doctor List: Displays a static list of doctors with their degrees, specializations, and fixed timing slots.

3. Patient Details Form: Collects essential information including Name, Age, Contact details, and Aadhaar card number.

4. Consultation Center: Offers options for Message Chat or Video Call.

- Simulated Real-time Consultation:

* Message Chat: Allows the patient to input symptoms. The simulated doctor provides a diagnosis and a bilingual prescription based on keywords (fever, headache, stomach, etc.).

* Video Call: Initiates a camera feed request and, upon "ending" the call, instantly delivers a bilingual prescription and a confirmation that the formal version has been sent via WhatsApp to the patient's registered number.

- Responsive Design: Styled using Tailwind CSS to ensure a beautiful and functional experience on any mobile device or screen size.

# 🚀 How to Run (Local Setup)
MedConnect is a single, self-contained HTML file. Follow these steps to set up the project and run the application locally on your computer:

1. Clone the Repository:
Open your terminal or command prompt and use Git to clone the project repository:
```
git clone https://github.com/dhruvatalibidi4121-blip/parthaswasthya.git
```

2. Navigate to the Project Directory:
Change into the project folder, which is named parthaswasthya as per the intended structure:
```
cd parthaswasthya
```

3. Launch the Application:
Locate the ```index.html``` file within the parthaswasthya directory. Double-click the file to open the application instantly in your default web browser.

# 🛠️ Technology Stack
- HTML5: Structure and content.

- Tailwind CSS: Utility-first styling for fast, responsive design.

- Vanilla JavaScript: Handles all application logic, state management (SPA navigation, language switching), and simulated API interactions.

- Lucide Icons: Used for clean, modern interface iconography.