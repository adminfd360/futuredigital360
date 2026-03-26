import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import PageBanner from "@/containers/PageBanner";
import banner from "../assets/aboutus-banner.webp";
import Image, { StaticImageData } from "next/image";
import template from "./assets/template.png";

import jim from "./assets/jim.png";
import precie from "./assets/precie.png";
import lai from "./assets/lai.png";
import ron from "./assets/ron.png";
import jomarie from "./assets/jomarie.png";
import rem from "./assets/rem.png";
import jr from "./assets/jr.png";
import warren from "./assets/warren.png";

type Employee = {
  name: string;
  position: string;
  image: string | StaticImageData;
  bio: string;
};

const employees: Employee[] = [
  {
    name: "Jim",
    position: "CEO - USAF Veteran",
    image: jim,
    bio: "",
  },
  // {
  //   name: "Sharon",
  //   position: "Global Account Executive",
  //   image: sharon,
  //   bio: "As an Account Executive for FD360, I love working in Sales and Customer Care. Through my tenure, I have met many people in every business sector, and I enjoy getting to know their business. Aside from work, I enjoy fitness, family, and friends.",
  // },
  {
    name: "Precie",
    position: "Global Customer Service & Billing Manager",
    image: precie,
    bio: "Throughout my career progression from customer service representative to manager. I have never lost sight of employee satisfaction that drives performance. I aim to make sure that the needs of the customers are satisfied to the utmost. As a career woman, I'm also a mother of 2; being able to take care of them and work on what I love is the best thing.",
  },
  {
    name: "Lai",
    position: "Global IT Support Desk Engineer",
    image: lai,
    bio: "Striking the perfect balance between work, life, and family - it's all part of the journey! After over 10 years in this industry, I'm still loving every minute. Love hanging with my family and going to the beach and going on foodie adventures.",
  },
  {
    name: "Ron",
    position: "PSW IT Network Engineer",
    image: ron,
    bio: "I've worked in technology for 5 years. In my free time, I create web content for my YouTube channel. I play console games, and as a side hustle, I do computer repair and CPE installation and configuration in remote places without an internet connection.",
  },
  {
    name: "Jomarie",
    position: "Team Lead VoIp Engineer",
    image: jomarie,
    bio: "IT professional in VoIP telephone system, hardware, networking, and cybersecurity solutions. I like spending time in my shop fixing electronic gadgets, playing around with programmable electronic prototyping boards to create IoT devices. I love being with my kids, family and traveling",
  },
  {
    name: "Rem",
    position: "Social Media & Marketing Manager",
    image: rem,
    bio: "I'm an expert at digital marketing, graphic design, project management, and social media marketing. I've spent more than a decade mastering my craft and delivering amazing results for clients. I enjoy playing basketball, participating in Esports games, and I love technology. I'm constantly looking for innovative ways to use technology to empower people and create positive change.",
  },
  {
    name: "Jr",
    position: "Web Services Manager",
    image: jr,
    bio: "I'm a fullstack developer building & designing websites and applications. Technology is my passion, and I strive to create beautiful stunning interfaces that leave an impression with the user. When I'm not coding, you can find me playing with my kids or basketball.",
  },
  {
    name: "Warren",
    position: "Frontend Developer",
    image: warren,
    bio: "I am a passionate web designer and frontend developer, with a keen eye for detail and a talent for creating visually appealing and user-friendly websites. When I'm not developing websites, I love exploring new places and sample local cuisines. Traveling is one of my favorite hobbies, and I discover hidden gems and iconic landmarks wherever I visit.",
  },
];
const MeetOurLeaders = () => {
  return (
    <>
      <PageBanner title="Meet Our Leaders" bannerImg={banner.src} />
      <Section>
        <div className="m-auto max-w-[1100px] w-full">
          <Text variant="subtitle" className="text-center">
            Team Members
          </Text>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 lg:mt-16">
            {employees.map(({ name, position, image, bio }, index) => (
              <AnimateDiv key={index}>
                <div className="shadow-xl">
                  <Image
                    className="w-full h-auto max-w-[384px] m-auto"
                    src={image}
                    alt={name}
                  />
                  <div className="p-4">
                    <Text className="text-center text-text-DEFAULT text-sm">
                      {position}
                    </Text>
                    <Text
                      variant="caption"
                      className="text-center font-bold uppercase mt-1"
                    >
                      {name}
                    </Text>
                  </div>
                </div>
              </AnimateDiv>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default MeetOurLeaders;
