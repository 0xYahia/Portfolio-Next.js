import { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '@/styles';
import EarthCanvas from './canvas/Earth';
import { SectionWrapper } from '@/hoc';
import { slideIn } from '@/utils/motion';

const CONTACT_EMAIL = 'mohamdyahia@outlook.com';

// Builds a mailto: link with the subject and body prefilled from the form.
// RFC 6068 wants line breaks in the body encoded as %0D%0A, so use CRLF.
const buildMailtoUrl = ({ name, email, message }) => {
  const subject = `Portfolio contact from ${name.trim()}`;
  const body = `${message.trim()}\n\nName: ${name.trim()}\nEmail: ${email.trim()}`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body.replace(/\r?\n/g, '\r\n'))}`;
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hands the prefilled message to the visitor's email app; the page stays put.
    window.location.href = buildMailtoUrl(form);
    setSubmitted(true);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex-col gap-8">
          <label className="flex flex-col">
            <span className="font-medium mt-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="What's your name?"
              className="bg-violet-950 py-4 px-6 placeholder:text-slate-400 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mt-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="What's your email?"
              className="bg-violet-950 py-4 px-6 placeholder:text-slate-400 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mt-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="What do you want to say?"
              className="bg-violet-950 py-4 px-6 placeholder:text-slate-400 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-violet-950 py-3 mt-2 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl"
          >
            send
          </button>
          <p
            role="status"
            className={submitted ? 'mt-4 text-sm text-slate-300' : undefined}
          >
            {submitted && (
              <>
                Your email app should open with your message. If it
                doesn&apos;t, email me directly at{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-green-400 underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </>
            )}
          </p>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, '');
