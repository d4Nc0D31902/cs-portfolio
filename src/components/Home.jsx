import React from "react";

const Home = () => {
  const gridItemClasses = `rounded-3xl bg-slate-200 flex justify-center items-center text-3xl font-bold`;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-2 text-slate-400/0 xl:text-slate-400">
      <div className="grid h-full w-full grid-cols-6  gap-2">
        <div className={`col-span-2 row-span-2 ${gridItemClasses}`}>L</div>
        <div className={`col-span-2 row-span-3 ${gridItemClasses}`}>CS</div>
        <div className={`col-span-2 row-span-4 ${gridItemClasses}`}>FB</div>
        <div className={`col-span-2 row-span-3 ${gridItemClasses}`}>W</div>
        <div className={`col-span-2 row-span-3 ${gridItemClasses}`}>LO</div>
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>P</div>
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>CL</div>
        <div className={`col-span-2 row-span-1 ${gridItemClasses}`}>SE</div>
        <div className={`col-span-3 row-span-2 ${gridItemClasses}`}>DEV</div>
        <div className={`col-span-2 row-span-2 ${gridItemClasses}`}>SHOP</div>
        <div className={`col-span-1 row-span-2 ${gridItemClasses}`}>CONTACT</div>
      </div>
    </div>
  );
};

export default Home;
