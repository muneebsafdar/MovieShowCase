import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset(); // clear form after submit
  };

  return (
    <div className="min-h-screen w-full px-6 py-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">Contact Me</h1>
        <p className="text-gray-300 mb-8">
          I’m open to opportunities, collaborations, and meaningful conversations. Feel free to reach out using the form below.
        </p>

        {isSubmitSuccessful && (
          <p className="text-green-400 mb-4">Thank you! Your message has been sent successfully.</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              {...register('subject', { required: 'Subject is required' })}
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              {...register('message', { required: 'Message is required' })}
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
