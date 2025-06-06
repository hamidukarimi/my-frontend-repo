import Header from "../header/Header";
import Menubar from "../Menubar/Menubar";

const Cart = () => {
  return (
    <>
      <Header />
      <Menubar />
      <div className="px-4 py-6">
        {/* parent */}
        <div className="grid grid-cols-2 gap-4 gap-y-8">
          {/* card */}
          <div className="">
            <div className="w-full h-[147px] bg-placeholderColor"></div>
            <p className="text-[14px] ">
              Lorem ispum doler sign is something diffrent han
            </p>
            <p className=" font-bold my-1">$50.50</p>
            <button className="w-full  text-black hover:bg-black  hover:text-white transition border font-bold mt-1 border-black rounded-full h-[36px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
