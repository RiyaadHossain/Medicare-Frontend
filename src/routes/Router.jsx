import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import MyAccount from "../dashboard/users-account/MyAccount";
import Dashboard from "../dashboard/doctors-account/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { USER_ROLE } from "../enums/userRole";

export default function Router() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
    { path: "/doctors", element: <Doctors /> },
    { path: "/doctors/:id", element: <DoctorDetails /> },
    { path: "/register", element: <Signup /> },
    { path: "/login", element: <Login /> },
    {
      path: "patient/profile/me",
      element: (
        <ProtectedRoute allowedRoles={[USER_ROLE.patient]}>
          <MyAccount />
        </ProtectedRoute>
      ),
    },
    {
      path: "doctor/profile/me",
      element: (
        <ProtectedRoute allowedRoles={[USER_ROLE.doctor]}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
