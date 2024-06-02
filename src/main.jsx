import React from "react"
import ReactDOM from "react-dom/client"
import AuthApiDataProvider from "./contextApi/auth/authContextApi.jsx"
import SystemInfoApiDataProvider from "./contextApi/systemInfo/systemInfoContextApi.jsx"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthApiDataProvider>
      <SystemInfoApiDataProvider>
        <App />
      </SystemInfoApiDataProvider>
    </AuthApiDataProvider>
  </React.StrictMode>
)
