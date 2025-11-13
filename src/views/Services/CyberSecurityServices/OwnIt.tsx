import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import Image from "next/image";

import cycle from "./assets/cycle.png";
import ownItImage from "./assets/own-it.svg";
import protectIt from "./assets/protectit.svg";

const OwnIt = () => {
  return (
    <Section>
      <div className="w-full max-w-[1320px] m-auto">
        <AnimateDiv>
          <Image
            className="block m-auto max-sm:w-4/5"
            src={cycle}
            alt="The 5-Step Approach"
          />
        </AnimateDiv>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 text-text-DEFAULT">
          <div className="flex flex-col justify-center gap-6">
            <AnimateDiv>
              <Text variant="subtitle">Own It</Text>
            </AnimateDiv>
            <AnimateDiv>
              <Text className="leading-8" variant="body">
                Ever feel like your devices are listening to you? There is some
                truth to the fear, but the real risk is not in targeted
                advertising, but in what information you allow to be shared with
                app developers, social media platforms and the public. In the
                age of social media and connected apps for literally everything,
                what you share and who you share it with on the many platforms
                can make or break your
                <strong> business and career</strong>. Here are three tips to
                help you <strong>#OwnIT</strong> on social media:
              </Text>
            </AnimateDiv>
            <ul className="flex flex-col gap-5">
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="font-bold">Check your privacy settings</Text>
                  <Text className="leading-8">
                    Who can see your social media pages? Do you limit items to
                    just friends or are your pages public? It is also important
                    to be
                    <strong>careful about what you share</strong>, if you
                    wouldn’t want your grandmother to see it, keep it off of the
                    web.
                  </Text>
                </AnimateDiv>
              </li>
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="font-bold">
                    Pay attention to permissions
                  </Text>
                  <Text className="leading-8">
                    FaceApp (the Russian face aging app) is just the latest to
                    induce mass panic when people realized their photos had been
                    permanently been uploaded to the app’s server. Be selective
                    when
                    <strong>agreeing to install apps</strong> (and grant
                    permissions) on your devices. If an app wants access to
                    sensitive data on your phone, be sure it is one you can
                    trust.
                  </Text>
                </AnimateDiv>
              </li>
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="font-bold">Delete unused apps</Text>
                  <Text>
                    Remember that trending app from four months ago? No? Me
                    either.
                    <strong>Delete unused apps</strong> from your devices to
                    prevent inadvertent sharing.
                  </Text>
                </AnimateDiv>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <AnimateDiv>
              <Image
                className="w-4/5 lg:w-auto max-w-[580px] max-sm:m-auto lg:ml-auto"
                src={ownItImage}
                alt="Own It"
              />
            </AnimateDiv>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 text-text-DEFAULT">
          <div className="flex flex-col justify-center gap-6 lg:order-2">
            <AnimateDiv>
              <Text variant="subtitle">Protect It</Text>
            </AnimateDiv>
            <AnimateDiv>
              <Text className="leading-8" variant="body">
                With all of the digital devices used personally and in business
                today there are countless opportunities for hackers to access
                data. Earlier this month, we shared how to{" "}
                <strong>#SecureIT</strong> with strong passwords. But, to be
                truly cyber smart, securing your data is only part of the
                equation — you also need to <strong>#ProtectIT</strong>
              </Text>
            </AnimateDiv>
            <AnimateDiv>
              <Text>
                Here are a few key things that every business should do to
                #ProtectIT:
              </Text>
            </AnimateDiv>
            <ul className="flex flex-col gap-5">
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="font-bold">
                    Build and maintain a strong firewall
                  </Text>
                  <Text className="leading-8">
                    Keep your users away from dangerous usage and intrusion by
                    hackers. Your <strong>firewall</strong> is the first line of
                    defense against
                    <strong> cyber threats</strong>.
                  </Text>
                </AnimateDiv>
              </li>
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="font-bold">Secure WiFi networks</Text>
                  <Text className="leading-8">
                    Restrict who is allowed on your wireless networks. If you
                    allow guests on your network, keep their connection private
                    from your own. If you access guest networks when out and
                    about, consider extra internal security on your devices to
                    <strong> protect data</strong>.
                  </Text>
                </AnimateDiv>
              </li>
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="font-bold">Keep your tech current</Text>
                  <Text>
                    There is nothing that hackers like more than{" "}
                    <strong>outdated software </strong>
                    and systems that they already know how to sneak into. Be
                    sure to frequently update your tech infrastructure and
                    antivirus software.
                  </Text>
                </AnimateDiv>
              </li>
              <li className="">
                <AnimateDiv className="pl-10 relative before:w-6 before:h-6 before:bg-[#E5F3FD] before:rounded-full before:absolute before:left-0 before:content-['✓'] before:text-center before:text-brand-green">
                  <Text className="font-bold">Backup, backup, backup</Text>
                  <Text>
                    Ensure you have a system in place that includes{" "}
                    <strong>off-site backups</strong> of your data both online
                    and offline.
                  </Text>
                </AnimateDiv>
              </li>
            </ul>
            <AnimateDiv>
              <Text className="">
                Your path to <strong> #ProtectIT</strong> starts with an
                evaluation of what you are presently doing. We can help, give us
                a call or send us a message to review current efforts.
              </Text>
            </AnimateDiv>
          </div>
          <div className="flex flex-col justify-center lg:order-1">
            <AnimateDiv>
              <Image
                className="w-4/5 lg:w-auto max-w-[580px] max-sm:m-auto lg:mr-auto"
                src={protectIt}
                alt="Own It"
              />
            </AnimateDiv>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OwnIt;
