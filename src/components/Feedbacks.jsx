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
      <div className="mt-7 flex justify-between items-center gap-1">
        <p className="tracking-wide text-[18px]">{testimonial}</p>
        <div className="flex flex-1 flex-col">
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
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-violet-950 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
