import "../assets/Skills.css";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <div className="skills flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2x1">
        Skills
      </h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Passe o mouse sobre uma habilidade para obter mais informações
      </h3> */}
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  )
}
