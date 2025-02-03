import "../assets/ExperienceCard.css";

export const ExperienceCard = () => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600] xl:w-[900px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <img
        className="experience_img w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://yt3.googleusercontent.com/ytc/AIdro_mghQhF4iLYLXxDbT1E0DcHbocyIRk7nkuzRF-Fu2AnPgY=s900-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4x1 font-light">Estagiário</h4>
        <p className=" font-bold text-2x1 mt-1">
          DEFENSORIA PÚBLICA DO DISTRITO FEDERAL
        </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.svgrepo.com/show/452228/html-5.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.svgrepo.com/show/374035/reactts.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.svgrepo.com/show/452185/css-3.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.svgrepo.com/show/448221/docker.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.svgrepo.com/show/349419/javascript.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.svgrepo.com/show/373554/django.svg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.svgrepo.com/show/374144/typescript.svg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Começo: Término: </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumary Points</li>
          <li>Sumary Points</li>
          <li>Sumary Points</li>
          <li>Sumary Points</li>
          <li>Sumary Points</li>
        </ul>
      </div>
    </article>
  );
};
