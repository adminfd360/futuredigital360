import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import AnimateDiv from "@/components/AnimateDiv";

import template1 from "./assets/templates/template1.jpg";
import template2 from "./assets/templates/template2.jpg";
import template3 from "./assets/templates/template3.jpg";
import template4 from "./assets/templates/template4.jpg";
import template5 from "./assets/templates/template5.jpg";
import template6 from "./assets/templates/template6.jpg";
import template7 from "./assets/templates/template7.jpg";
import template8 from "./assets/templates/template8.jpg";
import template9 from "./assets/templates/template9.jpg";
import template10 from "./assets/templates/template10.jpg";

type Template = {
  image: string | StaticImageData;
  title: string;
  link: string;
};

const templateItems: Template[] = [
  {
    image: template1,
    title: "Restaurant",
    link: "https://www.figma.com/proto/OuLfZKlJtxDndWGB7uR4OT/Food-Template?node-id=4-2&scaling=scale-down-width&hide-ui=1",
  },
  {
    image: template2,
    title: "Medical",
    link: "https://www.figma.com/proto/gqRlPIbDZ30o2G0in4v2m6/Medical?node-id=4-3&scaling=min-zoom&hide-ui=1",
  },
  {
    image: template3,
    title: "Lawn Services",
    link: "https://www.figma.com/proto/ad9myj4OmFkwrYeiy3mqH8/Law-Maintenance?node-id=2-2&scaling=scale-down-width&hide-ui=1",
  },
  {
    image: template4,
    title: "Insurance",
    link: "https://www.figma.com/proto/S1gi6DvR6gmteXGyUvbS7k/PIS?node-id=1-5&scaling=scale-down-width&hide-ui=1",
  },
  {
    image: template5,
    title: "Automotive",
    link: "https://www.figma.com/proto/fHCPSv0N153auc6r3tzTX0/Template-2?node-id=1-2&hide-ui=1",
  },
  {
    image: template6,
    title: "Pest Control",
    link: "https://www.figma.com/proto/G3gbQ6T09xe51pT9fFbl7o/Cummings?node-id=1-2&scaling=scale-down-width&hide-ui=1",
  },
  {
    image: template7,
    title: "Animal Care",
    link: "https://www.figma.com/proto/3eoQfIKlhZvI10pg04oBAW/Vet?node-id=4-5&t=jyFHBXH51DhPrFiG-0&scaling=scale-down-width&page-id=0%3A1&hide-ui=1",
  },
  {
    image: template8,
    title: "Fitness",
    link: "https://www.figma.com/proto/kvy6LPm19l1syuK1PWDZSE/Fitnes?node-id=1-2&t=oTSQO27HpHZ2sLwj-0&scaling=scale-down-width&page-id=0%3A1&hide-ui=1",
  },
  {
    image: template9,
    title: "Transport",
    link: "https://www.figma.com/proto/mKJW4Owml4RWduLGAvxk3d/Focus-Transportation?node-id=6-6&scaling=scale-down-width&hide-ui=1",
  },
  {
    image: template10,
    title: "Hardscaping",
    link: "https://deluxxpool.vercel.app/",
  },
];

const WebTemplates = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1280px] p-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {templateItems.map((item, index) => (
            <AnimateDiv key={index}>
              <div className="shadow-xl rounded-lg relative overflow-hidden group">
                <Image
                  className="group-hover:scale-105 transition-all duration-1000"
                  src={item.image}
                  alt=""
                />
                <div className="transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="w-[400px] h-[400px] bg-[#000] rounded-full absolute -bottom-[400px] -left-[400px] block opacity-50 transition-all duration-700 group-hover:-bottom-20 group-hover:-left-20"></div>
                  <div className="w-[350px] h-[350px] bg-gradient-to-t from-[#252525] to-[#000] opacity-80 rounded-full absolute -bottom-[400px] -left-[400px] transition-all duration-300 group-hover:-bottom-16 group-hover:-left-16 block"></div>
                  <div className="absolute bottom-0 left-0 p-6 pb-10">
                    <p className="text-3xl mb-4 text-white font-bold">
                      {item.title}
                    </p>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="rounded-full bg-white p-4 inline-block hover:bg-brand-500 hover:text-white"
                    >
                      Check Template
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebTemplates;
