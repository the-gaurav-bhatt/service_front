import { FiCheckCircle } from 'react-icons/fi';
import {
  FaGraduationCap,
  FaLaptopCode,
  FaHandsHelping,
  FaUserFriends,
} from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
const HomePage = () => {
  return (
    <div className="w-full">
      <header className="bg-blue-500 py-6 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to A+ Pathshala</h1>
        <p className="mt-4 text-lg">Unlock Your Potential with A+ Score</p>
      </header>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            What is the A+ Score?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center">
              <FiCheckCircle className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">
                  Official Individual Student Profile
                </p>
                <p>Provided by A+ Pathshala</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaGraduationCap className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">
                  Equivalent to Engineering Degree
                </p>
                <p>Recognized by global companies</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaHandsHelping className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">First Job Guarantee</p>
                <p>Minimum salary of 12 LPA</p>
              </div>
            </div>
            <div className="flex items-center">
              <IoIosRocket className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">Valued by Top Companies</p>
                <p>Facebook, Amazon, Apple, Netflix, Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="md:container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Evaluation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:px-8 gap-8">
            <div className="flex items-center">
              <svg
                fill="#0092E4"
                className="w-16 h-16 mr-3 "
                width="800px"
                height="800px"
                viewBox="0 -64 640 640"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
              </svg>
              <div>
                <p className="font-semibold">A+ Public Activity</p>
                <p>
                  Encourage students to share their learnings on A+ social
                  handles, provide links to tutorials, projects, and
                  documentation, and highlight their participation in external
                  events.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                fill="#0092E4"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="100px"
                className="w-16 h-16 mr-3"
                height="100px"
                viewBox="0 0 3.623 3.623"
              >
                <g>
                  <g>
                    <path d="M2.971 0H0.652c-0.2 0 -0.362 0.163 -0.362 0.362v2.899c0 0.2 0.163 0.362 0.362 0.362h2.319c0.2 0 0.362 -0.163 0.362 -0.362V0.362C3.334 0.163 3.171 0 2.971 0zm0.217 3.261c0 0.12 -0.098 0.217 -0.217 0.217H0.652c-0.12 0 -0.217 -0.098 -0.217 -0.217V0.362c0 -0.12 0.098 -0.217 0.217 -0.217h2.319c0.12 0 0.217 0.098 0.217 0.217v2.899h0z" />
                    <path d="M2.576 1.584H1.048a0.067 0.067 0 0 0 -0.066 0.067 0.067 0.067 0 0 0 0.066 0.067h1.528a0.067 0.067 0 0 0 0.067 -0.067 0.067 0.067 0 0 0 -0.067 -0.067z" />
                    <path d="M2.576 1.888H1.048c-0.037 0 -0.066 0.03 -0.066 0.067s0.03 0.067 0.066 0.067h1.528a0.066 0.066 0 0 0 0.067 -0.067 0.066 0.066 0 0 0 -0.067 -0.067z" />
                    <path d="M2.576 2.191H1.048a0.067 0.067 0 0 0 -0.066 0.067 0.066 0.066 0 0 0 0.066 0.067h1.528a0.066 0.066 0 0 0 0.067 -0.067 0.067 0.067 0 0 0 -0.067 -0.067z" />
                    <path d="M2.576 2.495H1.812c-0.037 0 -0.067 0.03 -0.067 0.067s0.03 0.067 0.067 0.067h0.764c0.037 0 0.066 -0.03 0.066 -0.067s-0.03 -0.067 -0.066 -0.067z" />
                    <path d="M2.576 3.094h-0.535a0.066 0.066 0 0 0 -0.067 0.067 0.066 0.066 0 0 0 0.067 0.067h0.535a0.066 0.066 0 0 0 0.066 -0.067 0.066 0.066 0 0 0 -0.066 -0.067z" />
                    <path d="M1.886 1.292c0 -0.126 -0.145 -0.296 -0.341 -0.345 0.082 -0.055 0.138 -0.164 0.138 -0.261 0 -0.138 -0.112 -0.25 -0.25 -0.25 -0.138 0 -0.25 0.112 -0.25 0.25 0 0.098 0.056 0.206 0.138 0.261 -0.195 0.05 -0.341 0.22 -0.341 0.345 0 0.149 0.905 0.149 0.905 0zm-0.473 -0.273h-0.001l-0.041 -0.048c0.02 0.007 0.041 0.012 0.063 0.012 0.022 0 0.043 -0.004 0.063 -0.011l-0.041 0.047h-0.001l0.107 0.258 -0.127 0.127 -0.127 -0.127 0.107 -0.258z" />
                  </g>
                </g>
              </svg>
              <div>
                <p className="font-semibold">Professional/Tech Profile</p>
                <p>
                  Mention the importance of having a strong presence on
                  platforms like GitHub, LinkedIn, Twitter, LeetCode, and
                  Codeforces.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={256}
                height={256}
                className="w-16 h-16 mr-3"
                fill="#0092E4"
                viewBox="0 0 256 256"
              >
                <defs />
                <g
                  style={{
                    stroke: '#0092E4',
                    strokeWidth: 0,
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 10,
                    fill: '#0092E4',
                    fillRule: 'nonzero',
                    opacity: 1,
                  }}
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 89.983 5.63 c -0.006 -0.267 -0.016 -0.534 -0.026 -0.802 c -0.011 -0.299 -0.02 -0.597 -0.036 -0.897 c -0.031 -0.602 -0.07 -1.207 -0.121 -1.814 c -0.081 -0.973 -0.854 -1.745 -1.827 -1.827 c -0.607 -0.051 -1.21 -0.089 -1.811 -0.121 c -0.305 -0.016 -0.607 -0.025 -0.909 -0.036 c -0.262 -0.009 -0.525 -0.02 -0.786 -0.025 c -0.437 -0.01 -0.871 -0.013 -1.304 -0.013 c -0.072 0 -0.145 0 -0.217 0.001 c -8.628 0.042 -16.548 2.16 -24.544 6.526 C 58.261 6.7 58.12 6.773 57.979 6.85 c -0.05 0.028 -0.099 0.052 -0.149 0.08 c -0.011 0.006 -0.02 0.016 -0.031 0.022 c -6.556 3.654 -13.101 8.811 -19.875 15.585 c -0.77 0.77 -1.523 1.55 -2.268 2.334 l -13.164 1.001 c -0.385 0.029 -0.753 0.169 -1.06 0.402 L 0.785 41.987 c -0.657 0.5 -0.94 1.352 -0.711 2.145 c 0.228 0.793 0.92 1.364 1.742 1.439 l 19.373 1.749 l 6.134 6.134 c -2.174 0.497 -4.389 1.715 -6.286 3.611 c -1.136 1.137 -2.048 2.411 -2.716 3.803 c -0.873 1.849 -2.79 6.61 -4.82 11.651 l -0.991 2.459 c -0.3 0.744 -0.127 1.595 0.441 2.162 c 0.382 0.383 0.894 0.586 1.415 0.586 c 0.251 0 0.505 -0.048 0.748 -0.146 l 2.547 -1.027 c 5 -2.014 9.723 -3.917 11.576 -4.79 c 1.38 -0.664 2.655 -1.576 3.79 -2.711 c 1.896 -1.896 3.113 -4.111 3.61 -6.285 l 5.952 5.952 l 1.749 19.372 c 0.074 0.822 0.646 1.514 1.439 1.742 c 0.183 0.053 0.369 0.078 0.553 0.078 c 0.614 0 1.207 -0.283 1.592 -0.789 l 15.711 -20.646 c 0.233 -0.307 0.373 -0.675 0.402 -1.06 l 0.971 -12.775 c 0.857 -0.811 1.706 -1.635 2.547 -2.475 c 6.779 -6.779 11.939 -13.327 15.594 -19.887 c 0.004 -0.007 0.01 -0.013 0.014 -0.02 c 0.018 -0.032 0.033 -0.063 0.051 -0.095 c 0.167 -0.301 0.326 -0.602 0.486 -0.904 c 4.207 -7.847 6.251 -15.635 6.295 -24.099 c 0.001 -0.083 0.001 -0.165 0.001 -0.248 C 89.996 6.488 89.993 6.06 89.983 5.63 z M 64.413 37.493 c -1.577 1.577 -3.675 2.447 -5.907 2.447 c -2.231 0 -4.329 -0.869 -5.907 -2.447 c -3.257 -3.258 -3.257 -8.557 0 -11.815 v 0 c 3.259 -3.257 8.559 -3.255 11.814 0 c 1.578 1.577 2.448 3.675 2.448 5.907 S 65.992 35.915 64.413 37.493 z"
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      strokeDasharray: 'none',
                      strokeLinecap: 'butt',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 10,
                      fill: '#0092E4',
                      fillRule: 'nonzero',
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  />
                </g>
              </svg>
              <div>
                <p className="font-semibold">Gen-Z Exams</p>
                <p>
                  Describe the relevance of participating and performing well in
                  hackathons, coding contests, and Gen-Z-style exams.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#0092E4"
                width="100px"
                className="w-16 h-16 mr-3"
                height="100px"
                viewBox="0 0 0.64 0.64"
              >
                <path d="M0.1 0.12v0.271l-0.046 0.046A0.049 0.049 0 0 0 0.04 0.472 0.048 0.048 0 0 0 0.088 0.52h0.464A0.048 0.048 0 0 0 0.6 0.472a0.049 0.049 0 0 0 -0.014 -0.034L0.54 0.391V0.12H0.1zm0.04 0.04h0.36v0.22H0.14V0.16zm0.18 0.02 -0.03 0.18H0.32l0.03 -0.18H0.32zm-0.078 0.04 -0.034 0.041L0.2 0.27l0.007 0.009L0.242 0.32l0.022 -0.017L0.236 0.27l0.027 -0.033L0.242 0.22zm0.157 0 -0.022 0.017L0.404 0.27l-0.027 0.033 0.022 0.017 0.034 -0.041L0.44 0.27l-0.007 -0.009L0.398 0.22zM0.129 0.42h0.383l0.046 0.046a0.009 0.009 0 0 1 0.003 0.006 0.008 0.008 0 0 1 -0.008 0.008H0.088A0.008 0.008 0 0 1 0.08 0.472c0 -0.002 0.001 -0.005 0.003 -0.006L0.129 0.42z" />
              </svg>
              <div>
                <p className="font-semibold">Open Source Contribution</p>
                <p>
                  Emphasize the value of having pull requests merged in large
                  organizations&apos; codebases.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                fill="#0092E4"
                className="w-16 h-16 mr-3"
                width="100px"
                height="100px"
                viewBox="0 -64 640 640"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z" />
              </svg>
              <div>
                <p className="font-semibold">Personal/Collaborative Projects</p>
                <p>
                  Highlight the significance of working on real-world projects
                  with a user base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            A+ Pathshala Opportunities
          </h2>
          <table className="w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 md:py-4 px-6 bg-blue-500 text-white font-semibold">
                  A+ Score
                </th>
                <th className="py-2 md:py-4 px-6 bg-blue-500 text-white font-semibold">
                  Internship Guarantee
                </th>
                <th className="py-2 md:py-4 px-6 bg-blue-500 text-white font-semibold">
                  Job Guarantee
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  {'>=100'}
                </td>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  Fixed within 3 months
                </td>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  -
                </td>
              </tr>
              <tr>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  {' '}
                  {'>=175'}
                </td>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  -
                </td>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  Within 5 months ₹12,00,000/year
                </td>
              </tr>
              <tr>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  {' '}
                  {'>=300'}
                </td>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  -
                </td>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  {' '}
                  Within 5 months ₹24,00,000/year
                </td>
              </tr>
              <tr>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  {' '}
                  {'>=400'}
                </td>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  -
                </td>
                <td className="py-2 md:py-4 sm:px-1 md:px-20 font-bold border-b border-black">
                  {' '}
                  Job at FAANGM* Company
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-center text-sm">
            *FAANGM Companies (Facebook, Amazon, Apple, Netflix, Google,
            Microsoft)
          </p>
        </div>
      </section>

      {/* <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <p className="font-semibold text-lg">John Doe</p>
              <p className="mt-2">
                "Thanks to A+ Pathshala, I achieved an A+ Score of 400+ and got
                an amazing job offer from Facebook. Highly recommended!"
              </p>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <p className="font-semibold text-lg">Jane Smith</p>
              <p className="mt-2">
                "A+ Pathshala helped me improve my skills and boost my career.
                With an A+ Score, I secured an internship at Amazon and never
                looked back."
              </p>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <p className="font-semibold text-lg">Michael Johnson</p>
              <p className="mt-2">
                "The A+ Pathshala program is the best investment I made for my
                future. I achieved a high A+ Score and landed a dream job at
                Google. Thank you!"
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Join A+ Pathshala Now</h2>
          <p className="text-lg mb-8">
            Take the first step towards a successful career. Enroll in our
            program and unlock your potential.
          </p>
          <a
            href="/courses/1"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semiboldpy-2  md:py-4 px-8 rounded-lg transition-colors duration-200"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
