import * as React from 'react';
import ActivityComponent from './ActivityComponent';
import Link from 'next/link';
import Image from "next/image"

const OpenToWorkComponent = () => {
  const handleDownload = () => {
    // Path to the PDF file in the public folder
    debugger;
    const link = document.createElement('a');
    link.href = `/SeniorWebDeveloper-Aung-Thu-Oo-Resume-v3.7.pdf`;
    link.download = 'SeniorWebDeveloper-Aung-Thu-Oo-Resume-v3.7.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="pt-12 bg-gray-200 py-15 dark:bg-gray-700">
        <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xs dark:bg-gray-900 dark:text-white">
          <div className="p-6 bg-yellow-500">
            <h2 className="text-3xl font-extrabold text-black text-white">
              Open to work
            </h2>
            <p className="p-6 font-bold">
              <span className="text-5xl font-extrabold">&#x0022;</span>I am
              currently exploring new career opportunities and would love to
              connect with professionals in my industry.
            </p>
            <p className="p-6 font-normal">
              <figcaption className="">
                &mdash; Aung Thu Oo, <cite>Lead Developer @ SoftwareZay</cite>{' '}
              </figcaption>
            </p>
          </div>
          <div className="px-4 pb-6 border-b">
            <div className="my-8 text-center">
              <a
                href={`https://aungthuoo.github.io`}
                target="_blank"
                className="flex-1 px-4 py-2 font-semibold text-center text-black border-2 border-gray-400 rounded-full cursor-pointer dark:border-gray-700 dark:text-white"
              >
                
                <Image src="/static/images/profile/ato.jpeg" alt="" width={32} height={32} className="w-32 h-32 mx-auto my-4 border-4 border-white rounded-full dark:border-gray-800" />
              </a>
              <div className="py-2">
                <h3 className="mb-1 text-2xl font-bold text-gray-800 dark:text-white">
                  <a
                    href={`https://aungthuoo.github.io`}
                    target="_blank"
                    className="flex-1 px-4 py-2 font-semibold text-center text-black border-2 border-gray-400 rounded-full cursor-pointer dark:border-gray-700 dark:text-white"
                  >
                    Aung Thu Oo
                  </a>
                </h3>
                <div className="inline-flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 mr-1 text-gray-400 dark:text-gray-600"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      className=""
                      d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </svg>
                  Senior Developer
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-2">
              <button
                onClick={handleDownload}
                className="flex-1 px-4 py-2 antialiased font-bold text-center text-white bg-blue-600 rounded-full dark:bg-blue-800 dark:text-white hover:bg-blue-800 dark:hover:bg-blue-900"
              >
                Download Resume
              </button>

              <a
                href={`https://linkedin.com/in/aungthuoo`}
                target="_blank"
                className="flex-1 px-4 py-2 font-semibold text-center text-black border-2 border-gray-400 rounded-full cursor-pointer dark:border-gray-700 dark:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="px-4 py-4 dark:text-white ">
            <h2 className="text-3xl font-extrabold dark:text-white ">
              About me
            </h2>
            <div className="py-4">
              <p>
                With over 15 years of experience in the software industry, I am
                a Senior Developer at Hana Microfinance, a leading provider of
                microfinance solutions in Myanmar. I leverage my full stack
                expertise to deliver scalable and user-friendly web and mobile
                applications that enhance financial inclusion and empowerment
                for millions of people.
              </p>
            </div>
          </div>

          <div className="px-4 py-4 dark:text-white ">
            <div className="flex items-center gap-2 mb-4 text-gray-800 dark:text-gray-300">
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className=""
                  d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                />
              </svg>
              <span>
                {/* <strong className="text-black dark:text-white">12</strong>  */}
                Some of my activities
              </span>
            </div>

            <ActivityComponent />

            <div className="py-4">
             
              <p>
                My core competencies include PHP, React.js, Next.js, Node.js,
                Laravel, AWS, and Docker. I have also worked with Flutter, Java,
                Microsoft Power Platform, Power App, and Socket.io on various
                projects. I enjoy collaborating with cross-functional teams,
                learning new skills, and solving challenging problems. My
                mission is to create impactful and innovative solutions that
                make a difference in the lives of people.
              </p>
            </div>

            <div className="w-full my-4">
              <Link
                href={`https://aungthuoo.github.io`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 font-medium text-center transition ease-in-out delay-75 rounded-lg cursor-pointer dark:bg-gray-700 dark:text-white bg-slate-100 hover:bg-slate-200 bg-slate-200"
              >
                My experiences
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default OpenToWorkComponent;
