"use client";
import Image from "next/image";

const AboutSection = () => {

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={100} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a full-stack developer passionate about building scalable web applications with modern technologies. My background includes both frontend and backend development, with a focus on intuitive user experiences and robust backend solutions.
            I enjoy tackling complex problems and am always eager to learn new technologies. My experience extends to Java-based authentication systems, focusing on JWT and Spring Security for secure, role-based access control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
