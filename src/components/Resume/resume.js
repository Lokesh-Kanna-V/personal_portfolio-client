import React from "react";
import Image from "next/image";

import profilePic from "../../../public/profilePic.jpeg";
import email from "../../../public/email.png";
import phone from "../../../public/telephone.png";
import location from "../../../public/pin.png";
import github from "../../../public/github.png";
import instagram from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";
import twitter from "../../../public/twitter.png";
import website from "../../../public/web.png";

export default function Resume() {
  return (
    <div className="container py-20 mx-auto p-4">
      <div
        id="sheet"
        className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-6"
      >
        <div id="headerDiv" className="flex flex-wrap items-start mb-6">
          <div id="headerDiv-Title" className="flex-1 pr-4">
            <p id="name" className="text-2xl font-bold mb-1">
              Lokesh Kanna
            </p>
            <p id="role" className="text-xl text-gray-600">
              FullStack Developer
            </p>
          </div>

          {/* Vertical Divider - Start */}
          <div class="mx-4 my-0 flex items-center">
            <div class="border-l border-gray-300 h-32"></div>
          </div>
          {/* Vertical Divider - End */}

          <div id="headerDiv-socials" className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Image src={email} alt="Email Icon" className="w-6 h-6" />
              <span>vlokeshkanna@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={phone} alt="Phone Icon" className="w-6 h-6" />
              <span>+91 7418285050</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={location} alt="Location Icon" className="w-6 h-6" />
              <a
                href="https://maps.app.goo.gl/nTmjvZEnMzjwHT7h9"
                className="text-blue-600 hover:underline"
              >
                Tiruppur, TN, India
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Divider - Start */}
        <div class="mt-0 mb-4">
          <hr class="border-t border-gray-300" />
        </div>
        {/* Horizontal Divider - End */}

        <div id="profileDiv" className="flex flex-wrap mb-6">
          <div className="flex-shrink-0 w-1/3 md:w-1/5 flex items-center justify-center">
            <Image
              src={profilePic}
              alt="Profile Picture of Lokesh Kanna"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <div className="w-full md:w-4/5 text-start mt-4 md:mt-0">
            <p className="text-gray-800">
              An experienced Full Stack Developer with a strong background in
              HTML, CSS JavaScript, NodeJS, MongoDB and MySQL capable of
              skilfully using JS frameworks like React and React Native to build
              web and mobile apps. Committed in implementing continuous
              improvement in professional as well as personal level. I am
              particularly drawn towards interesting and challenging
              opportunities in the field of Information Technology, one which
              would make the best use of my skills and further develop it
              through professional experience. I am aiming to secure a place in
              a global company which will provide commercial exposure and
              opportunities for progression.
            </p>
          </div>
        </div>

        {/* Horizontal Divider - Start */}
        <div class="mt-0 mb-4">
          <hr class="border-t border-gray-300" />
        </div>
        {/* Horizontal Divider - End */}

        <div id="contentDiv" className="flex flex-wrap">
          <div id="workProject" className="w-full md:w-8/12 pr-4">
            <h4 className="text-xl font-semibold mb-4">Work Experience</h4>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-lg font-semibold">FullStack Developer</h5>
                <p className="text-sm text-gray-600">
                  ZealIT Digital, India | 2024 - Present
                </p>
              </div>
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li>
                  Analyzed and understood customer processes to identify areas
                  for improvement, resulting in increased productivity and
                  efficiency.
                </li>
                <li>
                  Acted as a liaison between the company and customers,
                  proposing and implementing process improvements to meet
                  customer needs and expectations.
                </li>
                <li>
                  Designed and developed front-end and back-end applications,
                  ensuring seamless integration of APIs and adherence to
                  customer requirements.
                </li>
                <li>
                  Managed a team of developers, providing guidance and direction
                  to achieve project goals and deliverables aligned with
                  customer expectations.
                </li>
                <li>
                  Successfully delivered projects that met or exceeded customer
                  expectations, resulting in increased satisfaction and
                  retention.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-lg font-semibold">
                  Senior Supply Chain Analyst
                </h5>
                <p className="text-sm text-gray-600">
                  Comorin Technologies, India | 2020 - 2023
                </p>
              </div>
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li>
                  Analyzed and understood customer processes to identify areas
                  for improvement, resulting in increased productivity and
                  efficiency.
                </li>
                <li>
                  Acted as a liaison between the company and customers,
                  proposing and implementing process improvements to meet
                  customer needs and expectations.
                </li>
                <li>
                  Designed and developed front-end and back-end applications,
                  ensuring seamless integration of APIs and adherence to
                  customer requirements.
                </li>
                <li>
                  Managed a team of developers, providing guidance and direction
                  to achieve project goals and deliverables aligned with
                  customer expectations.
                </li>
                <li>
                  Successfully delivered projects that met or exceeded customer
                  expectations, resulting in increased satisfaction and
                  retention.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-lg font-semibold">
                  Contract Management Assistant
                </h5>
                <p className="text-sm text-gray-600">
                  Tereos, France | 2019 - 2020
                </p>
              </div>
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li>
                  Successfully managed contracts from Germany and North Eastern
                  countries including Poland, Austria, Hungary, Switzerland, and
                  Czech Republic, ensuring meticulous registration and execution
                  processes.
                </li>
                <li>
                  Proactively identified and anticipated potential issues that
                  could result in customer dissatisfaction, implementing
                  preventive measures to mitigate risks and maintain high
                  customer satisfaction levels.
                </li>
                <li>
                  Collaborated cross-functionally with sales, supply chain, and
                  quality control departments to swiftly address and resolve
                  customer concerns and issues, fostering strong
                  interdepartmental communication and cooperation.
                </li>
              </ul>
            </div>
          </div>

          {/* Vertical Divider - Start */}
          <div class="mx-4 my-0 h-content flex items-center">
            <div class="border-l border-gray-300 h-full"></div>
          </div>
          {/* Vertical Divider - End */}

          <div className="w-full md:w-3/12">
            <h4 className="text-xl font-semibold mb-4">Skills</h4>
            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-2">Technical</h5>
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>React Framework</li>
                <li>Node JS</li>
                <li>API</li>
                <li>SQL & NOSQL</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-2">Professional</h5>
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li>Effective Communication</li>
                <li>Lean 6 Sigma</li>
                <li>Problem Solving</li>
                <li>Cross Functional Team Work</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-4">Certifications</h4>
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li>BSCM (APICS)</li>
                <li>CAPM (PMI)</li>
                <li>FullStack Development (GUVI)</li>
                <li>Python (GUVI)</li>
                <li>Blockchain Development (LinkedIn Learning)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-4">Language Fluency</h4>
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li>Tamil - Mother Tongue</li>
                <li>English - Professional</li>
                <li>French - Intermediate</li>
                <li>Telugu - Conversational</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-4">Interests</h4>
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li>Reading</li>
                <li>Photography</li>
                <li>Programming</li>
                <li>Cooking</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="footerDiv"
          className="flex flex-wrap items-center justify-between border-t pt-4 mt-6"
        >
          <div className="flex items-center space-x-2">
            <Image src={linkedin} alt="Phone Icon" className="w-6 h-6" />
            <span>LinkedIn</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={twitter} alt="Phone Icon" className="w-6 h-6" />
            <span>Twitter</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={instagram} alt="Phone Icon" className="w-6 h-6" />
            <span>Instagram</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={website} alt="Phone Icon" className="w-6 h-6" />
            <span>Website</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={github} alt="Phone Icon" className="w-6 h-6" />
            <span>Github</span>
          </div>
        </div>
      </div>
    </div>
  );
}
