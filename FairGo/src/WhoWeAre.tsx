import { useState, useEffect } from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['manual workflows', 'repetitive tasks'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="who-we-are-section">
      <div className="background-image">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/0a9d4ffec8d0ac4d62c6a6a552379ea0cffe6d40?width=1706" 
          alt="" 
        />
      </div>

      <div className="section-container">
        <div className="section-heading">
          <div className="heading-badge">
            <div className="badge-content">
              <div className="badge-text-wrapper">
                <span className="badge-text">Who We Are</span>
              </div>
            </div>
            <div className="badge-border"></div>
            <div className="corner-dot top-left"></div>
            <div className="corner-dot bottom-left"></div>
            <div className="corner-dot bottom-right"></div>
            <div className="corner-dot top-right"></div>
          </div>
        </div>

        <div className="text-content">
          <div className="text-line">
            <div className="text-group">
              <span className="text-normal">"We harness</span>
              <div className="text-highlight">
                <span>your data</span>
                <div className="corner-decor top-left"></div>
                <div className="corner-decor bottom-left"></div>
                <div className="corner-decor bottom-right"></div>
                <div className="corner-decor top-right"></div>
              </div>
              <span className="text-normal">, understand your audience,</span>
            </div>
          </div>

          <div className="text-line">
            <div className="text-group">
              <span className="text-normal">and</span>
              <div className="text-highlight">
                <span>use AI</span>
                <div className="corner-decor top-left"></div>
                <div className="corner-decor bottom-left"></div>
                <div className="corner-decor bottom-right"></div>
                <div className="corner-decor top-right"></div>
              </div>
              <span className="text-normal">to help your brand rise above the noise.</span>
            </div>
          </div>

          <div className="text-line">
            <div className="text-group">
              <span className="text-normal">The best part?</span>
              <div className="text-highlight">
                <span>We execute</span>
                <div className="corner-decor top-left"></div>
                <div className="corner-decor bottom-left"></div>
                <div className="corner-decor bottom-right"></div>
                <div className="corner-decor top-right"></div>
              </div>
              <span className="text-normal">, too."</span>
            </div>
          </div>

          <div className="text-slider-wrapper">
            <div className="slider-content">
              <div className="slider-heading">
                <svg className="slider-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2011_33)">
                    <path d="M8.55833 17.4406L2.96292 15.379C2.64767 15.2631 2.4375 14.9619 2.4375 14.625C2.4375 14.2881 2.64767 13.9869 2.96292 13.8699L8.55833 11.8083L10.6199 6.21292C10.7369 5.89767 11.0381 5.6875 11.375 5.6875C11.7119 5.6875 12.0131 5.89767 12.129 6.21292L14.1906 11.8083L19.786 13.8699C20.1023 13.9869 20.3125 14.2881 20.3125 14.625C20.3125 14.9619 20.1023 15.2631 19.786 15.379L14.1906 17.4406L12.129 23.036C12.0131 23.3523 11.7119 23.5625 11.375 23.5625C11.0381 23.5625 10.7369 23.3523 10.6199 23.036L8.55833 17.4406Z" fill="#F0F0FF" fillOpacity="0.2"/>
                    <path d="M8.55833 17.4406L2.96292 15.379C2.64767 15.2631 2.4375 14.9619 2.4375 14.625C2.4375 14.2881 2.64767 13.9869 2.96292 13.8699L8.55833 11.8083L10.6199 6.21292C10.7369 5.89767 11.0381 5.6875 11.375 5.6875C11.7119 5.6875 12.0131 5.89767 12.129 6.21292L14.1906 11.8083L19.786 13.8699C20.1023 13.9869 20.3125 14.2881 20.3125 14.625C20.3125 14.9619 20.1023 15.2631 19.786 15.379L14.1906 17.4406L12.129 23.036C12.0131 23.3523 11.7119 23.5625 11.375 23.5625C11.0381 23.5625 10.7369 23.3523 10.6199 23.036L8.55833 17.4406Z" stroke="#F0F0FF" strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.875 1.625V6.5" stroke="#F0F0FF" strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.75 7.3125V10.5625" stroke="#F0F0FF" strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.4375 4.0625H20.3125" stroke="#F0F0FF" strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.125 8.9375H24.375" stroke="#F0F0FF" strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2011_33">
                      <rect width="26" height="26" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-normal">Automate away the</span>
              </div>

              <div className="text-slider">
                <div className="slider-border"></div>
                <div className="slider-text-container">
                  <div className="slider-text" style={{ transform: `translateY(-${currentText * 100}%)` }}>
                    {texts.map((text, index) => (
                      <div key={index} className="slider-text-item">
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glow-left"></div>
                <div className="glow-right"></div>
                <div className="slider-border-left"></div>
                <div className="slider-border-right"></div>
              </div>
            </div>

            <div className="horizontal-border"></div>
            <div className="bottom-glow">
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>

        <div className="container-border"></div>
        <div className="section-divider"></div>
      </div>
    </section>
  );
};

export default WhoWeAre;
