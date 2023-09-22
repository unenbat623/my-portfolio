import Layout from "@/Layout";
import { Typewriter } from "react-simple-typewriter";
import Ring from "@/components/text";

export default function Home() {
  return (
    <Layout>
      <div className="bg-neutral-900 w-full h-full flex p-40">
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
                  ҮнэнБат-cvv website-д <br/>тавтай морилно уу.
                  </h1>
                </div>
              </span>
            </h1>
            <div className="rounded-2xl p-4">
            <button className="rounded-sm bg-slate-50">Github-с харах</button>
            <button className="rounded-sm text text-slate-50">Facebook-с харах</button>
            </div>
      </div>
        <div className="bg-gray-400 flex-1">
          <img src="https://static.vecteezy.com/system/resources/previews/000/523/378/original/web-development-application-design-coding-and-programming-on-laptop-and-smartphone-concept-with-programming-language-and-program-code-and-layout-on-screen-vector.jpg"/>
        </div>
            </div>
    </Layout>
  );
}
