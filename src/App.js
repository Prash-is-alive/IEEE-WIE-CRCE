import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "./App.css";
import prakalp3 from "./assets/events/prakalp2k25.jpg";
const Hero = React.lazy(() => import("./components/Hero"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Events = React.lazy(() => import("./components/Events"));
const Team = React.lazy(() => import("./components/Team"));
const HoverCard = React.lazy(() => import("./components/HoverCard"));
const Error = React.lazy(() => import("./components/Error"));
// const Modal = React.lazy(() => import("./components/Modal"));
function App() {
  console.log(
    `%c${process.env.REACT_APP_SECRET_MESSAGE}`,
    "color: #00a67d; font-weight:bold"
  );
  // const showCard = localStorage.getItem("cardDismissed");
  return (
    <>
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
              }}
            >
              <TailSpin color="#7ca2e3" />
            </div>
          }
        >
          <Routes>
            <Route path="/" exact element={<Hero />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/events" exact element={<Events />} />
            <Route path="/team" exact element={<Team />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        {/* {!showCard && (
          <HoverCard
            eventImg={prakalp3}
            registrationLink={"https://shorturl.at/kHV09"}
          />
        )} */}
          <HoverCard
            eventImg={prakalp3}
            registrationLink={"https://unstop.com/o/RpUVKCI?lb=JfoBW0t"}
          />
      </Router>
    </>
  );
}

export default App;
