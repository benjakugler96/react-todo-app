import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { NavMenu, Search } from "../index";
import { HeaderContainer, HeaderTop, HeaderBottom } from "./styles";

const Header = () => (
  <HeaderContainer>
    <HeaderTop>
      <a
        href="https://www.linkedin.com/in/benjamin-kugler-810872173/"
        target="_blank"
      >
        <FaLinkedin size="26px" color="#d7d7d7" />
      </a>
      <a href="https://github.com/benjakugler96" target="_blank">
        <FaGithubSquare size="26px" color="#d7d7d7" />
      </a>
      <a href="https://github.com/benjakugler96/react-todo-app" target="_blank">
        https://github.com/benjakugler96/react-todo-app
      </a>
    </HeaderTop>
    <HeaderBottom>
      <NavMenu />
      <h3 className="logo">TodoApp</h3>
      <Search />
    </HeaderBottom>
  </HeaderContainer>
);

export default Header;
