import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Appointments from "./pages/appointments";
import ClinicInfo from "./pages/clinicinfo";
import Doctors from "./pages/doctors";
import Patients from "./pages/patients";
import Schedule from "./pages/schedule";
import Staff from "./pages/staff";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/staff" element={<Staff />} />

        <Route path="/patients" element={<Patients />} />

        <Route path="/schedule" element={<Schedule />} />
        <Route path="/clinic-info" element={<ClinicInfo />} />

        <Route path="*" element={<Navigate to="/Dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
