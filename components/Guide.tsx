import Image from "next/image";
import React from "react";

function Guide() {
  return (
    <section className="flex flex-col w-full">
      <div className="padding-container max-container flex flex-col sm:flex-row">
        <div className="w-2/3">
          <Image
            src={"./camp.svg"}
            width={50}
            height={50}
            alt="camp"
            className="w-10 lg:w-[50px]"
          />
          <p className="uppercase regular-18 text-green-50">
            We are here for you
          </p>
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
        </div>
        <div className="flex-1 regular-16 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
          reprehenderit accusantium labore animi provident non modi excepturi
          ipsa, quis quod sit cum sequi eos dolores atque. Similique temporibus
          magni quod.
        </div>
      </div>
      <div className="flexCenter w-full max-container relative h-[400px]">
        <Image
          className="w-full object-cover object-center 2xl:rounded-5xl"
          src={"./boat.png"}
          alt="boat"
          width={1440}
          height={580}
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src={"./meter.svg"}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">49 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start Track</p>

              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Womorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
