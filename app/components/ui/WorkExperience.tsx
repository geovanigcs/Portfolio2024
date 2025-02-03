import '../assets/WorkExperience.css'
import './ExperienceCard'
import { ExperienceCard } from './ExperienceCard'

export const WorkExperience = () => {
    return ( 
        <div className="experience h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experiência</h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </div>
     )
}
 