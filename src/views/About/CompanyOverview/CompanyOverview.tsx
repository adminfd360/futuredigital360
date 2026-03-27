import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import Image from "next/image";
import legacy from "../assets/legacy.png";
import technology from "../assets/technology.png";
import veteran from "../assets/veteran.png";

const CompanyOverview = () => {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex justify-center items-center">
            <AnimateDiv className="w-full">
              <Image
                className="w-full object-cover max-w-[420px] m-auto"
                src={legacy}
                alt="Our Legacy of Innovation"
              />
            </AnimateDiv>
          </div>
          <div>
            <AnimateDiv>
              <Text variant="subtitle">Our Legacy of Innovation</Text>
            </AnimateDiv>
            <AnimateDiv>
              <Text
                className="mt-6 text-text-DEFAULT leading-8 lg:leading-9"
                variant="body"
              >
                <strong> Future Digital 360</strong> has been in the technology
                business since 1986 and started as an Office Equipment Dealer.
                The founders of our company knew that for a small locally owned
                business to compete against national giants it would have to
                provide reliable equipment and extraordinary service. We provide
                all facets of technology for any business size including{" "}
                <strong>
                  Managed Network and IT services, Web Development, Cyber
                  Security, Communication Solutions and Multifunctional Products
                </strong>
                . Along with our extensive suite of scanning, printing and
                copying equipment both B/W and color our offerings include,
                follow-up maintenance, supplies and support. We worked hard. We
                grew. We formed a sales department in 2001, and became
                Authorized Dealers for Lexmark International and Hewlett
                Packard, two of the most established, reliable,
                customer-oriented companies in the office equipment industry.
                It’s a trend that continues today – partnering with the best.
              </Text>
            </AnimateDiv>
          </div>
        </div>
      </Section>
      <Section className="bg-accent-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="order-2 flex justify-center items-center">
            <AnimateDiv className="w-full">
              <Image
                className="w-full object-cover max-w-[500px] m-auto"
                src={technology}
                alt="Our Legacy of Innovation"
              />
            </AnimateDiv>
          </div>
          <div className="order-1">
            <AnimateDiv>
              <Text variant="subtitle">
                Technology Expansion Through the Years
              </Text>
            </AnimateDiv>
            <AnimateDiv>
              <Text
                className="mt-6 text-text-DEFAULT leading-8 lg:leading-8"
                variant="body"
              >
                In October 2002 <strong>Jim Sauerhoefer</strong> a{" "}
                <strong>USAF Veteran</strong> purchased the majority shares of
                the corporation and headquartered in the Scottsdale business
                airpark community, modern warehousing for spare parts, and
                complete lab for testing along with a demo facility were created
                to accommodate and showcase the increasingly complex and
                sophisticated emerging technologies and how the interact with
                each other. We renewed our focus on Customer Care through
                implementation of automated Service Dispatching system, Order
                notification, and our innovative and comprehensive Care plans.
                In December 2004 Future Digital 360 acquired Budget Business
                Systems, a <strong>Tempe, Arizona</strong> office supply dealer
                who strengthened the corporation with purchasing power to
                continue our quest to build strong corporation partnerships
                throughout the Western United States. In October 2005 Future
                Digital 360 acquired Applied Copier Technologies, a Gilbert
                Arizona office equipment provider for the east valley extending
                our markets all the way to Tucson. In September 2010 Future
                Digital 360 expanded to offer a full range of web service,
                including hosting advanced design and management of websites. We
                understand the importance of a trusted partner and ensure our
                clients are in control of their worldwide presence and
                information. In October 2012 Future Digital 360 became an FCC
                authorized telephony company.
              </Text>
            </AnimateDiv>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="order-2 lg:order-1">
            <AnimateDiv className="wfull">
              <Image
                className="w-full h-auto max-w-[500px] m-auto"
                src={veteran}
                alt="Our Legacy of Innovation"
              />
            </AnimateDiv>
          </div>
          <div className="order-1 lg:order-2">
            <AnimateDiv>
              <Text variant="subtitle">
                A Veteran-Owned Commitment to Excellence
              </Text>
            </AnimateDiv>
            <AnimateDiv>
              <Text className="mt-6 text-text-DEFAULT leading-9" variant="body">
                Our owner as a military veteran he understood the intelligence
                world well. Our communication systems are focused on cyber and
                communication security. We provide both on-premise and
                cloud-based telephone systems and service, giving our customers
                the business resources, they need to grow and become successful.
                As we exist today, Future Digital 360 is the service
                organization with decades of experience and customer
                satisfaction. As a Veteran owned business, we have built our
                company on the highest of ethical and full disclosure standards.
                Today we have the capability to install an advanced office
                system for any size business, or implement a cloud-based system
                and connect multiple offices around the world. We know our
                industry inside and out and offer the best products, practices
                and services in the business. Give us a call at 480-809-6328 and
                find out for yourself.
              </Text>
            </AnimateDiv>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CompanyOverview;
