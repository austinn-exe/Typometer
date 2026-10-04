import "./Navbar.css";
import { BsSpeedometer2 } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

function Navbar(props) {
    function handleResetScore() {
        if (window.confirm("Are you sure you want to reset your best score?")) {
            props.setBest(0);
        }
    }

    return <div className={props.darkMode ? "dark-navbar" : "navbar"}>
        <h1><BsSpeedometer2 />TypoMeter</h1>
        <div className="nav-right">
            <p className="best-text">Best Score : <span className="best-score">{props.best}</span></p>
            <button onClick={handleResetScore} className="reset-btn" title="Reset Best Score">
                ↻
            </button>
            <button onClick={props.changeTheme} className="theme-toggle" >{props.darkMode ? <BsBrightnessHigh /> : <MdOutlineDarkMode />}</button>
        </div>
    </div>
}

export default Navbar;