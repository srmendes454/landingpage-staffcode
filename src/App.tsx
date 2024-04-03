import { ReactNode } from "react";
import { Home } from "./pages/Home/Home";
import { ExternalLayout } from "./components/ExternalLayout/ExternalLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InternalLayout } from "./components/InternalLayout/InternalLayout";
import { About } from "./pages/About/About";
import 'particles.js/particles';
import { Works } from "./pages/Works/Works";
import { Contacts } from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {createRouteExternalLayout("*", <Home />)}
          {createRouteInternalLayout("/about", <About />)}
          {createRouteInternalLayout("/works", <Works />)}
          {createRouteInternalLayout("/contacts", <Contacts />)}
        </Routes>
      </BrowserRouter>
    </>
  );
}

function createRouteExternalLayout(path: string, element: ReactNode) {
  return (
    <Route
      key={path}
      path={path}
      element={<ExternalLayout>{element}</ExternalLayout>}
    />
  );
}

function createRouteInternalLayout(path: string, element: ReactNode) {
  return (
    <Route key={path} path={path} element={<InternalLayout>{element}</InternalLayout>} />
  );
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

export default App;
