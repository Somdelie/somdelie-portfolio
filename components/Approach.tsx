/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import FrameWorksCard from "./ui/FrameWorksCard";
import AddToCart from "./ui/AddToCart";

const Approach = () => {
  return (
    <section id="process" className="w-full">
      <h1 className="font-semibold text-lg">
        My <span className="text-orange-500">approach</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        ></Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        ></Card>
      </div>
      {/* showcase */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <div className="rounded results-summary-container">
          <div className="confetti">
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
          </div>
          <div className="results-summary-container__result">
            <div className="heading-tertiary">Your Result</div>
            <div className="result-box">
              <div className="heading-primary">78</div>
              <p className="result">of 100</p>
            </div>
            <div className="result-text-box">
              <div className="heading-secondary">excellent</div>
              <p className="paragraph">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
            <div className="summary__cta">
              <button className="btn btn__continue">Continue</button>
            </div>
          </div>
        </div>
        <div className="rounded code-editor">
          <div className="header">
            <span className="title">CSS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="icon"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="#4C4F5A"
                  d="M6 6L18 18"
                ></path>{" "}
                <path
                  stroke-linecap="round"
                  stroke-width="2"
                  stroke="#4C4F5A"
                  d="M18 6L6 18"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="editor-content">
            <code className="code">
              <p>
                <span className="color-0">.code-editor </span> <span>{}</span>
              </p>

              <p className="property">
                <span className="color-2">max-width</span>
                <span>:</span>
                <span className="color-1">300px</span>;
              </p>
              <p className="property">
                <span className="color-2">background-color</span>
                <span>:</span>
                <span className="color-preview-1"></span>
                <span className="">#1d1e22</span>;
              </p>
              <p className="property">
                <span className="color-2"> box-shadow</span>
                <span>:</span>
                <span className="color-1">
                  0px 4px 30px <span className="color-preview-2"></span>
                  <span className="color-3">rgba(</span>0, 0, 0, 0.5
                  <span className="color-3">)</span>
                </span>
                ;
              </p>
              <p className="property">
                <span className="color-2">border-radius</span>
                <span>:</span>
                <span className="color-1">8px</span>;
              </p>
              <span>&rbrace;</span>
            </code>
          </div>
        </div>
        <div className="chat-card">
          <div className="chat-header">
            <div className="h2">ChatGPT</div>
          </div>
          <div className="chat-body">
            <div className="message incoming">
              <p>Hello, how can I assist you today?</p>
            </div>
            <div className="message outgoing">
              <p>I have a question about your services.</p>
            </div>
            <div className="message incoming">
              <p>Sure, I'm here to help. What would you like to know?</p>
            </div>
          </div>
          <div className="chat-footer">
            <input placeholder="Type your message" type="text" />
            <button>Send</button>
          </div>
        </div>
        <FrameWorksCard />
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w- min-h-[300px] w-full mx-auto p-4 relative lg:h-full rounded bg-slate-300"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full text-black absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-black
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-gray-600 text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-600 px-5 py-2 text-orange-500 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
