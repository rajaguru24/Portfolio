import FSD from "../assets/FSD.png";
import ReactJS from "../assets/ReactJS.png";
import NodeJS from "../assets/NodeJS.png";
import MongoDB from "../assets/MongoDB.png";

export default function Certification() {
  return (
    <section>
      <div className="">
        <div className=" flex flex-wrap justify-center mb-2  y-24 gap-3">
          <div className="relative">
            <img className="h-[300px] " src={FSD} />
          </div>
          <div className="relative flex ">
            <img className="h-[300px] " src={ReactJS} />
          </div>
          <div className="relative  flex ">
            <img className="h-[300px] " src={NodeJS} />
          </div>
          <div className="relative flex ">
            <img className="h-[300px] " src={MongoDB} />
          </div>
        </div>
      </div>
    </section>
  );
}
