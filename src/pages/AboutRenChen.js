import React from "react";
import next from "../img/aboutRenChen/next.svg";
import spa from "../img/aboutRenChen/led.png";
import ocm from "../img/aboutRenChen/ocnvwa0.png";
import check from "../img/aboutRenChen/checkCircle.svg";
const AboutRenChen = () => {
  return (
    <div className="aboutRenChen">
      <div className="banner">
        <h1>關於人晨</h1>
      </div>
      <div className="consultant">
        <div className="container">
          <h6>首頁</h6>
          <img src={next} alt={next} />
          <img src={next} alt={next} />
          <h6>關於人晨</h6>
        </div>
        <div className="container1">
          <div className="container1_1">
            <h2>
              供給<span>美容SPA</span>、<span>身心領域</span>
              的「營運者」、「創業者」予以引領、顧問服務，以及完整資源教育。
            </h2>
            <p>
              課程包含 國內外最特殊的核心療法技術及身心轉化課程
              <br />
              每一部份既可獨立運用，又是完整的一片拼圖
              <br />
              每一步身心整體療癒的道路
              <br />
              都會在您的事業綻放光芒，讓您以更喜悅輕鬆的方式創造豐盛！
            </p>
          </div>
          <div className="container1_2">
            <img src={spa} alt={spa} />
          </div>
        </div>
        <div className="container2">
          <div className="container2_1">
            <img src={ocm} alt={ocm} />
          </div>
          <div className="container2_2">
            <h2>我們所關注的</h2>
            <div>
              <img src={check} alt={check} />
              <p>現代人迫切需要改善的</p>
              <h2>負面、壓力、亞健康、疾病</h2>
            </div>
            <div>
              <img src={check} alt={check} />
              <p>現代人在追求與渴望的</p>
              <h2>正向、改變、進步、成長</h2>
            </div>
            <div>
              <img src={check} alt={check} />
              <p>現代人需要關注與覺察的</p>
              <h2>身體、情緒、心靈、意識</h2>
            </div>
            <div>
              <img src={check} alt={check} />
              <p>心靈道路上的最終目標</p>
              <h2>平靜、快樂、平衡、合一</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRenChen;
