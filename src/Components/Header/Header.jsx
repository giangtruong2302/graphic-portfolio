import { useEffect } from "react";
import "./Header.scss";
import logo from "../../assets/infinity.png";

import profile from "../../assets/G.jpeg";

const Header = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll("nav ul li");
    const indicator = document.querySelector("nav .indicator");

    function update() {
      let width = navLinks[0].offsetWidth;
      let left = navLinks[0].offsetLeft;

      indicator.style.width = `${width + 28}px`;
      indicator.style.left = left + "px";
    }
    update();

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        let width = link.offsetWidth;
        let left = link.offsetLeft;

        indicator.style.left = left + "px";
        indicator.style.width = `${width + 28}px`;

        link.classList.add("active");
      });
    });

    window.addEventListener("resize", update());
  }, []);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>
          INFINITY <i>STUDIOS</i>
        </h1>
      </div>

      <nav>
        <ul>
          <div className="indicator"></div>

          <li className="active">
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">GET IN TOUCH</a>
          </li>
        </ul>
      </nav>

      <div className="profile">
        <img src={profile} alt="" />
      </div>
    </header>
  );
};

export default Header;
