/* eslint-disable react/no-unescaped-entities */
import Avatar from "@mui/material/Avatar";

const About = () => {
  return (
    <section id="about" className="py-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        <span className="text-orange-500">About</span> me!
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="h-[280px] min-w-[200px] max-w-[200px] bg-white shadow">
          <div className="h-[70%] w-full flex flex-col items-center justify-center bg-sky-500 text-white">
            <Avatar
              alt="Travis Howard"
              src="/cautie.jpg"
              sx={{ width: 76, height: 76 }}
            />
            <h3>Cautious Ndlovu</h3>
            <p className="text-xs text-gray-300">
              Full Stack Developer, <br /> Ui/UX Designer,
            </p>
          </div>
          <div className="h-[30%] flex items-center justify-center">
            <button className="bg-gray-900 shadow hover:opacity-90 text-white px-3 py-1 rounded-full">
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className="bg-white p-4 h-full col-span-2 shadow w-full">
          <h4 className="font-semibold underline">
            HELLO IT'S Cautious Full Stack Developer
          </h4>
          <p>
            Hi There! I'm Cautious Ndlovu. A Full Stack Web Developer having
            specialization in back end & front end development. I have 9+ years
            of experience in Web Development having strong WordPress &
            WooCommerce Skills. I have Backend Skills in Nodejs, WordPress I
            also have Frontend Skills in Javascript, Reactjs, React-Native, Web
            Components & StencilJS, CSS / SASS,Tailwind, Bootstrap & Foundation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
