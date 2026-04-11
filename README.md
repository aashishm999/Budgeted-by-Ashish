<div align="center">
<img width="1200" height="475" alt="Budgeted Banner" src="App SS.png" />

# 💰 Budgeted
**The professional way to track expenses, split bills, and manage shared budgets.**
</div>

## 🌟 Overview
**Budgeted** is a modern, full-stack financial management application. It provides a centralized dashboard to monitor all your group activities, recent expenses, and budget alerts at a glance.

<div align="center">
  <img src="./screenshots/image_cd84a1.png" alt="Budgeted Dashboard Overview" width="800px" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);" />
  <p><i>The sleek, dark-mode Dashboard showing real-time expense tracking and activity.</i></p>
</div>

## ✨ Key Features
* **Real-time Collaboration**: Manage shared expenses within groups (Household, Trips, Personal) with instant updates across all members.
* **AI Financial Assistant**: Integration with Google Gemini to provide spending analysis, budget outlooks, and personalized saving suggestions.
* **Budget Management**: Set weekly, monthly, or total budget limits and receive visual alerts when you're nearing your cap.
* **Detailed Analytics**: Interactive charts showing spending trends and category distributions using Recharts.
* **Secure Authentication**: Easy and secure sign-in via Google Authentication.
* **Dark Mode Support**: Fully responsive UI with a seamless dark and light mode experience.

## 🛠️ Technical Stack
* **Frontend**: React 19, TypeScript, Vite
* **Styling**: Tailwind CSS
* **Backend/Database**: Firebase Firestore
* **Authentication**: Firebase Auth
* **AI**: Google Generative AI (Gemini)
* **Charts**: Recharts
* **Animations**: Framer Motion

## 🚀 Getting Started

### Prerequisites
* Node.js (Latest LTS version recommended)
* A Firebase project
* A Google AI Studio (Gemini) API Key

### Installation
1.  **Clone the repository**:
    ```bash
    git clone <your-repo-url>
    cd budgeted-by-ashish
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env.local` file in the root directory and add your API keys:
    ```env
    VITE_GEMINI_API_KEY=your_gemini_api_key_here
    ```
    *Note: Ensure your Firebase configuration is correctly placed in `src/firebase-applet-config.json`.*

4.  **Run Locally**:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

## 📁 Project Structure
* `src/components`: UI components (Dashboard, GroupView, Modals)
* `src/firebase.ts`: Firebase initialization and auth methods
* `src/utils`: Helper functions for currency formatting and error handling
* `src/types.ts`: TypeScript interfaces and type definitions

## 📄 License
This project is licensed under the Apache-2.0 License.
