import hrm from "../assets/hrm.avif";
import regi from "../assets/regi.png";
import img2 from "../assets/img2.jpg"
export default function Projects() {
  return (
    <section className=" flex flex-col py-5 px-5 justify-center bg-slate-400 text-white">
      <div className="w-1/2 ">
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold border-b-4 ]">Projects</h2>
        </div>
      </div>
      <div className="w-full flex">
      <div className=" flex px-10 gap-6">
        <div className="relative">
            <img className="h-[300px]" src={hrm} />
            <div className="flex">
            <a href="https://github.com/rajaguru24/HR-Management-App">
              <div className="project-desc">
              <p className="text-center px-5 py-5">
                HR Management Dashsboard built using React JS and Node JS
              </p>
              </div>
              </a>
            </div>
          </div>
          <div className="relative">
          <img className="h-[300px] " src={regi} />
          <a href="https://github.com/rajaguru24/react-day30/tree/main/src">
          <div className="project-desc" > 
            <p className="text-center px-5 py-5">Personal Registration form built with React JS</p>
            </div>
            </a>
          </div>
        </div>
        <div className="">
        <div className="relative ">
          <img className="h-[300px] " src={img2} />
          <a href="https://github.com/rajaguru24/react-day32/tree/main/src">
          <div className="project-desc" > 
            <p className="text-center px-5 py-5">A simple Mobile buying app built with React JS</p>
            </div>
            </a>
          </div>
      </div>
      </div>
    </section>
  );
}
