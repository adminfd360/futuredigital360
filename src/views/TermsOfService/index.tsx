"use client";
import PageBanner from "@/containers/PageBanner";
import Section from "@/components/Section";
import banner from "./assets/terms-service-banner.webp";
const TermsOfService = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner.src}
        title="Text Messaging (SMS/MMS) Terms of Service"
      />
      <Section>
        <div className="w-full">
          <div className="mb-8">
            <em>
              For customers using the texting features within the
              FutureDigital360.com LLC (FD360) VoIP platform powered by
              Bandwidth and Yeastar.
            </em>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              1. Introduction
            </h2>
            <p className="leading-7">
              These Terms of Service (“Terms”) govern your use of the SMS/MMS
              text messaging features (“Texting Service”) provided through the
              FutureDigital360.com LLC (“FD360”) VoIP system, which utilizes
              Bandwidth as the underlying carrier/SIP provider and Yeastar as
              the VoIP software platform. By enabling or using the Texting
              Service, you agree to these Terms in addition to FD360’s general
              VoIP service agreement.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              2. Service Providers & Infrastructure
            </h2>
            <p className="leading-7">
              The Texting Service is delivered through the following components:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>
                <strong>Bandwidth:</strong> carrier connectivity, message
                routing, and compliance enforcement
              </li>
              <li>
                <strong>Yeastar:</strong> PBX/VoIP platform and messaging
                interface
              </li>
              <li>
                <strong>FD360:</strong> provisioning, configuration, billing,
                and customer support
              </li>
            </ul>
            <p className="leading-7 mt-4">
              Your use of the Texting Service is subject to the policies and
              restrictions of these upstream providers.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              3. Acceptable Use Requirements
            </h2>
            <p className="leading-7">You agree to comply with:</p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Bandwidth’s Acceptable Use Policy</li>
              <li>CTIA Messaging Principles &amp; Best Practices</li>
              <li>TCPA (Telephone Consumer Protection Act)</li>
              <li>Carrier-specific A2P messaging rules</li>
              <li>Yeastar system usage guidelines</li>
              <li>FD360’s Acceptable Use Policy</li>
            </ul>
            <p className="leading-7 mt-4">
              You may <strong>not</strong> use the Texting Service for:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Unsolicited or unauthorized marketing (“spam”)</li>
              <li>
                High-risk or prohibited content, including SHAFT (sex, hate,
                alcohol, firearms, tobacco)
              </li>
              <li>Fraud, impersonation, phishing, or deceptive practices</li>
              <li>Malware, harmful links, or security-threatening content</li>
              <li>
                Emergency or life-critical messaging unless explicitly approved
              </li>
              <li>
                Any activity that triggers carrier filtering or violates
                Bandwidth’s policies
              </li>
            </ul>
            <p className="leading-7 mt-4">
              FD360 may suspend or terminate service for violations.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              4. Consent, Opt-In, and Opt-Out Obligations
            </h2>
            <p className="leading-7">You are solely responsible for:</p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>
                Obtaining valid, documented consent from all message recipients
              </li>
              <li>Maintaining opt-in records</li>
              <li>
                Including opt-out instructions when required (“Reply STOP to
                unsubscribe”)
              </li>
              <li>
                Immediately honoring STOP, END, CANCEL, UNSUBSCRIBE, or QUIT
                requests
              </li>
              <li>
                Ensuring your messaging flows comply with A2P 10DLC rules (if
                applicable)
              </li>
            </ul>
            <p className="leading-7 mt-4">
              Carrier penalties or regulatory fines resulting from
              non-compliance are your responsibility.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              5. A2P 10DLC Registration (U.S. Only)
            </h2>
            <p className="leading-7">
              If you send messages to U.S. numbers using 10-digit long codes:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>
                You must register your Brand and Campaigns through FD360’s
                Bandwidth-supported registration process
              </li>
              <li>You must provide accurate use-case descriptions</li>
              <li>Carriers may block or surcharge unregistered traffic</li>
              <li>
                FD360 may suspend messaging if you fail to maintain compliance
              </li>
            </ul>
            <p className="leading-7 mt-4">
              Carrier penalties or regulatory fines resulting from
              non-compliance are your responsibility.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              6. Message Delivery & Performance
            </h2>
            <p className="leading-7">
              Because the Texting Service relies on Bandwidth’s carrier network
              and third-party mobile operators, FD360 does <strong>not</strong>{" "}
              guarantee:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Delivery of all messages</li>
              <li>Delivery within a specific timeframe</li>
              <li>Delivery to all carriers or geographic regions</li>
              <li>
                Delivery of MMS content due to device or carrier limitations
              </li>
            </ul>
            <p className="leading-7 mt-4">
              Carrier filtering, network congestion, or regulatory restrictions
              may impact performance.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              7. Fees &amp; Billing
            </h2>
            <p className="leading-7">
              You agree to pay all applicable charges, including:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Per-message SMS/MMS fees</li>
              <li>Carrier surcharges</li>
              <li>A2P 10DLC registration and campaign fees</li>
              <li>Bandwidth-imposed compliance or pass-through fees</li>
              <li>
                Any Yeastar-related licensing or feature fees (if applicable)
              </li>
            </ul>
            <p className="leading-7 mt-4">
              Fees may change based on carrier or regulatory updates.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              8. Data Privacy &amp; Security
            </h2>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>
                Message content and metadata may be processed by Bandwidth and
                Yeastar solely for delivery and system functionality
              </li>
              <li>
                FD360 does not access message content except as required for
                troubleshooting, abuse prevention, or legal compliance
              </li>
              <li>
                You are responsible for securing your Yeastar PBX credentials,
                API keys, and user accounts
              </li>
              <li>
                You must comply with applicable privacy laws (e.g., GDPR, CCPA)
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              9. Automated or High-Volume Messaging
            </h2>
            <p className="leading-7">You may not:</p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>
                Use automated systems to send high-volume messages without
                proper A2P registration
              </li>
              <li>
                Attempt to evade carrier filtering (“snowshoeing,” rotating
                numbers, etc.)
              </li>
              <li>
                Use the Texting Service for mass marketing without explicit
                consent
              </li>
            </ul>
            <p className="leading-7 mt-4">
              Bandwidth and carriers may block traffic that appears abusive or
              non-compliant.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              10. Suspension &amp; Termination
            </h2>
            <p className="leading-7">
              FD360 may suspend or terminate your Texting Service if:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>You violate these Terms or upstream provider policies</li>
              <li>
                Your traffic triggers carrier blocking or compliance violations
              </li>
              <li>Your usage poses a security or operational risk</li>
              <li>Bandwidth or Yeastar requires FD360 to take action</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              11. Service Modifications
            </h2>
            <p className="leading-7">
              FD360 may modify, limit, or discontinue the Texting Service at any
              time due to:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Carrier policy changes</li>
              <li>Regulatory requirements</li>
              <li>Bandwidth or Yeastar platform updates</li>
              <li>Security or operational needs</li>
            </ul>
            <p className="leading-7 mt-4">
              Material changes will be communicated through your account or
              email.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              12. Limitation of Liability
            </h2>
            <p className="leading-7">
              To the maximum extent permitted by law, FD360 is not liable for:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Undelivered or delayed messages</li>
              <li>Carrier filtering or blocking</li>
              <li>Regulatory fines resulting from your non-compliance</li>
              <li>Losses arising from misuse of the Texting Service</li>
              <li>Actions taken by Bandwidth, Yeastar, or mobile carriers</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              13. Governing Law
            </h2>
            <p className="leading-7">
              These Terms are governed by the laws of the{" "}
              <strong>State of Arizona</strong>, without regard to
              conflict-of-law principles.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default TermsOfService;
