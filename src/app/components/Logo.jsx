import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

const Logo = () => {
  return <Image src={logo} alt="logo" width={50} height={50} />;
};

export default Logo;
