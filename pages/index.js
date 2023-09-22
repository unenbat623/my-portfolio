import Layout from "@/Layout";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <Layout>
      <div className="bg-gray-800 w-full h-full flex font-normal">
        <div class="center">
          <h1 className="text-2xl  text-slate-100">
            I am{" "}
            <span>
              <Typewriter
                words={[
                  "a Frontend",
                  "a Backend",
                  "an FTD",
                  "a full stack developer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              <div>
                <h1 className="">
                  ҮнэнБат-cvv website-д <br />
                  тавтай морилно уу.
                </h1>
              </div>
            </span>
          </h1>
          <div className="p-3">
            <div className="text-slate-50 p-5">
              CSS
              <br /> is designed to enable the separation of <br />
              content and presentation, including layout, colors, and fonts.
            </div>
            <div className="text-slate-50 p-5">
              HTML
              <br />
              Web browsers receive HTML documents from a<br /> web server or
              from local storage and render the <br />
              documents into multimedia web pages.
            </div>
            <div className="text-slate-50 p-5">
              JavaScript
              <br /> is a high-level, often just-in-time compiled <br />
              language that conforms to the ECMAScript standard.
            </div>
            <div>
              PHP <br />
              is a general-purpose scripting language geared towards web
              development.
              <br /> It was originally created by <br />
              Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in
              1995.
            </div>
          </div>
          <div className="rounded-2xl p-4">
            <button className="rounded-sm bg-slate-50">Github-с харах</button>
            <button className="rounded-sm text text-slate-50">
              Facebook-с харах
            </button>
          </div>
        </div>
        <div className="bg-gray-800 flex-1">
          <img src="https://static.vecteezy.com/system/resources/previews/000/523/378/original/web-development-application-design-coding-and-programming-on-laptop-and-smartphone-concept-with-programming-language-and-program-code-and-layout-on-screen-vector.jpg" />
        </div>
      </div>
    </Layout>
  );
}
