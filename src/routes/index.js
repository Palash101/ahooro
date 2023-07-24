import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { userState } from "../recoil/atom/userState";
// import Login from "../screens/sign-in";
// import Dashboard from "../screens/user/dashboard";
// import DashboardLayout from "../layout/dashboard-layout";
// import Start from "../screens/user/homepage";
// import Register from "../screens/sign-up";
// import ResetPasswordPage from "../screens/email";
// import Profile from "../screens/user/profile";
// import ProjectCreate from "../screens/user/project/create";
// import ProjectEdit from "../screens/user/project/edit";
// import SignIn from "../sign-in";
import Home from "../Home";
import PoliticaDeCookies from "../politicadecookies";
import PrivacyPolicy from "../privacy-policy";

const PrivateRoutes = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

// const OtherRoutes = () =>{

//   const user = useRecoilValue(userState);
//   if(user){
//     console.log(user,'other route')
//     return <Navigate to="/" />;
//   }
//   return <Outlet />;
// }

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/sign-in" element={<SignIn />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route exact path="/politicadecookies" element={<PoliticaDeCookies />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
