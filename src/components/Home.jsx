import React from "react";

const Home = () => {
  const gridItemClasses = `rounded-3xl bg-slate-200 text-center flex justify-center items-center text-2xl font-bold`;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-6 text-slate-400/0 xl:text-slate-400">
      <div className="grid h-full w-full grid-cols-7 gap-4">
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>
          Trendify
        </div>
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>
          The Tote Bag
        </div>
        <div className={`col-span-3 row-span-4 text-5xl ${gridItemClasses}`}>
          Deal Of The Day
        </div>
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>
          The Hoop Earrings
        </div>
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>
          Retro-Cool Sunglasses
        </div>
        <div className={`col-span-1 row-span-1 ${gridItemClasses}`}>
          The Bold Blazer
        </div>
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>
          Comfy Chic Sneakers
        </div>
        <div className={`col-span-2 row-span-2 ${gridItemClasses}`}>
          The Statement Necklace
        </div>
        <div className={`col-span-1 row-span-1 ${gridItemClasses}`}>
          Spring Dress
        </div>
        <div className={`col-span-2 row-span-1 ${gridItemClasses}`}>
          Denim Staple Jeans
        </div>
        <div className={`col-span-2 row-span-1 ${gridItemClasses}`}>
          Bold Boots
        </div>
        <div className={`col-span-1 row-span-1 ${gridItemClasses}`}>
          Summer Shades
        </div>
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>
          Everyday Essentials
        </div>
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>
          Workwear Chic
        </div>
        <div className={`col-span-2 row-span-1 ${gridItemClasses}`}>
          Cozy Knits
        </div>
        <div className={`col-span-3 row-span-1 ${gridItemClasses}`}>
          Weekend Wear
        </div>
      </div>
    </div>
  );
};

export default Home;
