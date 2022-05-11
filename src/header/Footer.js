import React from "react";

function Footer() {
  const footerStyle = {
    textAlign:"center",
    marginTop:"1rem",
    width: "100%",
    background:"#eee",
    padding:"10px 10px",
    color:"#000"
  };
  return (
    <footer className="footer" style={footerStyle}>
      <p className="footer__content">
        Copyright <span>©</span> 2011 - 2022 Sabka Bazaar Grocery Supplies Pvt
        Ltd
      </p>
    </footer>
  );
}

export default Footer;
