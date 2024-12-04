import React, { useState } from 'react';

export const Footer = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  const handleTransparent = () => {
    setIsTransparent(!isTransparent);
  }

  return (
    <footer onClick={handleTransparent} style={{opacity: isTransparent ? 0.3 : 1, transition: "opacity 0.1s ease"}}>
        <div className="footer-nav">
            <p>&copy; {new Date().getFullYear()} <b className="bold-text">Sakamochanq</b></p>
            <p>Data and resources provided by <b className="bold-text">金沢工業大学</b></p>
        </div>
    </footer>
  );
};

export default Footer;
