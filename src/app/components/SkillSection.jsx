"use client";
import { FaReact, FaNodeJs, FaDocker, FaJava, FaLinux, FaRobot, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiSpringboot, SiPostgresql } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsDatabase } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const AnimatedCard = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  return (
    <div
      ref={ref}
      style={{
        transition: "all 0.7s cubic-bezier(.17,.67,.83,.67)",
        transitionDelay: `${delay}s`,
        transform: inView ? "none" : "scale(0.8) translateY(60px)",
        opacity: inView ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};


const SkillsSection = () => (
  <section className="py-16 px-4 bg-[#121212]" id="skills">
    <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
      {/* Frontend */}
      <AnimatedCard delay={0.1}>
        <div className="bg-gradient-to-br from-blue-500/60 via-blue-106/60 to-blue-80/60 rounded-xl shadow p-8 flex flex-col min-h-[370px] h-full">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-200">
            <span className="mr-2 text-2xl"><DiJavascript1 /></span>
            Frontend Development
          </h3>
          <ul className="space-y-3 text-blue-100">
            <li className="flex items-center"><FaReact className="mr-2 text-xl text-blue-400" /> React.js</li>
            <li className="flex items-center"><SiNextdotjs className="mr-2 text-xl text-white" /> Next.js</li>
            <li className="flex items-center"><SiTailwindcss className="mr-2 text-xl text-teal-300" /> Tailwind CSS</li>
          </ul>
        </div>
      </AnimatedCard>
      {/* Backend */}
      <AnimatedCard delay={0.3}>
        <div className="bg-gradient-to-br from-green-500/60 via-green-106/60 to-green-80/60 rounded-xl shadow p-8 flex flex-col min-h-[370px] h-full">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-green-200">
            <span className="mr-2 text-2xl"><BsDatabase /></span>
            Backend Development
          </h3>
          <ul className="space-y-3 text-green-100">
            <li className="flex items-center"><FaNodeJs className="mr-2 text-xl text-green-400" /> Node.js</li>
            <li className="flex items-center"><span className="mr-2 text-xl text-green-300">{'<'}/{'>'}</span> Express.js</li>
            <li className="flex items-center"><SiMongodb className="mr-2 text-xl text-green-500" /> MongoDB</li>
            {/* <li className="flex items-center"><SiSpringboot className="mr-2 text-xl text-green-300" /> Spring Boot</li> */}
            <li className="flex items-center"><BsDatabase className="mr-2 text-xl text-yellow-400" /> MySQL</li>
            {/* <li className="flex items-center"><SiPostgresql className="mr-2 text-xl text-blue-400" /> PostgreSQL</li> */}
            {/* <li className="flex items-center"><FaAws className="mr-2 text-xl text-yellow-400" /> AWS</li> */}
            <li className="flex items-center"><FaDocker className="mr-2 text-xl text-blue-300" /> Docker</li>
          </ul>
        </div>
      </AnimatedCard>
      {/* Other Skills */}
      <AnimatedCard delay={0.5}>
        <div className="bg-gradient-to-br from-purple-500/60 via-purple-106/60 to-purple-80/60 rounded-xl shadow p-8 flex flex-col min-h-[370px] h-full">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-purple-200">
            <span className="mr-2 text-2xl"><FaRobot /></span>
            Other Skills
          </h3>
          <ul className="space-y-3 text-purple-100">
            <li className="flex items-center"><FaRobot className="mr-2 text-xl text-purple-300" /> AIML</li>
            <li className="flex items-center">
              <MdOutlineSecurity className="mr-2 text-xl text-gray-300" /> DSA
            </li>
            <li className="flex items-center"><FaJava className="mr-2 text-xl text-red-400" /> Java</li>
            <li className="flex items-center"><FaLinux className="mr-2 text-xl text-white" /> Linux</li>
          </ul>
        </div>
      </AnimatedCard>
    </div>
  </section>
);

export default SkillsSection;