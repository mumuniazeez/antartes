import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UiUxService from "./pages/services/UiUxService";
import NoPage from "./pages/NoPage";
import MobileService from "./pages/services/MobileService";
import WebService from "./pages/services/WebService";
import GetStarted from "./pages/GetStarted";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Outlet />}>
            <Route path="ui-ux" element={<UiUxService />} />
            <Route path="mobile-development" element={<MobileService />} />
            <Route path="web-development" element={<WebService />}  />
          </Route>
          <Route path="get-started" element={<GetStarted />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
