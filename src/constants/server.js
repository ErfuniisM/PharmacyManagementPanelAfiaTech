const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/appointments", (req, res) => {
  const appointments = [
    {
      national: 856341,
      patient: "Amina AI-s",
      doctor: "Dr.Ahmed",
      date: "2025-02-07",
      time: "10:30-11:00",
      status: "Completed",
      action: "View",
    },
    {
      national: 123451,
      patient: "Reza",
      doctor: "Dr.Mohammad",
      date: "2025-02-07",
      time: "08:30-09:00",
      status: "Completed",
      action: "View",
    },
    {
      national: 414259,
      patient: "Maryam",
      doctor: "Dr.Maryam",
      date: "2025-02-07",
      time: "10:30-11:00",
      status: "Pending",
      action: "View",
    },
    {
      national: 123451,
      patient: "Ali AI-s",
      doctor: "Dr.Ali",
      date: "2025-02-07",
      time: "20:30-21:00",
      status: "Pending",
      action: "View",
    },
  ];
  res.json(appointments);
});

app.get("/doctors", (req, res) => {
  const doctors = [
    {
      name: "Ali Rezaie",
      phone: "+966 50 123 4567",
      spec: "Cardioiogy",
      joinDate: "2025-02-07",
      status: "Active",
      action: "View",
    },
    {
      name: "Hassan hasanzadeh",
      phone: "+966 20 417 9988",
      spec: "Cardioiogy",
      joinDate: "2025-02-07",
      status: "Inactive",
      action: "View",
    },
    {
      name: "Erfan Saeedi",
      phone: "+966 12 412 5522",
      spec: "Cardioiogy",
      joinDate: "2025-02-07",
      status: "Active",
      action: "View",
    },
    {
      name: "Maryam ",
      phone: "+966 12 345 6789",
      spec: "Cardioiogy",
      joinDate: "2025-02-07",
      status: "Inactive",
      action: "View",
    },
  ];
  res.json(doctors);
});

app.get("/staff", (req, res) => {
  const staff = [
    {
      name: "Ali Rezaie",
      phone: "+966 50 123 4567",
      depart: "Cardioiogy",
      joinDate: "Wed,7 Feb 2025",
      status: "Active",
      action: "View",
    },
    {
      name: "Hassan hasanzadeh",
      phone: "+966 20 417 9988",
      depart: "Cardioiogy",
      joinDate: "Wed,7 Feb 2025",
      status: "Inactive",
      action: "View",
    },
    {
      name: "Erfan Saeedi",
      phone: "+966 12 412 5522",
      depart: "Cardioiogy",
      joinDate: "Wed,7 Feb 2025",
      status: "Active",
      action: "View",
    },
    {
      name: "Maryam ",
      phone: "+966 12 345 6789",
      depart: "Cardioiogy",
      joinDate: "Wed,7 Feb 2025",
      status: "Inactive",
      action: "View",
    },
  ];
  res.json(staff);
});

app.get("/patient", (req, res) => {
  const patient = [
    {
      name: "Ali Rezaie",
      phone: "+966 50 123 4567",
      national: "4597125",
      lastVisit: "Wed,7 Feb 2025",
      gender: "Male",
      ins: "Covered",
      action: "View",
    },
    {
      name: "Maryam",
      phone: "+966 47 856 1247",
      national: "45841236",
      lastVisit: "Wed,7 Feb 2025",
      gender: "Female",
      ins: "Not Covered",
      action: "View",
    },
    {
      name: "Hassan Moradi",
      phone: "+966 25 478 8899",
      national: "1246328",
      lastVisit: "Wed,7 Feb 2025",
      gender: "Male",
      ins: "Covered",
      action: "View",
    },
    {
      name: "Yousef Harbi",
      phone: "+966 22 471 4567",
      national: "4597125",
      lastVisit: "Wed,7 Feb 2025",
      gender: "Male",
      ins: "Not Covered",
      action: "View",
    },
  ];
  res.json(patient);
});

app.get("/phatmacies", (req, res) => {
  const phatmacies = [
    {
      pharmacyName: "Ali Pharmacy",
      phone: "+966 50 123 4567",
      branch: "Riyadh",
      wh: "27/7",
      action: "Remove",
    },
    {
      pharmacyName: "Erfan Pharmacy",
      phone: "+966 10 454 2210",
      branch: "Jeddah",
      wh: "8 AM - 11 PM",
      action: "Remove",
    },
    {
      pharmacyName: "Maryam Pharmacy",
      phone: "+966 10 414 1010",
      branch: "Median",
      wh: "27/7",
      action: "Remove",
    },
    {
      pharmacyName: "Saeed Pharmacy",
      phone: "+966 10 20 3040",
      branch: "Riyadh",
      wh: "27/7",
      action: "Remove",
    },
  ];
  res.json(phatmacies);
});

app.get("/dashboard", (req, res) => {
  const dashboard = [
    {
      national: 856341,
      patient: "Amina AI-s",
      doctor: "Dr.Mohammad",
      time: "20:30-21:00",
      phone: "+966 50 123 4567",
    },
    {
      national: 856341,
      patient: "Amina AI-s",
      doctor: "Dr.Mohammad",
      time: "20:30-21:00",
      phone: "+966 50 123 4567",
    },
    {
      national: 856341,
      patient: "Amina AI-s",
      doctor: "Hassan hasanzadeh",
      time: "09:30-12:00",
      phone: "+966 00 141 7711",
    },
  ];
  res.json(dashboard);
});
app.listen(port, () => {
  console.log("Backend started");
});
