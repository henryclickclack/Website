import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import { useState, useEffect } from "react"
import axios from 'axios';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Main from "altpages/Main.js";
import Signup from "altpages/Signup.js";
import Login from "altpages/Login.js";
import Pricing from "altpages/Pricing.js";
import ComponentRenderer from "ComponentRenderer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });
  const [currentUser, setCurrentUser] = useState();
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  useEffect(() => {
    client.get("/api/user")
      .then(function (res) {
        setCurrentUser(res);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);

  return (
    <>
      {!currentUser ?
        <>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/features" element={<Main />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login setuser={setCurrentUser} />} />
              <Route path="/signup" element={<Signup setuser={setCurrentUser} />} />

            </Routes>
          </Router>
        </>
        :
        <>
          <React.StrictMode>
            <Router>
              <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <div className="app">
                    <Sidebar user={currentUser} isSidebar={isSidebar} />
                    <main className="content">
                      <Topbar setuser={setCurrentUser} setIsSidebar={setIsSidebar} />
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/invoices" element={<Invoices />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/bar" element={<Bar />} />
                        <Route path="/pie" element={<Pie />} />
                        <Route path="/line" element={<Line />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/geography" element={<Geography />} />
                      </Routes>
                    </main>
                  </div>
                </ThemeProvider>
              </ColorModeContext.Provider>
            </Router>
          </React.StrictMode>
        </>
      }

    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
