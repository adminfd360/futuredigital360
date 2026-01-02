import PageBanner from "@/containers/PageBanner";
import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import Image from "next/image";
import Form from "./Form";

import map from "@/containers/Footer/assets/map.png";
import csr from "@/containers/Footer/assets/customer.png";
import email from "@/containers/Footer/assets/mail.png";

import contactUs from "./assets/contactus-banner.webp";

const ContactUs = () => {
  return (
    <>
      <PageBanner title="Contact Us" bannerImg={contactUs.src} />
      <Section className="bg-[#F9F9F9]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnimateDiv>
            <div className="bg-white px-4 py-6 min-h-auto lg:min-h-[238px] flex justify-center items-center flex-col shadow-lg">
              <div className="relative rounded-full bg-accent-100 w-[82px] h-[82px] flex justify-center items-center">
                <Image
                  src={map}
                  alt="map"
                  className="object-contain max-w-[35px]"
                />
              </div>
              <Text className="font-semibold mt-5">Visit Us</Text>
              <Text className="">Scottsdale AZ 85258</Text>
              <Text className="opacity-0 invisible">Scottsdale AZ 85258</Text>
            </div>
          </AnimateDiv>
          <AnimateDiv>
            <div className="bg-white px-4 py-6 min-h-auto lg:min-h-[238px] flex justify-center items-center flex-col shadow-lg">
              <div className="relative rounded-full bg-accent-100 w-[82px] h-[82px] flex justify-center items-center">
                <Image
                  src={csr}
                  alt="map"
                  className="object-contain max-w-[35px]"
                />
              </div>
              <Text className="font-semibold mt-5 mb-2">Let's Talk</Text>
              <Text className="mb-2">
                <strong>Customer Service: </strong>
                <a className="text-brand-600" href="tel:8555533360">
                  855.55-FD360 (3.3360)
                </a>
              </Text>
              <Text className="">
                <strong>Tech Support: </strong>
                <a className="text-brand-600" href="tel:4808096328">
                  480.809.6328
                </a>
              </Text>
            </div>
          </AnimateDiv>
          <AnimateDiv>
            <div className="bg-white px-4 py-6 min-h-auto lg:min-h-[238px] flex justify-center items-center flex-col shadow-lg">
              <div className="relative rounded-full bg-accent-100 w-[82px] h-[82px] flex justify-center items-center">
                <Image
                  src={email}
                  alt="map"
                  className="object-contain max-w-[35px]"
                />
              </div>
              <Text className="font-semibold mt-5 mb-2">Email Us</Text>
              <Text className="mb-2">
                <a
                  className="text-brand-600"
                  href="mailto:info@futuredigital360.com"
                >
                  info@futuredigital360.com
                </a>
              </Text>
              <Text className="">
                <a
                  className="text-brand-600"
                  href="mailto:support@futuredigital360.com"
                >
                  support@futuredigital360.com
                </a>
              </Text>
            </div>
          </AnimateDiv>
        </div>
      </Section>
      <Form />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13299.97942051474!2d-111.892723!3d33.55351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743eaf36b50b%3A0xbcbeef0088c124bc!2sFuture%20Digital%20360!5e0!3m2!1sen!2sph!4v1764358707432!5m2!1sen!2sph"
        width={600}
        height={450}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </>
  );
};

export default ContactUs;
