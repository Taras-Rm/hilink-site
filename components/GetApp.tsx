import React from "react";
import Button from "./Button";
import Image from "next/image";

function GetApp() {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="flex flex-col items-start justify-center w-full gap-12 md:w-1/2">
          <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iPhone and Android, download now.
          </p>
          <div className="w-full flex flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              title="Download App"
              type="button"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              title="Play Store"
              type="button"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src={"/phones.png"} alt="phones" height={550} width={870} />
        </div>
      </div>
    </section>
  );
}

export default GetApp;
