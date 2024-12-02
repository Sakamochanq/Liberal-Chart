import React from 'react';

export const Footer = () => {
  return (
    <footer>
        <div className="footer-nav">
            <p>&copy; {new Date().getFullYear()} <b className="bold-text">Sakamochanq</b></p>
            <p>Powered by React</p>
            <p>Data and resources provided by <b className="bold-text">金沢工業大学</b></p>
        </div>
    </footer>
  );
};

export default Footer;
