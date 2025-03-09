# VibeFlow

## Overview
VibeFlow is a web application built using **React** and **Ant Design (antd)** for styling. The application leverages **Zustand** as the state management library and features a simple navigation system to accelerate development.

## Getting Started
To start the project, follow these steps:

0. **Make sure that api is ran**

1. **Install dependencies**  
   ```sh
   pnpm install
   ```
2. **Start the development server**  
   ```sh
   pnpm dev
   ```

## Project Structure
The project is organized into several key directories:

```
src/  
├── api/  
│   ├── auth/          # Authentication-related API services  
│   ├── songs/         # Song-related API services  
│   └── http.service.ts # Configures Axios for HTTP requests  
│  
├── assets/            # Static assets such as images  
│  
├── components/        # Reusable UI components  
│   ├── button/  
│   ├── favorities/  
│   ├── form/  
│   ├── headers/  
│   ├── layouts/  
│   │   ├── auth-layout/  # Layout for authentication pages  
│   │   └── main-layout/  # Main layout for the application  
│   ├── search/  
│   └── smart-table/  
│  
├── config/  
│   ├── index.ts       # Main configuration file  
│  
├── navigation/  
│   └── index.tsx      # Main navigation component  
│  
├── pages/  
│   ├── auth/          # Authentication pages  
│   │   └── sign-in/   # Sign-in page  
│   ├── dashboard/     # Dashboard page  
│   └── loading/       # Loading page  
│  
├── services/  
│   ├── auth.service.ts # Authentication service logic  
│   └── app.service.ts  # Application initialization logic  
│  
├── shared/  
│   ├── helpers/       # Helper functions  
│   ├── hooks/         # Custom hooks  
│   └── state/         # Zustand state management files  
│  
├── typing/            # TypeScript type definitions  
│  
├── App.tsx            # Main application component  
└── main.tsx           # Entry point of the application  
```

## Technologies Used
- **React** – A JavaScript library for building user interfaces  
- **Ant Design (antd)** – A comprehensive UI component library for React  
- **Zustand** – A small, fast, and scalable state management library  

## Navigation
The navigation system is designed to be simple and efficient to speed up development. It uses **Zustand** for state management and conditionally renders components based on the current navigation state.

### Navigation Setup
The navigation setup is located in `navigation/index.tsx`. It defines the main navigation components and their corresponding states:

- **Loading** – Displays the loading page  
- **Auth** – Displays the authentication layout with the sign-in page  
- **Dashboard** – Displays the main layout with the dashboard page  

## State Management
The application uses **Zustand** for state management. Zustand is a small, fast, and scalable state management library that simplifies state handling in React applications.


## Conclusion
This documentation provides a high-level overview of the **VibeFlow** project structure, technologies used, and key components.  