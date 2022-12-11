import Image from "next/image";
import HeroFinal from "../images/HeroFinal.png";
import MeImage from "../images/meimage.jpeg";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex flex-col" id="mobile-menu">
        <ul className="flex justify-center text-lg text-center pt-8">
          <li className="mr-0">
            <Link
              className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="mr-0">
            <Link
              className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200"
              href="/skills"
            >
              Skills
            </Link>
          </li>
          <li className="mr-0">
            <Link
              className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200"
              href="/work"
            >
              Work
            </Link>
          </li>
          <li className="mr-0">
            <Link
              className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-7 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden md:block hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src={HeroFinal}
              />
            </div>
            {/* <div className="flex flex-col sm:flex-row mt-10"> */}
            <div className="flex justify-center md:p-0 pt-12 pb-8">
              <div className="sm:w-2/3 text-center sm:pr-8 sm:py-8">
                <h1 className="typewriterh1 text-2xl">Full-Stack Web Developer😎</h1>
                <div className="border-2 p-1 mt-10 rounded-3xl">
                  <div className="w-20 md:w-40 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mt-4">
                    <Image className="rounded-full imageMe" src={MeImage} />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      Arjun Vijay Prakash
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-base pb-4">
                      I am a Full-Stack Developer <br/> based in India 🇮🇳
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"> */}
            <p className="leading-relaxed text-sm md:text-lg md:my-4 md:mx-20">
              I am a <span className="text-green-600">Full-Stack Developer</span> with over <span className="text-violet-600">3.5 years of experience</span> in
              <span className="text-blue-600"> Software Development.</span> I also have experience in <span className="text-orange-500">Machine Learning and Data Science.</span> At Present, I have learnt <span className="text-yellow-700">Web and ML Technologies</span> like ReactJs, NextJs, ExpressJs, SKlearn, TailwindCSS, TensorFlow and Pandas. At this <span className="text-sky-600">age of 13, I am a student </span>but I can assure you that, the products drawn by me are no less compared to a Professional Developer. Get a Site done by Me on <span className="text-pink-600">Fiverr(arjun_v_prakash)</span>
            </p>
            {/* </div> */}
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default About;
