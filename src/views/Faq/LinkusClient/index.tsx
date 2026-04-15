import PageBanner from "@/containers/PageBanner";
import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import banner from "../assets/contactus-banner.webp";

const LinkusClient = () => {
  return (
    <>
      <PageBanner
        title="VoIP FAQ for Desktop and Mobile App"
        bannerImg={banner.src}
      />
      <Section>
        <AnimateDiv className="w-full">
          <div className="">
            <div className="">
              <Text className="leading-7">
                Welcome to <strong>Linkus UC Clients</strong>. With Linkus, the
                features of a desk phone are accessible on your web browser,
                mobile device, and desktop. Available using any browsers,
                Microsoft Windows, macOS, iOS, and Android, Linkus makes
                real-time business communication easy across multiple devices,
                providing presence, voicemail & recording lists, click-to-call,
                call pop-up, contacts, call logs, and more business-enhancing
                features.
              </Text>
            </div>

            <div className="mb-8">
              <h2 className="font-semibold mb-1 mt-8 text-lg">
                Extension Information
              </h2>
              <Text className="leading-7">
                Extension Number: (you will have a 3 or 4 digit extension
                number)
              </Text>
              <Text className="leading-7 mt-4">
                Voicemail PIN: (your initial PIN is provided to you during your
                onboarding experience, if you do not have this please email us
                at{" "}
                <a
                  className="text-blue-500"
                  href="mailto:support@futuredigital360.com"
                >
                  support@futuredigital360.com
                </a>{" "}
                or you can text us at{" "}
                <a className="text-blue-500" href="tel:4808096334">
                  480-809-6334
                </a>
              </Text>
              <Text className="leading-7 mt-4">
                You can either press *2 and the extension number on the dial pad
                or log in to Linkus UC Clients to listen to retrieve your
                voicemails.
              </Text>
            </div>
            <div className="mb-8">
              <h2 className="font-semibold mb-1 mt-8 text-lg">
                Linkus Mobile Client
              </h2>
              <ul className="flex flex-col p-4 gap-2 mt-2 list-decimal">
                <li>
                  <p>
                    Download Linkus Mobile Client by scanning the QR code below
                    or from your APP Store or Google Play.
                  </p>
                </li>
                <li>
                  <p>
                    Open Linkus Mobile Client and log in via the login link or
                    by scanning the QR code
                  </p>
                </li>
                <li>
                  <p>
                    Linkus will automatically detect the login account
                    information, please confirm it and click OK to log in.
                  </p>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="font-semibold mb-1 mt-8 text-lg">
                Linkus Desktop Client
              </h2>
              <ul className="flex flex-col p-4 gap-2 mt-2 list-decimal">
                <li>
                  <p>
                    Download Linkus Desktop Client from{" "}
                    <a
                      href="https://image.yeastar.com/Yeastardownload/Linkus-desktop-win-setup.exe"
                      target="_blank"
                      className="text-blue-500"
                    >
                      https://image.yeastar.com/Yeastardownload/Linkus-desktop-win-setup.exe
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    Copy the login link, open Linkus Desktop Client, and paste
                    it.
                  </p>
                </li>
                <li>
                  <p>
                    Linkus will automatically detect the login account
                    information, please confirm it and click OK to log in.
                  </p>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="font-semibold mb-1 mt-8 text-lg">
                Important reminders:
              </h2>
              <Text className="leading-7 mt-2">
                Login Link for Linkus Mobile and Desktop Client: the login link
                is valid for 1 day(s) and can be used once only.
              </Text>
              <Text className="leading-7 mt-2">
                QR Code for Linkus Mobile Client: the QR Code is valid for 1
                day(s) and can be used once only.
              </Text>
              <Text className="leading-7 mt-2">
                If your link and/or QR code is not valid, email{" "}
                <a
                  className="text-blue-500"
                  href="mailto:support@futuredigital360.com"
                >
                  support@futuredigital360.com
                </a>{" "}
                with your extension number or email address that needs this
                information so that we can resend it, or you may text us at{" "}
                <a className="text-blue-500" href="tel:4808096334">
                  480-809-6334
                </a>{" "}
                with this information.
              </Text>
            </div>
          </div>
        </AnimateDiv>
      </Section>
    </>
  );
};

export default LinkusClient;
