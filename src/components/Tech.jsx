import { SectionWrapper } from '@/hoc';
import BallCanvas from './canvas/Ball';
import { technologies } from '@/constants';

const Tech = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-light">
        Skills
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
