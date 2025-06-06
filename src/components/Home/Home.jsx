import React from "react";
// import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";
import Menubar from "../Menubar/Menubar";
import Hero from "../Hero/Hero";
import RecentProducts from "../recent-products/RecentProducts";
import Products from "../Products/Products";

function Home() {
  return (
    <div>
      <Header />
      <Menubar />
      <Hero />
      <RecentProducts />
      <Products />

      <div className="text-center w-full flex flex-col justify-center items-center my-14 ">
        <div className="text-[105px]">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <button className="w-[127px] h-[42px]  border-2 border-black text-black hover:bg-black  hover:text-white transition rounded-[10px]  text-[14px] font-bold">
          See Cart
        </button>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}
export default Home;
