import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import AdminPanel from "./pages/adminPanel"

// const AddPackage = React.lazy(() => import("./pages/addPackage"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
