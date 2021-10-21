import React from "react";
import { Link } from "react-router-dom";
import login from "../img/login.svg";
import person from "../img/person.svg";
import path from "../img/path.svg";
import fb from "../img/facebookG.svg";
import line from "../img/lineG.svg";
import ig from "../img/instagramG.svg";
import TopBtn from "../components/TopBtn";
import list from "../img/list.png";
import cross from "../img/delete.png";

const Header = () => {
  const setActive = (e) => {
    let nav = document.querySelectorAll("header a");
    nav.forEach((a) => {
      a.classList.remove("active");
    });
    let target = e.target;
    target.classList.add("active");
    document.querySelector("header").classList.add("white");
    closeList();
  };
  const clearActive = () => {
    let nav = document.querySelectorAll("header a");
    nav.forEach((a) => {
      a.classList.remove("active");
    });
    document.querySelector("header").classList.remove("white");
  };
  const openList = () => {
    document.querySelector("header .list").style.height = "0px";
    document.querySelector("header .container").classList.add("open");
    if (document.body.scrollWidth < 1100) {
      document.querySelector("header nav").classList.add("open");
    }
  };
  const closeList = () => {
    document.querySelector("header .list").style.height = "2rem";
    document.querySelector("header .container").classList.remove("open");
    if (document.body.scrollWidth < 1100) {
      document.querySelector("header nav").classList.remove("open");
    }
  };

  return (
    <header>
      <Link to="/" className="logo" onClick={clearActive}>
        <h1>人晨</h1>
      </Link>
      <nav>
        <ul onClick={setActive}>
          <li>
            <Link to="/about">關於人晨</Link>
          </li>
          <li>
            <Link to="/a">教育課程</Link>
          </li>
          <li>
            <Link to="/b">商品資訊</Link>
          </li>
          <li>
            <Link to="/c">場地租借</Link>
          </li>
          <li>
            <Link to="/d">合作店家</Link>
          </li>
          <li>
            <Link to="/e">聯絡我們</Link>
          </li>
        </ul>
        <div className="container">
          <img src={cross} alt={cross} className="cross" onClick={closeList} />
          <div className="container1">
            <div className="loginReg">
              <Link to="/login" className="login">
                <img src={login} alt="login" />
                登入
              </Link>
              <span>/</span>
              <Link to="/regist" className="regist">
                註冊
              </Link>
            </div>
            <Link to="/user" className="user">
              <img src={person} alt="person" />
              會員中心
            </Link>
            <div className="fanPages">
              <Link to="/facebook">
                <img src={fb} alt="fb" />
              </Link>
              <Link to="/line">
                <img src={line} alt="line" />
              </Link>
              <Link to="/instagram">
                <img src={ig} alt="ig" />
              </Link>
            </div>
          </div>
          <div className="search">
            <img src={path} alt="path" />
            <input type="text" />
            <button>搜尋</button>
          </div>
        </div>
      </nav>
      <img src={list} alt={list} className="list" onClick={openList} />
      <TopBtn />
    </header>
  );
};

export default Header;
