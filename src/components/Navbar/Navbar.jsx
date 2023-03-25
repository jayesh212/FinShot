import React, { useState } from "react";
import logo from "../../assets/logo/finshot_highres.svg";
import Logo from "../utils/Logo";
import Button from "../utils/Button";
const Navbar = (props) => {
  const [transparency, setTransparency] = useState(true);
  window.addEventListener('scroll',(e)=>{
    if(window.scrollY<=0)setTransparency(true)
    else setTransparency(false)
  })
  return (
    <div
      className={`h-[80px] ${
        transparency ? "" : "bg-black"
      } text-cyan-200 flex items-center p-8 justify-between transition-colors duration-200 fixed top-0 left-0 right-0`}
    >
      <Logo logo={logo} ht="40px"></Logo>
      <div className="flex items-center text-3xl">
        <Button onClick={null} type="Link">
          TEMPLATES
        </Button>
        <span className="m-4"></span>
        <Button onClick={null} type="Link">
          PRODUCTS
        </Button>
        <span className="m-4"></span>
        <Button onClick={null} type="Link">
          RESOURCES
        </Button>
      </div>
      <div className="flex items-center">
        <Button onClick={null} type="Link">
          LOG IN
        </Button>
        <span className="m-4"></span>
        <Button onClick={() => {}} type="Flat">
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
