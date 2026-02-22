import React from "react";

function Footer() {

    const date = new Date();
    let year = date.getFullYear();

 return(
    <footer>
        <p>Copyright ⓒ {year} | Paulina Gołąbiewska</p>
    </footer>
)}

export default Footer;