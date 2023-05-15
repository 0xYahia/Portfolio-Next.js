import { motion } from 'framer-motion';

import { SectionWrapper } from '@/hoc';
import { fadeIn, textVariant } from '@/utils/motion';
import { testimonials } from '@/constants';
import { styles } from '@/styles';
import Image from 'next/image';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className=" bg-black p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <div className="mt-4 flex flex-col justify-between items-center gap-5">
        <p className="tracking-wide text-[18px]">{testimonial}</p>
        <div className="flex justify-between w-full">
          <div className="flex  flex-col">
            <p className="font-medium text-[16px[">
              <span className="text-blue-600">@ </span>
              {name}
            </p>
            <p className="mt-1 text-gray-400 text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback_by-${name}`}
            // width={100}
            // height={100}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-violet-950 rounded-2xl sm:bg-transparent ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-40 pb-14 ${styles.paddingX} sm:px-6 sm:-mt-10  gap-7 grid w-full grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 `}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
