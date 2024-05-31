import React from 'react';
import '../AboutCard/AboutCard.css';
import WrapperImg from '../../assets/siteimg/AboutCard1.png';
import WrapperImg2 from '../../assets/siteimg/AboutCard2.png'; // Aslida boshqa rasmni import qilish
import WrapperImg3 from '../../assets/siteimg/AboutCard3.png'; // Uchinchi rasmni import qilish

const AboutCard = ({ images1, images3 }) => {
  let imageSrc;
  if (images3) {
    imageSrc = WrapperImg3;
  } else if (images1) {
    imageSrc = WrapperImg;
  } else {
    imageSrc = WrapperImg2;
  }

  return (
    <div className='wrapper'>
      <div className="wrapper-block">
        <div className="wrapper-left">
          <p className="wrapper-title">100%</p>
          <p className="wrapper-desc">Materialning sifati</p>
        </div>
        <div className="wrapper-middle">
          <img className='WrapperImg' src={imageSrc} alt="images" />
        </div>
        <div className="wrapper-right">
          <p className="middle-title">
            "Buxoro Tabiiy mahsuloti"
          </p>
          <p className="middle-desc">
            Ko'p yillar davomida butun dunyoda <br />
            foydalanish uchun paxta matolarini <br />
            ishlab chiqaradigan kompaniya bo'lib kelgan <br />
            <div className="line">
              <a href="#" className='wrapper-btn'>To'plamlar</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
