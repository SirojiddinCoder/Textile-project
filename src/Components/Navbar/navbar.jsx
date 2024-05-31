import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";
import uzbekFlag from "../../assets/uzbflag1.png";
import usaFlag from "../../assets/englandflag.png";
import russiaFlag from "../../assets/rusflag.png";
import img1 from "../../assets/siteimg/111-copy.png";
import icon1 from "../../assets/siteimg/delever.svg";
import icon2 from "../../assets/siteimg/2.svg";
import icon3 from "../../assets/siteimg/Group-995.svg";
import icon4 from "../../assets/siteimg/payment.svg";

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const options = [
  { value: "uzbek", label: "Uzbek", image: uzbekFlag },
  { value: "english", label: "English", image: usaFlag },
  { value: "russian", label: "Russian", image: russiaFlag },
];

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="Home page">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img
              src={logo}
              alt="logo Brand"
              style={{ width: "135px", height: "35px" }}
            />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/">Asosiy</Link>
              </li>
              <li>
                <Link to="/bizhaqimizda">Biz Haqimizda</Link>
              </li>
              <li>
                <Link to="/toplamlar">To'plamlar Kolleksiyasi</Link>
              </li>
              <li>
                <Link to="/boglanish">Bog'lanish</Link>
              </li>
            </ul>
            <div className="language-selector">
              <div className="dropdown">
                <div className="dropdown-header" onClick={toggleDropdown}>
                  <img
                    src={selectedOption.image}
                    alt={selectedOption.label}
                    style={{ width: 20, marginRight: 8 }}
                  />
                  {selectedOption.label}
                </div>
                {isOpen && (
                  <div className="dropdown-list">
                    {options.map((option) => (
                      <div
                        key={option.value}
                        className="dropdown-item"
                        onClick={() => handleOptionClick(option)}
                      >
                        <img
                          src={option.image}
                          alt={option.label}
                          style={{ width: 20, marginRight: 8 }}
                        />
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container1">
        <div className="Card-Home">
          <div className="Home-img">
            <img className="img1" src={img1} alt="nimadir" />
          </div>
          <div className="Home-text">
        
              <span className="home-text-title-1">Buxoro</span> <br />
              <span className="home-text-title-2">Tabiiy</span> <br />
              <span className="home-text-desc">MAHSULOT</span>


        
          </div>
        </div>
        <div className="Home-mini-card-groups">
          <div className="mini-card">
            <div><img src={icon1} alt="icon4" /></div>
            <div><h4 className="card-title">  Yetkazib berish bepul </h4>
            <p className="home-card-desc">Barcha buyurtmalar uchun bepul yetkazib berish</p></div>
          </div>
          <div className="mini-card">
            <div><img src={icon2} alt="icon4" /></div>
           <div> <h4 className="card-title">  Qaytish kafolati</h4>
            <p className="home-card-desc">30 kunlik pulni qaytarish</p></div>
          </div>
          <div className="mini-card">
            <div><img src={icon3} alt="icon4" /></div>
            <div><h4 className="card-title">  24/7 onlayn qo'llab-quvvatlash
</h4>
            <p className="home-card-desc">24/7 texnik yordam</p></div>
          </div>
          <div className="mini-card">
            <div><img src={icon4} alt="icon4" /></div>
           <div> <h4 className="card-title">  
Xavfsiz to'lov</h4>
            <p className="home-card-desc">Barcha to'lov usullari qabul qilinadi</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
