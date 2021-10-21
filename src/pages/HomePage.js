import React from "react";
import { v4 as uuidv4 } from "uuid";
import meadow from "../img/meadow.png";
import leaf1 from "../img/leaf.png";
import leaf2 from "../img/group9600.png";
import Commodity from "../components/Commodity";
import group2 from "../img/maskGroup2.png";
import group4 from "../img/maskGroup4.png";
import group5 from "../img/maskGroup5.png";
import group6 from "../img/maskGroup6.png";
import group7 from "../img/maskGroup7.png";
import group10 from "../img/maskGroup10.png";
import group9398 from "../img/group9398.png";
import group9399 from "../img/group9399.png";
import group9536 from "../img/group9536.png";
import arrowscircle from "../img/arrowscircle.svg";
import group8998 from "../img/group8998.svg";
import group8997 from "../img/group8997.svg";
import group8995 from "../img/group8995.svg";
import group8996 from "../img/group8996.svg";
import logoB from "../img/logoB.png";
import group350 from "../img/group350.svg";
import email from "../img/email.svg";
import pin from "../img/pin.svg";

const HomePage = () => {
  let commodity = [
    { src: group2, text: "1號彩光花波-海底輪紅色 -土的元素", price: 2800 },
    { src: group4, text: "2號採光花波-升值輪橙色 -水的元素", price: 2800 },
    { src: group5, text: "3號採光花波-臍輪黃色 -火的元素", price: 2800 },
    { src: group6, text: "4號採光花波-心輪綠色 -風的元素", price: 2800 },
    { src: group7, text: "5號採光花波喉嚨-藍色", price: 2800 },
    { src: group10, text: "4號採光花波-心輪綠色 -風的元素", price: 2800 },
    { src: group4, text: "2號採光花波-升值輪橙色 -水的元素", price: 2800 },
    { src: group7, text: "5號採光花波喉嚨-藍色", price: 2800 },
    { src: group6, text: "4號採光花波-心輪綠色 -風的元素", price: 2800 },
    { src: group5, text: "3號採光花波-臍輪黃色 -火的元素", price: 2800 },
  ];

  return (
    <div className="homepage">
      <div className="banner">
        <div className="background"></div>
        <h2>
          身心<span>全面</span>健康
          <br />
          <span>&nbsp;&nbsp;&nbsp;&nbsp;是我們的</span>終極目標
        </h2>
        <button>了解更多 ...</button>
      </div>
      <div className="background">
        <div className="about">
          <div className="container">
            <div className="layer"></div>
            <img src={leaf1} alt="leaf1" className="leaf1" />
            <img src={leaf2} alt="leaf2" className="leaf2" />
            <img src={meadow} alt="meadow" className="meadow" />
            <div className="text">
              <h2>關於人晨</h2>
              <p>
                供給美容SPA、身心領域的「營運者」、「創業者」，予以引領、顧問服務，以及完整資源教育。
                <br />
                課程包含 國內外最特殊的核心療法技術及身心轉化課程
                <br />
                每一部份既可獨立運用，又是完整的一片拼圖
                <br />
                每一步身心整體療癒的道路
                <br />
                都會在您的事業綻放光芒，讓您以更喜悅輕鬆的方式創造豐盛！
              </p>
              <button>了解更多 ...</button>
            </div>
          </div>
        </div>
        <div className="commodities">
          <h2>所有商品</h2>
          <div className="list">
            {commodity &&
              commodity.map((comm) => {
                return <Commodity comm={comm} key={uuidv4()} />;
              })}
          </div>
          <button className="moreComm">看更多商品 ...</button>
        </div>
        <div className="ourService">
          <h2>我們提供的服務</h2>
          <div className="services">
            <div className="item">
              <img src={group9398} alt={group9398} />
              <button>教育課程</button>
            </div>
            <div className="item">
              <img src={group9399} alt={group9399} />
              <button>產品資訊</button>
            </div>
            <div className="item">
              <img src={group9536} alt={group9536} />
              <button>場地租借</button>
            </div>
          </div>
        </div>
        <div className="ourWorth">
          <h2>我們的價值</h2>
          <div className="worths">
            <div className="center">
              <img src={group9398} alt={group9398} />
            </div>
            <div className="item item1">
              <img src={arrowscircle} alt={arrowscircle} />
              <h3>多元整合</h3>
            </div>
            <div className="item item2">
              <img src={group8998} alt={group8998} />
              <h3>引領趨勢</h3>
            </div>
            <div className="item item3">
              <img src={group8997} alt={group8997} />
              <h3>克制需求</h3>
            </div>
            <div className="item item4">
              <img src={group8995} alt={group8995} />
              <h3>專業培訓</h3>
            </div>
            <div className="item item5">
              <img src={group8996} alt={group8996} />
              <h3>扎實教育</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="concat">
        <h2>聯絡我們</h2>
        <p>
          若有任何疑問，歡迎您來信或來電與我們聯絡。（週一～週五09:00-12:00、13:30-17:30
          ，遇國定假日休）。
          <br />
          請您填寫下面的表單，以便讓我們了解您的期望，我們會將儘速與您連絡。
        </p>
        <div className="container">
          <div className="container1">
            <img src={logoB} alt={logoB} />
            <div>
              <img src={group350} alt={group350} />
              <h4>07-5507639</h4>
            </div>
            <div>
              <img src={email} alt={email} />
              <h4>abc123@gmail.com</h4>
            </div>
            <div>
              <img src={pin} alt={pin} />
              <h4>高雄市美濃區中興路二段45號</h4>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7315269675646!2d120.52050431539209!3d22.88637392714672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e6a740386035f%3A0x2ade3d4c36a3f562!2zODQz6auY6ZuE5biC576O5r-D5Y2A5Lit6IiI6Lev5LqM5q61NDXomZ8!5e0!3m2!1szh-TW!2stw!4v1634204473088!5m2!1szh-TW!2stw"
              width="500"
              height="300"
              style={{ border: 0 }}
              title="map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="container2">
            <form action="#">
              <div>
                <p>問題分類</p>
                <select>
                  <option>請選擇分類</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div>
                <p>
                  姓名<span>*</span>
                </p>
                <input type="text" name="name" required />
              </div>
              <div>
                <p>
                  電話<span>*</span>
                </p>
                <input type="text" name="cell" required />
              </div>
              <div>
                <p>信箱</p>
                <input type="email" name="email" />
              </div>
              <div className="textarea">
                <p>說明*</p>
                <textarea
                  name="illustrate"
                  id=""
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <button>送出訊息</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
