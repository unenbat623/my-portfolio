import React from "react";
import Layout from "@/Layout";
import Ring from "@/components/text";

const About = () => {
  return (
    <Layout>
      <div className="w-full h-full flex">
        <div className="bg-violet-400 flex-1">1</div>
        <div className="bg-gray-400 flex-1">
        <div className="left-side">
              <div className="left_bar">
                Unenbat
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.5z3J-5BnDD2oe4nEs3eVOwHaF7&pid=Api&P=0&h=180"
                  alt="icon"
                  width={25}
                  height={25}
                />
                <div className="right_txt"> Full stack & Developer</div>
              </div>
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/3/2022/09/Edgerunners-connect-to-Cyberpunk-2077-timeline-b233bcb.jpg?quality=90&resize=980,654"
                alt="photo"
                width={400}
                height={300}
              />
              <h2 className="profile-name">Hello @Unenbat. Developer</h2>
              <h2>Base in Mongolia, Ulaanbaatar</h2>
              <div className="reverse">
                <p>© 2023 Unenbat. All Rights Reserved</p>
              </div>
              <ul>
                <a>
                  <img
                    src="https://i.pinimg.com/736x/c1/9c/2c/c19c2cd5f988a1a12dd937fde6ed815e.jpg"
                    alt="icon"
                    width={30}
                    height={30}
                  />
                </a>
                <a>
                  <img
                    src="https://i.pinimg.com/736x/25/15/06/25150639d0f33c30c03d02dc675da05a.jpg"
                    alt="icon"
                    height={30}
                    width={30}
                  />
                </a>
                <a>
                  <img
                    src="https://i.pinimg.com/originals/ef/3b/61/ef3b614235a413fc2df9d8b4c28a7025.jpg"
                    alt="icon"
                    width={30}
                    height={30}
                  />
                </a>
                <a>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.7QcDobOJONkJ1kdeMqRVCAHaEK&pid=Api&P=0&h=180"
                    alt="icon"
                    width={30}
                    height={30}
                  />
                </a>
              </ul>
              <div className="profile-btn">
                <button>HIRE ME!</button>
            </div>
              </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
