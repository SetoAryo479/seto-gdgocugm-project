import { FaCircle, FaSquare } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section>
      <div className="w-full bg-white px-6 pb-16 pt-16 md:px-16 lg:pb-[64px] lg:pl-[96px] lg:pr-[64px] lg:pt-[176px]">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/*GROUP KIRI*/}
          <div className="flex-1 flex flex-col gap-7">
            <div className="flex flex-row items-center gap-2.5 text-[#5F6368]">
              <FaCircle size={10} className="text-blue-500" />
              <p>GDGoC UGM • 2026/2027</p>
            </div>

            <h1 className="text-5xl font-bold text-[#242424] md:text-[80px] md:leading-tight">
              Big Ideas.
              <span className="block text-[#1967D2]">Built together.</span>
            </h1>

            <p className="max-w-[450px]">
              A place for curious minds at <b>Universitas Gadjah Mada</b> to
              learn, connect, and build technology that matters.
            </p>
            <div className="flex flex-row gap-3">
              <div className="text-white bg-blue-500 flex items-center gap-4 px-6 min-h-[52px] rounded-[8px] w-fit">
                Find your learning track
                <LuArrowRight />
              </div>
              <div className="border border-[#DADCE0] text-[#1967D2] flex flex-row items-center text-[16px] gap-4 px-6 rounded-[8px] font-medium">
                Get to know
                <LuArrowRight />
              </div>
            </div>
            <div className="flex flex-row gap-2.5 items-center">
              <div className="flex flex-row">
                <FaCircle
                  size={16}
                  className="text-red-500 rounded-full border-2 z-10 border-white "
                />
                <FaCircle
                  size={16}
                  className="text-yellow-500 rounded-full border-2 z-20 border-white -ml-[3px]"
                />
                <FaCircle
                  size={16}
                  className="text-green-500 rounded-full border-2 z-30 border-white -ml-[3px]"
                />
                <FaCircle
                  size={16}
                  className="text-blue-500 rounded-full border-2 z-40 border-white -ml-[3px]"
                />
              </div>
              <div>
                <h1>Different backgrounds. A shared curiosity.</h1>
              </div>
            </div>
          </div>
          {/*BOX KANAN*/}
          <div className="min-h-[320px] w-full flex-1 rounded-[32px] bg-amber-300 lg:min-h-[530px]" />
        </div>
      </div>
      {/*BATAS BAWAH*/}
      <div className="w-full bg-white min-h-[75px] py-[26px] px-[96px] border-t border-b border-[#DADCE0] flex flex-row justify-between">
        <div className="flex flex-row gap-7 items-center">
          <FaSquare size={8} className="text-blue-500" />
          <h1>Learn by doing</h1>
        </div>
        <div className="flex flex-row gap-7 items-center">
          <FaSquare size={8} className="text-red-500" />
          <h1>Connect across disciplines</h1>
        </div>
        <div className="flex flex-row gap-7 items-center">
          <FaSquare size={8} className="text-green-500" />
          <h1>Build with purpose</h1>
        </div>
      </div>
    </section>
  );
}
