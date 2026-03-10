import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Appointments from "./pages/appointments";
import ClinicInfo from "./pages/clinicinfo";
import Doctors from "./pages/doctors";
import Patients from "./pages/patients";
import Phatmacies from "./pages/phatmacies";
import Schedule from "./pages/schedule";
import Staff from "./pages/staff";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/ptients" element={<Patients />} />
        <Route path="/pharmacies" element={<Phatmacies />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/clinic-info" element={<ClinicInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
