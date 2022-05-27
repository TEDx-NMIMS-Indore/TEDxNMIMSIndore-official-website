import "./App.css";
import Heading from "./components/homepage/title";
import Menu from "./components/menu/menu";
import DarkTEDxLogo from "./components/TEDxLogo/darkTEDxLogo";
import MenuItem from "./components/homepage/Menu";
import TEDxLogo from "./components/TEDxLogo/TEDxLogo";
import AboutNMIMS from "./components/aboutNMIMS/aboutNMIMS";
import AboutTed from "./components/aboutTed/aboutTedPage1";
import TedxNMIMS from "./components/aboutTEDxNMIMS/tedxNMIMS";
import ContactPage from "./components/contactPage/contactPage";
import Speakers from "./components/speakers/speakers";
import Glass from "./components/glassSection/glass";
import { BackTop, Tooltip } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeComponent from "./components/TEDTheme/TEDTheme";
import Team from "./components/TEDTeam/TEDTeam";

// import { ResponsiveNavbar } from "react-hamburger-menus";
// import "react-hamburger-menus/dist/style.css";

// Some secret console text to showcase the name of contributors :)

console.log(
    "%cTEDxNMIMS, Indore",
    "font-size: 3vw; font-weight: 900; color: red; background-color: black; padding: 2vw; margin: 1vw; display: flex; justify-content: center"
);

console.log(
    "%cWelcome to TEDxNMIMS official website. \n\nThis website has been made by Mr. Sam Varghese, currently a second year MBATech student at NMIMS, Indore. \nGitHub link for the website: https://github.com/TEDx-NMIMS-Indore/TEDx-NMIMS-Indore-official-website \nProfile Sam Varghese: https://www.linkedin.com/in/sam-varghese-1a7701209/ \nMail ID of Sam Varghese: sam.varg.2003@gmail.com",
    "color: yellow; background-color: black; padding: 1vw;"
);

const App = () => {
    return (
        <div className="headingPage">
            <Tooltip placement="topLeft" title="Back to top" color="grey">
                <BackTop />
            </Tooltip>
            <Menu />
            <Heading />
            <AboutNMIMS id="about" name="about" />
            <TedxNMIMS />
            <Team />
            <Speakers />
            <ContactPage />
            {/* <AboutNMIMS /> */}
            {/* <TedxNMIMS /> */}
            {/* <ContactPage /> */}
        </div>
    );
};

export default App;
