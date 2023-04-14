import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import NetflixLogo from "../../assets/download.png";
import ProfilePic from "../../assets/netflix-profile.png";
import { AiOutlineSearch, AiOutlineGift } from "react-icons/ai";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Browse from "../browse/Browse";

const Navbar = () => {
  const [browse, setBrowse] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  function handleScroll() {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else if (type === "tv") {
      navigate("/explore/tv");
    } else {
      navigate("/explore/popular");
    }
  };

  return (
    <HeaderContainer className={`${scrolled && "sticky__header"}`}>
      <Wrapper>
        <LeftNav>
          <Logo onClick={() => navigate("/")}>
            <img src={NetflixLogo} alt="logo" />
          </Logo>
          <Navlists>
            <ul>
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => handleNavigate("tv")}>TV Shows</li>
              <li onClick={() => handleNavigate("movie")}>Movies</li>
            </ul>
          </Navlists>
          <MobileMenu>
            {browse ? (
              <BsFillCaretUpFill size={23} onClick={() => setBrowse(false)} />
            ) : (
              <BsFillCaretDownFill size={23} onClick={() => setBrowse(true)} />
            )}
            {browse && <Browse setBrowse={setBrowse} />}
          </MobileMenu>
        </LeftNav>
        <RightNav>
          <MenuItems>
            <Search>
              <AiOutlineSearch size={23} />
            </Search>
            <Gift>
              <AiOutlineGift size={23} />
            </Gift>
            <Notification>
              <BsBellFill size={20} />
            </Notification>
            <Profile>
              <img src={ProfilePic} alt="ProfilePic" />
            </Profile>
          </MenuItems>
        </RightNav>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Navbar;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 20px;
  background-color: #000;
  color: #fff;
  z-index: 50;
  &.sticky__header {
    position: sticky;
    top: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 0 auto;
`;
const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.div`
  width: 100px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Navlists = styled.nav`
  ul {
    list-style-type: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;
    li {
      cursor: pointer;
      font-weight: 500;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const RightNav = styled.div`
  align-items: center;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Search = styled.div`
  cursor: pointer;
`;
const Gift = styled(Search)``;
const Notification = styled(Search)``;
const Profile = styled(Search)`
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;
