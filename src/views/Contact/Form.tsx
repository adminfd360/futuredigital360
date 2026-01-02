"use client";

import Section from "@/components/Section";
import Text from "@/components/Text";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/Button";

type ContactFormInputs = {
  name: string;
  email: string;
  contactNumber: string;
  subject: string;
  inquiry: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      // TODO: Implement your form submission logic here
      console.log("Form Data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Thank you for contacting us! We will get back to you soon.");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
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
        className="max-w-4xl mx-auto mt-10 lg:mt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Your Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-DEFAULT mb-2"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name here"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className={`w-full px-4 py-3 border rounded-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-sm transition-all ${
                errors.name ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Your Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-DEFAULT mb-2"
            >
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email here"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-3 border rounded-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-sm transition-all ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-text-DEFAULT mb-2"
            >
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              id="contactNumber"
              type="tel"
              placeholder="Your contact here"
              {...register("contactNumber", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9\s\-\+\(\)]+$/,
                  message: "Invalid phone number",
                },
                minLength: {
                  value: 10,
                  message: "Contact number must be at least 10 digits",
                },
              })}
              className={`w-full px-4 py-3 border rounded-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-sm transition-all ${
                errors.contactNumber ? "border-red-500" : "border-gray-200"
              }`}
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
              className={`w-full px-4 py-3 border rounded-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-sm transition-all ${
                errors.subject ? "border-red-500" : "border-gray-200"
              }`}
            >
              <option className="text-sm text-text-DEFAULT" value="">
                Please choose
              </option>
              <option className="text-sm text-text-DEFAULT" value="general">
                General Inquiry
              </option>
              <option className="text-sm text-text-DEFAULT" value="sales">
                Sales
              </option>
              <option className="text-sm text-text-DEFAULT" value="support">
                Technical Support
              </option>
              <option
                className="text-sm text-text-DEFAULT"
                value="communication"
              >
                Communication Services
              </option>
              <option
                className="text-sm text-text-DEFAULT"
                value="cybersecurity"
              >
                Cyber Security
              </option>
              <option className="text-sm text-text-DEFAULT" value="network">
                Network Services
              </option>
              <option className="text-sm text-text-DEFAULT" value="web">
                Web Services
              </option>
              <option className="text-sm text-text-DEFAULT" value="other">
                Other
              </option>
            </select>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        {/* Inquiry */}
        <div className="mb-6">
          <label
            htmlFor="inquiry"
            className="block text-sm font-medium text-text-DEFAULT mb-2"
          >
            Inquiry <span className="text-red-500">*</span>
          </label>
          <textarea
            id="inquiry"
            rows={5}
            placeholder="Tell us a few words"
            {...register("inquiry", {
              required: "Inquiry message is required",
              minLength: {
                value: 10,
                message: "Inquiry must be at least 10 characters",
              },
            })}
            className={`w-full px-4 py-3 border rounded-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-sm transition-all resize-none ${
              errors.inquiry ? "border-red-500" : "border-gray-200"
            }`}
          />
          {errors.inquiry && (
            <p className="mt-1 text-sm text-red-500">
              {errors.inquiry.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            disabled={isSubmitting}
            variant="primary"
            label="Send Email"
            className="min-w-[150px]"
          />
        </div>
      </form>
    </Section>
  );
};

export default Form;
