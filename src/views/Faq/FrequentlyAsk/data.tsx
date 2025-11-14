import { ReactNode } from "react";
import Image from "next/image";

import linkusDownload from "../assets/linkus/linkusdownload.jpg";
import linkusDownload2 from "../assets/linkus/linkusdownload-2.jpg";
import linkusDownload3 from "../assets/linkus/linkusdownload-3.jpg";
import linkusDownload4 from "../assets/linkus/linkusdownload-4.jpg";
import linkusDownload5 from "../assets/linkus/linkusdownload-5.jpg";
import linkusDownload6 from "../assets/linkus/linkusdownload-6.jpg";
import linkusDownload7 from "../assets/linkus/linkusdownload-7.jpg";
import linkusDownload8 from "../assets/linkus/linkusdownload-8.jpg";
import linkusDownload9 from "../assets/linkus/linkusdownload-9.jpg";
import linkusDownload10 from "../assets/linkus/linkusdownload-10.jpg";
import linkusDownload11 from "../assets/linkus/linkusdownload-11.jpg";
import linkusDownload12 from "../assets/linkus/linkusdownload-12.jpg";
import linkusDownload13 from "../assets/linkus/linkusdownload-13.jpg";
import linkusDownload14 from "../assets/linkus/linkusdownload-14.jpg";
import linkusDownload15 from "../assets/linkus/linkusdownload-15.jpg";
import linkusDownload16 from "../assets/linkus/linkusdownload-16.jpg";
import linkusDownload17 from "../assets/linkus/linkusdownload-17.jpg";

type FrequentlyAskData = {
  question: string;
  answer: string | ReactNode;
};

export const frequentlyAskData: FrequentlyAskData[] = [
  {
    question: "How to transfer calls straight to voicemail?",
    answer:
      "Press the dial ** + desired extension (for example **1002) Then press the B TRANSFER key. By doing this, the caller should hear a voicemail prompt and should be able to leave a voicemail. ",
  },
  {
    question: "Linkus Mobile App Setup Instructions",
    answer: (
      <div>
        Once telephone services have been activated, this document will assist
        in setting up your mobile application. <br />
        <br />
        <span className="font-bold">Note to client:</span> <br />
        On behalf of Future Digital 360 we thank you for your trust and
        business. We are always doing our best to provide you with the most
        advanced technology resources available. When you are ready to install
        this app please cut and paste the below message in yellow and email it
        to Support@FutureDigital360.com. You will receive a response back with a
        link, please follow steps 1 through 4 below.
        <br />
        <br />
        Email to:{" "}
        <a href="mailto:support@futuredigital360.com">
          support@futuredigital360.com
        </a>{" "}
        <br />
        <br />
        FD360 Support,
        <br />
        <br />I am ready to install the Linkus mobile app you have provided to
        me, please email me the QR link so I can get started. I understand upon
        receipt of the email I will only have 30 minutes to install otherwise I
        will need to request a new QR link.
        <br /> My email address and telephone extension are as follows:
        <br /> The steps below are show with an iPHone, if you are using an
        Android phone the steps will be very similar
        <br /> 1. First download the application from using one of the two links
        below depending on your smart phone:
        <br />
        <span className="font-bold">Android:</span>{" "}
        <a
          className="text-red-500"
          href="https://play.google.com/store/apps/details?id=com.yeastar.linkus&hl=en_US&gl=US&pli=1"
          target="_blank"
        >
          Yeastar Linkus Mobile Client - Apps on Google Play
        </a>
        <br />
        <span className="font-bold">iPhone:</span>{" "}
        <a
          className="text-red-500"
          href="https://apps.apple.com/app/linkus-mobile-client/id1158760574"
          target="_blank"
        >
          Yeastar Linkus Mobile Client on the App Store (apple.com)
        </a>{" "}
        (2 minutes)
        <br />
        <br />
        Linkus is a VoIP Mobile Client coordinated with Yeastar S-Series VoIP
        PBX that makes your iOS mobile phone an office extension and links you
        and your customers anywhere anytime. Make and receive calls through
        corporate phone network to slash call costs and enhance efficiency with
        consistent in-office experience. <br />
        <br />
        2. From your mobile phone click the App Store and search for Yeastar,
        click to download.
        <br />
        <br />
        <Image src={linkusDownload} alt="linkus app store download" />
        <br />
        <br />
        3. Launch the App after download. On your first launch you will be
        prompted whether to allow Linkus to access your data and your contacts,
        click Allow & continue.
        <br />
        <br />
        <Image src={linkusDownload2} alt="linkus app store download 2" />
        <br />
        <br />
        4.You are ready to check you email and scan the QR code.
        <br /> Open the email sent from FutureDigital360 <br />
        Click the QR code on the Yeastar app, it will ask to access the camera
        on the mobile phone, select OK.
        <br />
        <br />
        5. Scan the QR Code that is open on your computer monitor from the
        email, once scanned you will get the message the Linkus would like to
        access the Microphone, select OK.
        <br />
        <br />
        <div className="md:flex">
          <Image src={linkusDownload3} alt="linkus app store download 3" />
          <Image src={linkusDownload4} alt="linkus app store download 3" />
        </div>
        <br />
        <br />
        6. You are now ready to use this mobile app feature. Thank you for your
        valued business and trust. Future Digital 360
        <br />
        <br />
        This app provided by FD360 is ready to use, some of the key capabilities
        are:
        <br />
        <br />
        Key Capabilities
        <br />
        <br />
        - Make and receive enterprise VoIP calls over your Wi-Fi or mobile data
        networks to lower mobile voice charges
        <br />- One number reach to conceal your personal mobile phone number
        and ensure unified corporate identity
        <br />- Set up flexible ring strategy for Linkus and the desktop phone
        <br />- Select different outbound routes for different destinations
        (local/long-distance/international, etc.)
        <br />- Corporate directory integration with lookup and visual status
        indicator (available/unavailable/busy)
        <br />- Configurable PBX features including Call Transfer, Call
        Forwarding, Call Waiting, DND, and Ring Timeout
        <br />- Support Push Notifications to alert users of incoming calls
        while conserving energy
        <br />
        <br />
        Main Features
        <br />
        <br />
        Call Forwarding
        <br />
        Call History
        <br />
        Call Route Selection
        <br />
        Call Transfer
        <br />
        Call Waiting
        <br />
        Contact Management
        <br />
        Corporate Directory
        <br />
        Do Not Disturb
        <br />
        Extension Status
        <br />
        Hold & Resume
        <br />
        Native Contacts Integration
        <br />
        One Touch Recording
        <br />
        Outbound Route Selection
        <br />
        PUSH Notification
        <br />
        Ring Strategy Selection
        <br />
        Speed Dial/Favorite
        <br />
        Voicemail
        <br />
        <br />
        Specifications
        <br />
        <br />
        iOS Requirement: iOS 8.0 or higher
        <br />
        Network: 2G/3G/4G or Wi-Fi
        <br />
        Protocol: SIP FRC2361
        <br />
        Codec: iLBC
        <br />
        Network Protocol: TCP/IP/UDP, RTP/SRTP/RTCP, HTTP/HTTPS
        <br />
        DTMF: Inband, RFC4733 (RFC2833), Info
        <br />
        <br />
        Important:
        <br />
        <br />
        This application is integrated with Yeastar S-Series VoIP PBX{" "}
        <a
          href="http://www.yeastar.com/s-series-voip-pbx"
          className="text-red-500"
        >
          (http://www.yeastar.com/s-series-voip-pbx)
        </a>
        your administrator must provide you with identity information for you to
        start using.
      </div>
    ),
  },

  {
    question: "Scan To Network - Remove A User",
    answer: (
      <div>
        If you want to remove a user or a scan profile in the SCAN TO NETWORK
        FOLDER, please follow the steps below:
        <br />
        <br /> 1. Go to your printer panel screen and take note of the IP
        Address located at the top center part. Note: Your Printer's IP Address
        should be different from what is shown in the screenshot.
        <br />
        <br />
        <Image src={linkusDownload5} alt="linkus app store download 5" />
        <br />
        <br />
        2. Once you have the IP Address, go to your computer and open a web
        browser (Google Chrome, Edge, Firefox, etc) and type the IP Address in
        the browser address bar and hit enter.
        <br />
        3. You should pull up a page similar to what is shown in the screenshot
        below.
        <br />
        <br />
        <Image src={linkusDownload6} alt="linkus app store download 6" />
        <br />
        <br />
        4. Under <span className="font-bold">Select Option</span>, click{" "}
        <span className="font-bold">'Apps'</span>
        <br />
        <br />
        <Image src={linkusDownload7} alt="linkus app store download 7" />
        <br />
        <br />
        5. Look for{" "}
        <span className="font-bold">'Scan Center - Network Folders'</span> and
        click on it.
        <br />
        <br />
        <Image src={linkusDownload8} alt="linkus app store download 8" />
        <br />
        <br />
        6. The next page will show you something like what is shown below. Click
        the <span className="font-bold">'Configure'</span> button.
        <br />
        <br />
        <Image src={linkusDownload9} alt="linkus app store download 9" />
        <br />
        <br />
        7. Under <span className="font-bold">'Network Folder'</span>, look for
        name that represents the user that you want to delete <br />
        <br />
        <Image src={linkusDownload10} alt="linkus app store download 10" />
        <br />
        <br />
        8. Then click
        <span className="font-bold">'Delete'</span> icon on the right part of
        the user you want to delete.
        <br />
        9. Click <span className="font-bold">'Save'</span> button to apply the
        changes.
      </div>
    ),
  },
  {
    question: "Standard Model Equivalent for BSD Printers",
    answer: (
      <table className="w-full border-collapse max-w-[800px]">
        <thead>
          <tr>
            <th className="text-left p-2 bg-gray-200 border border-gray-300">
              Enterprise Model
            </th>
            <th className="text-left p-2 bg-gray-200 border border-gray-300">
              BSD Model
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td
              className="bg-brand-green/20 p-2 border border-gray-200"
              colSpan={2}
            >
              <strong>
                Enterprise Model Multifunction Color Laser Devices
              </strong>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">CX510de</td>
            <td className="p-2 border border-gray-200">XC2132</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">CX725dhe</td>
            <td className="p-2 border border-gray-200">XC4150</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">CX820dtfe</td>
            <td className="p-2 border border-gray-200">XC6152</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">CX825dte</td>
            <td className="p-2 border border-gray-200">XC8155</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">X748de</td>
            <td className="p-2 border border-gray-200">XS748de</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">X792de</td>
            <td className="p-2 border border-gray-200">XS796de</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">X792dte</td>
            <td className="p-2 border border-gray-200">XS796dte</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">X792dte</td>
            <td className="p-2 border border-gray-200">XS795dte</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">X792dte</td>
            <td className="p-2 border border-gray-200">XS798dte</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">X954dhe</td>
            <td className="p-2 border border-gray-200">XS955dhe</td>
          </tr>

          <tr>
            <td
              className="bg-brand-green/20 p-2 border border-gray-200"
              colSpan={2}
            >
              <strong>Color Laser Printers</strong>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">CX860dte</td>
            <td className="p-2 border border-gray-200">XC8160</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">X925de</td>
            <td className="p-2 border border-gray-200">XS925de</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">X955dhe</td>
            <td className="p-2 border border-gray-200">XS955dhe</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">CS725dte</td>
            <td className="p-2 border border-gray-200">C4150</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">CS820de</td>
            <td className="p-2 border border-gray-200">C6160</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">C748de</td>
            <td className="p-2 border border-gray-200">CS748de</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">C792de</td>
            <td className="p-2 border border-gray-200">CS796de</td>
          </tr>

          <tr>
            <td
              className="bg-brand-green/20 p-2 border border-gray-200"
              colSpan={2}
            >
              <strong>Multifunction Mono Laser Devices</strong>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX511de</td>
            <td className="p-2 border border-gray-200">XM1145</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX611de</td>
            <td className="p-2 border border-gray-200">XM3150</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX710de</td>
            <td className="p-2 border border-gray-200">XM5163</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX711dhe</td>
            <td className="p-2 border border-gray-200">XM5170</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX810de</td>
            <td className="p-2 border border-gray-200">XM7155</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX810dxe</td>
            <td className="p-2 border border-gray-200">XM7155x</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX811de</td>
            <td className="p-2 border border-gray-200">XM7163</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX811dxe</td>
            <td className="p-2 border border-gray-200">XM7163x</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX811dtfe</td>
            <td className="p-2 border border-gray-200">XM7270</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX812de</td>
            <td className="p-2 border border-gray-200">XM7170</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX812dxe</td>
            <td className="p-2 border border-gray-200">XM7170x</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX910de</td>
            <td className="p-2 border border-gray-200">XM9145</td>
          </tr>

          <tr>
            <td
              className="bg-brand-green/20 p-2 border border-gray-200"
              colSpan={2}
            >
              <strong>Monochrome Laser Printers</strong>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX911de</td>
            <td className="p-2 border border-gray-200">XM9155</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MX912dxe</td>
            <td className="p-2 border border-gray-200">XM9165</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MS510de</td>
            <td className="p-2 border border-gray-200">M1145</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MS610de</td>
            <td className="p-2 border border-gray-200">M3150</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MS810de</td>
            <td className="p-2 border border-gray-200">M5155</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MS811de</td>
            <td className="p-2 border border-gray-200">M5163</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-200">MS812de</td>
            <td className="p-2 border border-gray-200">M5170</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    question: "Check & Setup Voice Mail",
    answer: (
      <>
        1. Dial *2 or press <span className="font-bold">'Envelope'</span> button
        on your desk phone
        <br />
        2. Enter the voicemail PIN to access your voicemail. <br />
        <span className="font-bold">Note:</span> The{" "}
        <span className="font-bold">PIN</span> should be the first four digits
        of your service street address, if the street address has between 1 and
        3 digits you’re your default voice password would be followed by the
        number 0(s). Example: if you service street address is 22 Main Street
        your voice mail default password would be 2200, if your street address
        is 12345 Main Street for voice mail default password would be 1234.
        <br />
        <br />
        <span className="font-bold">Note:</span>
        <br />
        - We strongly recommend changing your default password to a unique
        four-digit password that only you would have access to
        <br />- You can also check Voicemail via Email, if the 'Voicemail to
        Email' feature has been enabled on your extension. You can check this
        out if your voice mails are showing in your email inbox. If it is not
        showing up or you would like to enable this feature, please let us know
        at{" "}
        <a href="mailto:support@futuredigital360.com" className="text-red-500">
          support@futuredigital360.com
        </a>
        .
      </>
    ),
  },
  {
    question: "Tools",
    answer: (
      <>
        <a
          className="text-red-500"
          href="https://www.whatsmydns.net"
          target="_blank"
        >
          https://www.whatsmydns.net
        </a>
        <br />
        <a
          className="text-red-500"
          href="https://securitytrails.com"
          target="_blank"
        >
          https://securitytrails.com
        </a>
        <br />
        <a className="text-red-500" href="https://gtmetrix.com" target="_blank">
          https://gtmetrix.com
        </a>
        <br />
      </>
    ),
  },
  {
    question: "Set your Lexmark Color Printer to print in Black & White",
    answer: (
      <>
        1. Go to <span className="font-bold">Start Menu</span> of your Operating
        System and select <span className="font-bold">Devices & Printers</span>
        <br />
        <br />
        <Image src={linkusDownload11} alt="linkus app store download 11" />
        <br />
        <br />
        2. In the next window, select your printer
        <br />
        <br />
        <Image src={linkusDownload12} alt="linkus app store download 12" />
        <br />
        <br />
        3. Right click on it and select{" "}
        <span className="font-bold">Printer Properties</span>
        <br />
        <br />
        <Image src={linkusDownload13} alt="linkus app store download 13" />
        <br />
        <br />
        4. In the next window, click the button{" "}
        <span className="font-bold">Preferences</span>
        <br />
        <br />
        <Image src={linkusDownload14} alt="linkus app store download 14" />
        <br />
        <br />
        5. Another window will appear, go to{" "}
        <span className="font-bold">Quality</span> tab
        <br />
        <br />
        <Image src={linkusDownload15} alt="linkus app store download 15" />
        <br />
        <br />
        6. Tick the two boxes,{" "}
        <span className="font-bold">Print text as black</span> &{" "}
        <span className="font-bold">Print in Black & White.</span>
        <br />
        7. Click <span className="font-bold">Apply</span> button and then the{" "}
        <span className="font-bold">OK</span> button.
      </>
    ),
  },
  {
    question: "To Change/Update your Voicemail Greeting Recordings",
    answer: (
      <>
        1. Dial <span className="font-bold">*2 </span>or press{" "}
        <span className="font-bold">'Envelope'</span> button.
        <br />
        2. Enter the voicemail PIN <span className="font-bold">5656</span>.
        <br />
        3. You have several options to choose from…
        <br />
        <span className="font-bold">Press 0</span> for Mailbox Options. You will
        then be given the choice what type of message you want to record.
        <br />
        <span className="font-bold">Press 1</span> to record your Unavailable
        Message.
        <br />
        <span className="font-bold">Press 2</span> to record your Busy Message.
        <br />
        <span className="font-bold">Press 3</span> to record your name.
        <br />
        <span className="font-bold">Press 4</span> to record your Temporary
        Message.
        <br />
        4. Choose the message option that you want to record, press{" "}
        <span className="font-bold">#</span> to finish the record.
        <br />
        <br />
        <span className="font-bold">Press 1</span> to accept your message.
        <br />
        <span className="font-bold">Press 2</span> to listen to your message.
        <br />
        <span className="font-bold">Press 3</span> to re-record your message if
        you don't like the previous message.
        <br />
        We always recommend you call your voice messaging to ensure it is
        working the way you intended. If you have further issue with this or any
        other item, please call us at{" "}
        <span className="font-bold">480-809-6334</span> or email us with
        requests at{" "}
        <a href="mailto:support@futuredigital360.com" className="text-red-500">
          support@futuredigital360.com.
        </a>
      </>
    ),
  },
  {
    question: "FD360 Social Networking Accounts",
    answer: (
      <>
        <span className="font-bold">Twitter</span>
        <br />
        <a
          className="text-red-500"
          href="https://twitter.com/FutureDigitalUS"
          target="_blank"
        >
          https://twitter.com/FutureDigitalUS
        </a>
        <br />
        <span className="font-bold">Facebook</span>
        <br />
        <a
          className="text-red-500"
          href="https://www.facebook.com/FutureDigital360/"
          target="_blank"
        >
          https://www.facebook.com/FutureDigital360/
        </a>
        <br />
        <span className="font-bold">LinkedIn</span>
        <br />
        <a
          className="text-red-500"
          href="https://www.linkedin.com/company/futuredigital360"
          target="_blank"
        >
          https://www.linkedin.com/company/futuredigital360
        </a>
        <br />
      </>
    ),
  },
  {
    question: "Office 365 Resources",
    answer: (
      <>
        <span className="font-bold">
          How to determine whether your Office 365 account has been compromised
        </span>
        <br />
        <a
          className="text-red-500"
          href="https://support.microsoft.com/en-us/help/2551603/how-to-determine-whether-your-office-365-account-has-been-compromised"
          target="_blank"
        >
          https://support.microsoft.com/en-us/help/2551603/how-to-determine-whether-your-office-365-account-has-been-compromised
        </a>
        <br />
        <br />​
        <span className="font-bold">
          How to fix a compromised (hacked) Microsoft Office 365 account​
        </span>
        <br />
        <a
          className="text-red-500"
          href="https://blogs.technet.microsoft.com/office365security/how-to-fix-a-compromised-hacked-microsoft-office-365-account/"
          target="_blank"
        >
          https://blogs.technet.microsoft.com/office365security/how-to-fix-a-compromised-hacked-microsoft-office-365-account/
        </a>
        <br />
        <br />​ ​<span className="font-bold">Setting Up Inbox Rules</span>
        <br />
        <a
          className="text-red-500"
          href="https://outlook.office.com/mail/options/mail/rules/inboxRules"
          target="_blank"
        >
          https://outlook.office.com/mail/options/mail/rules/inboxRules
        </a>
        <br />
        <br />
        <span className="font-bold">
          Security best practices for Office 365
        </span>
        <br />
        <a
          className="text-red-500"
          href="https://support.office.com/en-us/article/security-best-practices-for-office-365-9295e396-e53d-49b9-ae9b-0b5828cdedc3"
          target="_blank"
        >
          https://support.office.com/en-us/article/security-best-practices-for-office-365-9295e396-e53d-49b9-ae9b-0b5828cdedc3
        </a>
        <br />
        <br />​ ​
        <span className="font-bold">
          Office 365 security roadmap - Top priorities for the first 30 days, 90
          days, and beyond​
        </span>
        <br />
        <a
          className="text-red-500"
          href="https://docs.microsoft.com/en-us/office365/securitycompliance/security-roadmap"
          target="_blank"
        >
          https://docs.microsoft.com/en-us/office365/securitycompliance/security-roadmap
        </a>
        <br />
        <br />​
        <span className="font-bold">
          Recover deleted items in a user's mailbox - Admin Help​
        </span>
        <br />
        <a
          className="text-red-500"
          href="https://support.office.com/en-us/article/Recover-deleted-items-in-a-user-s-mailbox-Admin-Help-eb15194b-63ec-41b0-8d90-1823d3f558e4?ui=en-US&rs=en-US&ad=US"
          target="_blank"
        >
          https://support.office.com/en-us/article/Recover-deleted-items-in-a-user-s-mailbox-Admin-Help-eb15194b-63ec-41b0-8d90-1823d3f558e4?ui=en-US&rs=en-US&ad=US
        </a>
        <br />
        <br />
        <span className="font-bold">
          If you happen to receive suspicious emails, feel free to report them
          to Microsoft:
        </span>
        <br />
        Submit spam, non-spam, and phishing scam messages to Microsoft for
        analysis
        <br />
        <a
          className="text-red-500"
          href="https://docs.microsoft.com/en-us/office365/securitycompliance/submit-spam-non-spam-and-phishing-scam-messages-to-microsoft-for-analysis"
          target="_blank"
        >
          https://docs.microsoft.com/en-us/office365/securitycompliance/submit-spam-non-spam-and-phishing-scam-messages-to-microsoft-for-analysis
        </a>
        <br />
        <br />
        <span className="font-bold">
          Set up multi-factor authentication for Office 365 users
        </span>
        <br />
        <a
          className="text-red-500"
          href="https://support.office.com/en-us/article/Set-up-multi-factor-authentication-for-Office-365-users-8f0454b2-f51a-4d9c-bcde-2c48e41621c6​"
          target="_blank"
        >
          https://support.office.com/en-us/article/Set-up-multi-factor-authentication-for-Office-365-users-8f0454b2-f51a-4d9c-bcde-2c48e41621c6​
        </a>
        <br />
        <br />​
        <span className="font-bold">
          Finding the Multi-Factor Authentication Settings:
        </span>
        <br />​
        <a
          className="text-red-500"
          href="https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx​"
          target="_blank"
        >
          https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx​
        </a>
        <br />
        <br />​<span className="font-bold">Generate App password:</span>
        <br />​
        <a
          className="text-red-500"
          href="https://account.activedirectory.windowsazure.com/AppPasswords.aspx"
          target="_blank"
        >
          https://account.activedirectory.windowsazure.com/AppPasswords.aspx
        </a>
        <br />
        <br />
        <span className="font-bold">
          Once you've enable #MFA, you can take advantage of the Attack
          Simulator Tool:
        </span>
        <br />
        Attack Simulator:{" "}
        <a
          className="text-red-500"
          href="https://protection.office.com/attacksimulator"
          target="_blank"
        >
          https://protection.office.com/attacksimulator
        </a>
        <br />
        <br />
        <span className="font-bold">Attack Simulator (Office 365)</span>
        <br />
        <a
          className="text-red-500"
          href="https://support.office.com/en-us/article/attack-simulator-office-365-da5845db-c578-4a41-b2cb-5a09689a551b?ui=en-US&rs=en-US&ad=US&_lrsc=88ff4b1b-eab2-4752-b41c-dc6634f549aa"
          target="_blank"
        >
          https://support.office.com/en-us/article/attack-simulator-office-365-da5845db-c578-4a41-b2cb-5a09689a551b?ui=en-US&rs=en-US&ad=US&_lrsc=88ff4b1b-eab2-4752-b41c-dc6634f549aa
        </a>
        <br />
        <br />
        <span className="font-bold">
          Introducing Office 365 Attack Simulator
        </span>
        <br />
        <a
          className="text-red-500"
          href="https://youtu.be/5jWGU2VM3SI"
          target="_blank"
        >
          https://youtu.be/5jWGU2VM3SI
        </a>
      </>
    ),
  },
  {
    question: "How to check Call Data Records (CDRs) and Voice Recordings?",
    answer: (
      <>
        1. Login to the PBX <br />
        2. Press the <span className="font-bold">CDR and Recordings</span> tab
        <br />
        <br />
        <Image src={linkusDownload16} alt="linkus app store download 16" />
        <br />
        <br />
        3. Select the <span className="font-bold">Time/Date Range</span> you are
        searching for.
        <br />
        <br />
        <Image src={linkusDownload17} alt="linkus app store download 17" />
        <br />
        <br />
        4. Listen or download to listen. <br />
        5. If you are searching for a specific number you press the Advanced
        Options on the left of that window and you will have to check on Number
        Fuzzy Search to find that specific number.
        <br />
        <br />
        <Image src={linkusDownload17} alt="linkus app store download 17" />
        <br />
        <br />
        <span className="font-bold">
          Note: These instructions are applicable to the Cloud PBX as well, not
          just the S-series
        </span>
      </>
    ),
  },
];
