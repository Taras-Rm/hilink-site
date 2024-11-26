import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface CampSite {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampSite) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat ${backgroundImage} lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src={"./folded-map.svg"} width={28} height={28} alt="map" />
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h4 className="bold-18">{title}</h4>
            <p className="regular-14">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <div className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block rounded-full h-10 w-10"
                src={url}
                width={52}
                height={52}
                alt={url}
                key={url}
              />
            ))}
          </div>
          <span className="text-white bold-16 md:bold-20">{peopleJoined}</span>
        </div>
      </div>
    </div>
  );
};

function Camp() {
  return (
    <section className="relative 2xl:max-container flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex gap-8 h-[340px] w-full overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Somewhere in the wildness"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Somewhere in the wildness"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="relative bg-green-50 rounded-3xl text-white p-8 mt-10 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 w-full">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            non incidunt! Alias quis veniam quibusdam vero, voluptatum nemo
            tempora dolorem aliquam? Quidem eveniet laboriosam cumque quas
            deserunt molestiae facere vero.
          </p>
          <Image
            className="camp-quote"
            src={"./quote.svg"}
            alt="quote"
            width={186}
            height={219}
          />
        </div>
      </div>
    </section>
  );
}

export default Camp;
