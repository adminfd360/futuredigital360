"use client";

import Section from "@/components/Section";
import Text from "@/components/Text";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/Button";
import Link from "next/link";
import emailjs from "@emailjs/browser";

type ContactFormInputs = {
  name: string;
  email: string;
  contactNumber: string;
  subject: string;
  inquiry: string;
  marketingConsent: boolean;
  smsConsent: boolean;
  smsDisclosureConsent: boolean;
};

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 border rounded-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-sm transition-all ${
    hasError ? "border-red-500" : "border-gray-200"
  }`;

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();

  const smsConsent = watch("smsConsent");

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.contactNumber || "Not provided",
          subject: data.subject,
          message: data.inquiry,
          email_marketing_opt_in: data.marketingConsent ? "Yes" : "No",
          sms_opt_in: data.smsConsent ? "Yes" : "No",
          sms_disclosure_consent: data.smsDisclosureConsent ? "Yes" : "No",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      alert("Thank you for contacting us! We will get back to you soon.");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Section id="contact-form">
      <Text
        className="text-center text-2xl md:text-3xl font-bold mb-3"
        variant="caption"
      >
        Get in Touch
      </Text>
      <Text className="text-center text-gray-600 mb-8">
        We are available 24/7 by e-mail and phone. You can also ask a question
        about
        <br />
        our services through our contact form.
      </Text>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto mt-10 lg:mt-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {/* Left Column - Form Fields */}
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-DEFAULT mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className={inputClass(!!errors.name)}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-DEFAULT mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={inputClass(!!errors.email)}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-text-DEFAULT mb-2"
              >
                Phone number{" "}
                {smsConsent ? (
                  <span className="text-red-500">*</span>
                ) : (
                  <span className="text-gray-500 opacity-50">(optional)</span>
                )}
              </label>
              <input
                id="contactNumber"
                type="tel"
                placeholder="Mobile number (required only if you opt in to SMS below)"
                {...register("contactNumber", {
                  required: smsConsent
                    ? "Phone number is required when opting in to SMS"
                    : false,
                  pattern: {
                    value: /^[0-9\s\-\+\(\)]+$/,
                    message: "Invalid phone number",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits",
                  },
                })}
                className={inputClass(!!errors.contactNumber)}
              />
              {errors.contactNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-text-DEFAULT mb-2"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                {...register("subject", {
                  required: "Please select a subject",
                })}
                className={inputClass(!!errors.subject)}
              >
                <option value="">Please choose</option>
                <option value="general">General Inquiry</option>
                <option value="sales">Sales</option>
                <option value="support">Technical Support</option>
                <option value="communication">Communication Services</option>
                <option value="cybersecurity">Cyber Security</option>
                <option value="network">Network Services</option>
                <option value="block-of-time">Block of Time (BOT)</option>
                <option value="web">Web Services</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="inquiry"
                className="block text-sm font-medium text-text-DEFAULT mb-2"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="inquiry"
                rows={5}
                placeholder="Enter your message"
                {...register("inquiry", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className={`${inputClass(!!errors.inquiry)} resize-none`}
              />
              {errors.inquiry && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.inquiry.message}
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Marketing Disclosures */}
          <div className="border border-gray-300 rounded-sm p-6 h-full bg-gradient-to-b from-transparent to-blue-50">
            <p className="font-bold text-sm text-text-DEFAULT mb-3 mt-4">
              Marketing email disclosures
            </p>
            <p className="text-sm text-gray-600 mb-3">
              If you choose to hear from us by email, you can expect messages
              such as newsletters, product and service announcements,
              promotional offers, event invitations, and account-related notices
              from Future Digital 360 and its affiliates.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              We send at most 4 marketing emails per month on average.
            </p>

            <p className="font-bold text-sm text-text-DEFAULT mb-3">
              Optional SMS updates
            </p>
            <p className="text-sm text-gray-600 mb-3">
              You do not need to provide a phone number or opt in to SMS to
              contact us. If you <strong>want</strong> text messages, enter your
              mobile number in the field on the left and check the box below.
              SMS may include promotions, service reminders, and short
              operational updates. Message frequency varies; we send at most 6
              marketing or promotional SMS messages per month.{" "}
              <strong>Standard SMS and Data rates will apply.</strong>
            </p>
            <p className="text-sm text-gray-600">
              You can unsubscribe or update your preferences at any time. Your
              personal data will be processed in accordance with the{" "}
              <Link
                href="/privacy-policy"
                className="text-brand-500 underline hover:text-primary/80"
              >
                Future Digital 360 Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-4 mb-8">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("marketingConsent")}
              className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-600">
              <strong>
                By completing and submitting this form, I agree to receive
                marketing emails from Future Digital 360 and its affiliates.
              </strong>{" "}
              Check this box only if you want marketing emails; it is not
              required to contact us.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("smsConsent")}
              className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-600">
              I want to receive optional SMS messages from Future Digital 360 as
              described above (not required to submit this form).
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("smsDisclosureConsent")}
              className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-600">
              By checking this box, I consent to receive SMS from Future Digital
              360. Reply<strong> STOP</strong> to opt-out; Reply
              <strong> HELP</strong> for support; Message & data rates may
              apply; Messaging frequency may vary. View our{" "}
              <Link
                href="/privacy-policy"
                className="text-brand-500 underline hover:text-primary/80"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms-of-service"
                className="text-brand-500 underline hover:text-primary/80"
              >
                Terms of Service
              </Link>
              .
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            disabled={isSubmitting}
            variant="primary"
            label="Send"
            className="min-w-[150px]"
          />
        </div>
      </form>
    </Section>
  );
};

export default Form;
