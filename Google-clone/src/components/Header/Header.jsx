import "./Header.css";
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  return (
    <header className="header">
      <nav className="left-nav">
        <a href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header">
          About
        </a>
        <a href="https://store.google.com/in/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-GB">
          Store
        </a>
      </nav>
      <nav className="right-nav">
        <div className="right-nav1">
        <a href="https://mail.google.com/">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en&authuser=0&ogbl">Images</a>
        </div>

         <TbGridDots className="gridIcon" title="Google apps"/>

        <button className="avatar-button" title="Your account">A</button>
      </nav>
    </header>
  );
};

export default Header;
