import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

function Features() {
  return (
    <section className="padding-container max-container flex flex-col items-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="relative">
        <h2 className="bold-40 lg-bold-[64px]">Our features can be online</h2>
        <Image
          src={"/camp.svg"}
          width={50}
          height={50}
          alt="camp"
          className="absolute top-[-28px] left-[-5px] w-10 lg:w-[50px]"
        />
      </div>
      <div className="mt-8 flex w-full relative">
        <div className="relative flex flex-1 lg:min-h-[700px]">
          <Image
            src={"/phone.png"}
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <ul className="mt-10 lg:mt-20 w-full grid gap-10 lg:gap-20 grid-cols-1 md:grid-cols-2 lg:w-[60%]">
          {FEATURES.map((item) => (
            <FeatureItem
              icon={item.icon}
              description={item.description}
              title={item.title}
              variant={item.variant}
              key={item.title}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  variant: string;
}

const FeatureItem = ({
  title,
  icon,
  description,
  variant,
}: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className={`bg-${variant}-50 w-fit p-4 lg:p-7 rounded-full`}>
        <Image src={icon} width={28} height={28} alt="calendar" />
      </div>
      <h4 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h4>
      <p className="reguar-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
