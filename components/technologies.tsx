import React from 'react';
import { FaReact, FaJs, FaJava, FaHtml5, FaCss3Alt, FaFigma} from 'react-icons/fa';
import { AiOutlinePython } from 'react-icons/ai';
import { TbBrandTypescript, TbBrandWebflow } from 'react-icons/tb';
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <section>
      <h1 className="title">My Toolkit</h1>
      <div className="container flex flex-wrap justify-center mt-9">
        <ul className="grid grid-cols-2 md:grid-cols-7 gap-7 w-full">
         
          <li className="flex flex-col items-center">
            <TbBrandTypescript className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">TypeScript</p>
          </li>
         
          <li className="flex flex-col items-center">
            <FaFigma className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">Figma</p>
          </li>
          <li className="flex flex-col items-center">
            <TbBrandWebflow className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">Webflow</p>
          </li>
          <li className="flex flex-col items-center">
            <RiTailwindCssFill className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">Tailwind</p>
          </li>
          <li className="flex flex-col items-center">
            <FaJava className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">Java</p>
          </li>
          <li className="flex flex-col items-center">
            <FaHtml5 className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">HTML5</p>
          </li>
          <li className="flex flex-col items-center">
            <FaCss3Alt className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">CSS3</p>
          </li>
        </ul>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full justify-center mt-6">
        <li className="flex flex-col items-center">
            <FaReact className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">React</p>
          </li>
          <li className="flex flex-col items-center">
            <FaJs className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">JavaScript</p>
          </li>
          <li className="flex flex-col items-center">
            <AiOutlinePython className="text-6xl md:text-5xl" />
            <p className="mt-3 font-light text-muted-foreground">Python</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
