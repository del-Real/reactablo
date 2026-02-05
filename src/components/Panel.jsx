import "./Panel.css";
import logo from "../assets/logo-prov.png";

function Panel() {
  return (
    <div className="panel-main">
      <img src={logo} className="logo" alt="Logo" />
      <ul>
        <li>— What is React?</li>
        <li>
          Installation & setup
          <ul>
            <li>Vite</li>
            <li>NPX</li>
          </ul>
        </li>
        <li>Project structure</li>
        <li>
          Code basics
          <ul>
            <li>JS</li>
            <li>JSX</li>
          </ul>
        </li>
        <li>Components & props</li>
        <li>State & events</li>
        <li>Hooks</li>
        <li>Styling</li>
      </ul>
    </div>
  );
}

export default Panel;
