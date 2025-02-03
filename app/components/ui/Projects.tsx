import "../assets/Projects.css";

type Props = {};
export const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="projects h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap- flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <img
              className="projects_img"
              src="https://st.depositphotos.com/1000128/4310/i/380/depositphotos_43107455-stock-photo-laptop-tablet-pc-and-smartphone.jpg"
              alt={`Project ${i + 1}`}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#4169E1]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                UPS clone
              </h4>
              <p className="text-lg text-center md:text-left  ">
                Projetinho aqui que não tem nada, mas irá servir para dizer que
                tem!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#4169E1]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};
