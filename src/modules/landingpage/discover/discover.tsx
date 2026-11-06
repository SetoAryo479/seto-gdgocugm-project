import { FaCircle, FaBookOpen, FaCode, FaUser } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

export default function Discover() {
  return (
    <section className="w-full h-full bg-white">
      {/*BAGIAN 1*/}
      <div className="flex flex-row py-[88px] px-[96px] gap-[96px] items-center">
        {/*KIRI*/}
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-row items-center gap-2.5">
            <FaCircle size={7} className="text-blue-500" />
            <h1>A campus. A community.</h1>
          </div>
          <div className="font-bold text-[48px] leading-tight text-[#242424] max-w-[460px]">
            <h1>Not just learning tech.</h1>
            <h1>Finding your people.</h1>
          </div>
          <div className="flex flex-row text-[#1967D2] font-medium items-center gap-3 text-[16px]">
            <h1>More about GDGoC UGM</h1>
            <LuArrowRight />
          </div>
        </div>
        {/*KANAN*/}
        <div className="flex-1">
          <div className="max-w-[500px] gap-6 flex flex-col">
            <h1>
              Google Developer Groups on Campus, Universitas Gadjah Mada brings
              students together around one simple idea: we can go <b>further</b>{" "}
              when we <b>learn</b> with each other.
            </h1>
            <h1>
              From your first line of code to your next product idea, there's
              room to ask questions, share what you know, and try something new.
            </h1>
            <div className="flex flex-row gap-3">
              <div className="font-bold px-3.5 py-2 bg-[#F1F3F4] text-[#5F6368] rounded-[100px]">
                <h1>Student-led</h1>
              </div>
              <div className="font-bold px-3.5 py-2 bg-[#F1F3F4] text-[#5F6368] rounded-[100px]">
                <h1>Peer-powered</h1>
              </div>
              <div className="font-bold px-3.5 py-2 bg-[#F1F3F4] text-[#5F6368] rounded-[100px]">
                <h1>Curiosity-first</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*BAGIAN 2*/}
      <div className="pt-4 pb-[88px] px-[96px] gap-9 flex flex-col">
        {/*HEADING*/}
        <div className="w-full min-h-[200px] flex flex-col justify-between">
          <div className="uppercase flex flex-row items-center gap-2.5">
            <FaCircle size={7} className="text-blue-500" />
            <h1>find your starting point</h1>
          </div>
          <div>
            <h1 className="font-bold text-[48px] text-[#242424] max-w-[600px]">
              Many interests. One shared journey.
            </h1>
          </div>
          <div className="flex justify-between">
            <h1>
              Follow what excites you. Explore a track, then connect the dots
              with others.
            </h1>
            <div className="text-[#1967D2] flex flex-row gap-3 items-center">
              <h1>See the overview</h1>
              <LuArrowRight />
            </div>
          </div>
        </div>
        {/*3 KOLOM*/}
        <div className="flex flex-row gap-6">
          {/*1*/}
          <div className="w-full min-h-[540px] border border-[#DADCE0] rounded-[24px] overflow-hidden">
            <div className="w-full min-h-[230px] bg-[#EAF2FF]"></div>
            <div className="w-full h-full p-7 flex flex-col gap-4.5">
              <h1 className="text-[#1967D2] text-[11px]">EXPLORE THE WHY</h1>

              <h1 className="font-bold text-[28px] text-[#242424]">
                Research & discovery
              </h1>
              <p>
                Ask better questions, understand people, and turn insight into a
                clear problem worth solving.
              </p>
              <div className="border-b border-[#DADCE0]" />
              <p>Problem framing · User research · Product thinking</p>
              <div className="text-[#1967D2] flex flex-row items-center gap-3">
                <h1>Explore this track</h1>
                <LuArrowRight />
              </div>
            </div>
          </div>
          {/*2*/}
          <div className="w-full min-h-[540px] border border-[#DADCE0] rounded-[24px] overflow-hidden">
            <div className="w-full min-h-[230px] bg-[#FFF7DF]"></div>
            <div className="w-full h-full p-7 flex flex-col gap-4.5">
              <h1 className="text-[#1967D2] text-[11px]">MAKE IT MEANINGFUL</h1>

              <h1 className="font-bold text-[28px] text-[#242424]">
                Design & creativity
              </h1>
              <p>
                Translate ideas into thoughtful experiences, from a first sketch
                to a prototype people can use.
              </p>
              <div className="border-b border-[#DADCE0]" />
              <p>UI/UX · Visual storytelling · Prototyping</p>
              <div className="text-[#1967D2] flex flex-row items-center gap-3">
                <h1>Explore this track</h1>
                <LuArrowRight />
              </div>
            </div>
          </div>
          {/*3*/}
          <div className="w-full min-h-[540px] border border-[#DADCE0] rounded-[24px] overflow-hidden">
            <div className="w-full min-h-[230px] bg-[#EAF5ED]"></div>
            <div className="w-full h-full p-7 flex flex-col gap-4.5">
              <h1 className="text-[#1967D2] text-[11px]">BRING IDEA TO LIFE</h1>

              <h1 className="font-bold text-[28px] text-[#242424]">
                Development
              </h1>
              <p>
                Learn the tools, write the code, and build useful things with
                people who enjoy figuring it out.
              </p>
              <div className="border-b border-[#DADCE0]" />
              <p>Web & mobile · Cloud · AI foundations</p>
              <div className="text-[#1967D2] flex flex-row items-center gap-3">
                <h1>Explore this track</h1>
                <LuArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*BAGIAN 3*/}
      <div className="w-full h-full bg-[#F1F3F4] gap-10 px-[96px] py-[88px] flex-col flex">
        <div className="flex flex-col gap-4.5">
          <div className="flex flex-row items-center gap-2.5">
            <FaCircle size={7} className="text-blue-500" />
            <h1>MORE THAN A CLASS</h1>
          </div>
          <h1 className="font-bold text-[48px] text-[#242424]">
            Less watching. More Making.
          </h1>
          <h1>
            Learn in a way that turns a new concept into something you can
            actually use.
          </h1>
        </div>
        {/*KOLOM*/}
        <div className="flex flex-row gap-6">
          {/*1*/}
          <div className="w-full min-h-[290px] bg-white rounded-3xl p-8 flex flex-col gap-5">
            <FaBookOpen className="text-[#1967D2]"/>
            <h1 className="font-bold text-[28px] text-[#242424]">Study together</h1>
            <p>
              Work through foundations in peer learning sessions. Bring your
              questions; leave with a next step.
            </p>
            <div className="border-b" />
            <h1 className="text-[#1967D2]">Study groups & guided practice</h1>
          </div>
          {/*2*/}
          <div className="w-full min-h-[290px] bg-white rounded-3xl p-8 flex flex-col gap-5">
            <FaCode className="text-[#1967D2]"/>
            <h1 className="font-bold text-[28px] text-[#242424]">Try it hands-on</h1>
            <p>
              Explore a tool or technique in a workshop, then put it to work in
              a small experiment.
            </p>
            <div className="border-b" />
            <h1 className="text-[#1967D2]">Workshops & technical sessions</h1>
          </div>
          {/*3*/}
          <div className="w-full min-h-[290px] bg-white rounded-3xl p-8 flex flex-col gap-5">
            <FaUser className="text-[#1967D2]"/>
            <h1 className="font-bold text-[28px] text-[#242424]">Share the process</h1>
            <p>
              Exchange feedback, explain your decisions, and learn from
              different ways of thinking.
            </p>
            <div className="border-b" />
            <h1 className="text-[#1967D2]">Project circles & sharing sessions</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
