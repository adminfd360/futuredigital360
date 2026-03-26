"use client";
import PageBanner from "@/containers/PageBanner";
import Section from "@/components/Section";
import banner from "./assets/privacy-banner.webp";
const TermsOfService = () => {
  return (
    <>
      <PageBanner
        bannerImg={banner.src}
        title="Acceptable Use & Privacy Policy"
      />
      <Section>
        <div className="w-full">
          <div className="">
            <h2 className="text-blue-500 font-semibold mb-1 text-lg">
              1. Purpose
            </h2>
            <p className="leading-7">
              This Acceptable Use &amp; Privacy Policy (“Policy”) outlines the
              rules, responsibilities, and privacy practices governing the use
              of all services provided by FutureDigital360.com LLC (“FD360”),
              including VoIP services, SMS/MMS messaging, data services, and any
              related systems or platforms. This Policy is designed to protect
              network integrity, ensure regulatory compliance, and safeguard
              user privacy.
            </p>
            <p className="leading-7 mt-4">
              By using FD360 services, you agree to comply with this Policy in
              addition to all other applicable FD360 terms, including the Text
              Messaging Terms of Service and the general VoIP Service Agreement.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold mb-1 mt-8 text-lg">
              Part I — Acceptable Use Policy (AUP)
            </h2>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              2. Prohibited Activities
            </h2>
            <p className="leading-7">
              You may not use FD360 services for any unlawful, harmful, or
              abusive purpose. Prohibited activities include, but are not
              limited to:
            </p>

            <p className="leading-7 mt-4 font-semibold">
              2.1 Illegal or Unlawful Use
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>Violating any local, state, federal, or international law</li>
              <li>
                Engaging in fraud, identity theft, impersonation, or deceptive
                practices
              </li>
              <li>
                Transmitting content that infringes on intellectual property
                rights
              </li>
            </ul>

            <p className="leading-7 mt-4 font-semibold">
              2.2 Harmful or Abusive Behavior
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>
                Harassment, threats, hate speech, or abusive communications
              </li>
              <li>Dissemination of malware, viruses, or malicious code</li>
              <li>
                Attempting to gain unauthorized access to systems, networks, or
                accounts
              </li>
            </ul>

            <p className="leading-7 mt-4 font-semibold">
              2.3 High-Risk or Restricted Content
            </p>
            <p className="leading-7 mt-2">
              FD360 strictly prohibits the transmission of content involving:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>
                <strong>SHAFT</strong> categories: sex, hate, alcohol, firearms,
                tobacco
              </li>
              <li>Pornographic or sexually explicit material</li>
              <li>Illegal drugs or controlled substances</li>
              <li>Violence, extremism, or incitement</li>
              <li>
                Gambling (unless explicitly permitted by law and carriers)
              </li>
              <li>
                Any content banned by carriers, Bandwidth, or CTIA guidelines
              </li>
            </ul>

            <p className="leading-7 mt-4 font-semibold">2.4 Network Abuse</p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>Interfering with or disrupting FD360 systems or networks</li>
              <li>Overloading or attempting to degrade service performance</li>
              <li>
                Using automated tools or bots to generate excessive traffic
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              3. Messaging &amp; Communications Restrictions
            </h2>

            <p className="leading-7 mt-2 font-semibold">
              3.1 Unsolicited Communications
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>Sending spam or bulk unsolicited messages</li>
              <li>Sending marketing messages without proper consent</li>
              <li>Failing to honor opt-out requests immediately</li>
            </ul>

            <p className="leading-7 mt-4 font-semibold">
              3.2 A2P 10DLC Compliance
            </p>
            <p className="leading-7 mt-2">For U.S. messaging:</p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>All A2P 10DLC traffic must be properly registered</li>
              <li>Unregistered or misleading campaigns are prohibited</li>
              <li>
                Snowshoeing, number rotation, or evasion tactics are forbidden
              </li>
            </ul>

            <p className="leading-7 mt-4 font-semibold">
              3.3 Misrepresentation
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>Impersonating another business, person, or organization</li>
              <li>Using misleading sender IDs or deceptive message content</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              4. Security Requirements
            </h2>
            <p className="leading-7">
              You must take reasonable steps to secure your systems and
              accounts, including:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Protecting PBX credentials, passwords, and API keys</li>
              <li>Restricting access to authorized personnel</li>
              <li>Implementing safeguards against unauthorized use</li>
              <li>Monitoring your systems for suspicious activity</li>
            </ul>
            <p className="leading-7 mt-4">
              FD360 may require security updates or configuration changes if
              your system poses a risk to the network.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              5. System &amp; Network Integrity
            </h2>
            <p className="leading-7 mt-2">
              You may not engage in activities that compromise FD360’s
              infrastructure, including:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>
                Attempting to bypass service restrictions or authentication
              </li>
              <li>Interfering with FD360’s ability to deliver services</li>
              <li>Using FD360 services to attack or probe other networks</li>
            </ul>
            <p className="leading-7 mt-4">
              FD360 reserves the right to take immediate action to protect
              network stability.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              6. Fair Use &amp; Resource Consumption
            </h2>
            <p className="leading-7 mt-2">
              FD360 may impose limits or restrictions if your usage:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Exceeds reasonable operational thresholds</li>
              <li>Impacts other customers</li>
              <li>Violates carrier or regulatory guidelines</li>
            </ul>
            <p className="leading-7 mt-4">
              High-volume or automated messaging may require additional
              approvals or registrations.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              7. Enforcement &amp; Remedies
            </h2>
            <p className="leading-7 mt-2">
              FD360 may take any of the following actions for violations of this
              Policy:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Issue warnings or require corrective action</li>
              <li>Suspend or restrict service access</li>
              <li>Terminate service for repeated or severe violations</li>
              <li>Block traffic that violates carriers or regulatory rules</li>
              <li>Report unlawful activity to authorities</li>
            </ul>
            <p className="leading-7 mt-4">
              You are responsible for any fines, penalties, or damages resulting
              from your misuse of FD360 services.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-semibold mb-1 mt-8 text-lg">
              Part II — Privacy Policy
            </h2>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              8. Information We Collect
            </h2>
            <p className="leading-7 mt-2">
              FD360 collects only the information necessary to provide and
              support our services. This may include:
            </p>

            <p className="leading-7 mt-4 font-semibold">
              8.1 Account Information
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>Name, business name, address, email, phone number</li>
              <li>Billing and payment information</li>
            </ul>

            <p className="leading-7 mt-4 font-semibold">
              8.2 Service Usage Data
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>Call logs, SMS/MMS metadata, and routing information</li>
              <li>Device, IP address, and system configuration details</li>
              <li>Logs related to service performance and security</li>
            </ul>

            <p className="leading-7 mt-4 font-semibold">8.3 Message Content</p>
            <p className="leading-7 mt-2">
              FD360 does <strong>not</strong> access or review message content
              except:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-2">
              <li>When required for troubleshooting</li>
              <li>When investigating abuse or security issues</li>
              <li>When required by law, regulation, or court order</li>
            </ul>
            <p className="leading-7 mt-4">
              Message content may be processed by upstream providers (e.g.,
              Bandwidth) solely for delivery.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              9. How We Use Your Information
            </h2>
            <p className="leading-7 mt-2">
              FD360 uses collected information to:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Authenticate users and secure accounts</li>
              <li>Process billing and manage customer accounts</li>
              <li>Detect and prevent fraud, abuse, and security threats</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p className="leading-7 mt-4">
              FD360 does <strong>not</strong> sell or rent customer data.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              10. Data Sharing
            </h2>
            <p className="leading-7 mt-2">FD360 may share data only with:</p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>
                <strong>Upstream service providers</strong> (e.g., Bandwidth,
                Yeastar) as required for service delivery
              </li>
              <li>
                <strong>Regulators or law enforcement</strong> when legally
                required
              </li>
              <li>
                <strong>Third-party vendors</strong> who support billing,
                security, or operations
              </li>
            </ul>
            <p className="leading-7 mt-4">
              All third parties are required to protect your data and use it
              only for authorized purposes.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              11. Data Security
            </h2>
            <p className="leading-7 mt-2">
              FD360 implements reasonable administrative, technical, and
              physical safeguards to protect customer data, including:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Encryption where applicable</li>
              <li>Access controls and authentication</li>
              <li>Monitoring suspicious activity</li>
              <li>Secure data storage practices</li>
            </ul>
            <p className="leading-7 mt-4">
              No system is completely secure, but FD360 acts appropriately to
              reduce risk.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              12. Data Retention
            </h2>
            <p className="leading-7 mt-2">
              FD360 retains data only as long as necessary to:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Provide services</li>
              <li>Meet legal or regulatory requirements</li>
              <li>Resolve disputes or enforce agreements</li>
            </ul>
            <p className="leading-7 mt-4">
              Retention periods may vary based on data type and jurisdiction.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              13. Customer Responsibilities
            </h2>
            <p className="leading-7 mt-2">You are responsible for:</p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Securing your own systems, devices, and credentials</li>
              <li>
                Ensuring your use of FD360 services complies with all laws
              </li>
              <li>Maintaining consent and opt-in records for messaging</li>
              <li>Protecting any personal data you collect or transmit</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              14. Changes to This Policy
            </h2>
            <p className="leading-7 mt-2">
              FD360 may update or modify this Policy at any time to reflect:
            </p>
            <ul className="list-disc list-inside leading-7 flex flex-col gap-2 mt-4">
              <li>Regulatory changes</li>
              <li>Carrier requirements</li>
              <li>Security needs</li>
              <li>Operational improvements</li>
            </ul>
            <p className="leading-7 mt-4">
              Updates will be posted or communicated through your account.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
              15. Governing Law
            </h2>
            <p className="leading-7">
              This Policy is governed by the laws of the{" "}
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
