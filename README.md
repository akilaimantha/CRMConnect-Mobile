# CRMConnect-Mobile

Mobile CRM application for **SLIC LIFE** sales representatives, built with **React Native (Expo)** and **React Navigation**.

## Features

- **Login** – Email/password validation with demo credentials
- **Dashboard** – Metrics, charts, recent sales activities
- **Customers** – Searchable list and detailed profiles with interaction history
- **Tasks** – Add, complete, and delete tasks with priority and deadlines

## SLIC LIFE Theme

- Primary teal: `#007979`
- Accent yellow: `#FFCC00`
- Custom SLIC LIFE logo component
- Card-based UI matching the CRMConnect web panel

## Project Structure

```
CRMConnect-Mobile/
├── assets/
├── components/       # CustomerCard, TaskCard, DashboardCard, SlicLogo
├── context/          # App-wide state (useState)
├── data/             # Mock customers, tasks, activities
├── navigation/       # AppNavigator (Stack)
├── screens/          # All app screens
├── styles/           # GlobalStyles (colors, spacing)
├── App.js
└── package.json
```

## Demo Login

| Field    | Value            |
|----------|------------------|
| Email    | `admin@slic.lk`  |
| Password | `admin123`       |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo Go](https://expo.dev/go) on your phone (optional, for device testing)

### Install & Run

```bash
npm install
npm start
```

Then:

- Press `a` for Android emulator
- Press `w` for web browser
- Scan the QR code with **Expo Go** on your device

### Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm start`    | Start Expo dev server    |
| `npm run android` | Open on Android       |
| `npm run ios`  | Open on iOS (macOS only) |
| `npm run web`  | Run in browser           |

## Tech Stack

- React Native + Expo SDK 52
- React Navigation (Native Stack)
- react-native-chart-kit
- @expo/vector-icons
- useState for local state (no backend)

## Navigation Flow

```
Login → Dashboard → Customers → Customer Details
                  → Tasks → Add Task
```

---

**Sri Lanka Insurance Corporation** – CRMConnect Sales Panel (Mobile)
