import React from "react";
import Biography from "./Biography";
import Experience from "./Experience";
import Education from "./Education";
import Awards from "./Awards";
import Image from "next/image";

export default function TeamDetails() {
  return (
    <section className="section pt-120">
      <div className="container-sub">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-team-single wow fadeInUp">
              <ul className="nav nav-tabs list-tabs-team" role="tablist">
                <li>
                  <a
                    className="active"
                    href="#tab-biography"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-biography"
                    aria-selected="true"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-experiences"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-experiences"
                    aria-selected="false"
                  >
                    Expertise
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-education"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-education"
                    aria-selected="false"
                  >
                    Certifications
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-awards"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-controls="tab-awards"
                    aria-selected="false"
                  >
                    Achievements
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="tab-biography"
                  role="tabpanel"
                  aria-labelledby="tab-biography"
                >
                  <Biography />
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-experiences"
                  role="tabpanel"
                  aria-labelledby="tab-experiences"
                >
                  <Experience />
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-education"
                  role="tabpanel"
                  aria-labelledby="tab-education"
                >
                  <Education />
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-awards"
                  role="tabpanel"
                  aria-labelledby="tab-awards"
                >
                  <Awards />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 position-relative">
            <div className="box-user-info wow fadeInUp">
              <div className="image-user">
                <Image
                  width={984}
                  height={990}
                  style={{
                    height: "fit-content",
                    maxHeight: "350px",
                    objectFit: "cover",
                  }}
                  src="/assets/imgs/13.jpg"
                  alt="luxride"
                />
              </div>
              <div className="info-user">
                <h6 className="text-20-medium color-text">
                  Hi, I’m Rahman Zahid
                </h6>
                <ul className="list-info-user">
                  <li>
                    <div className="label-left text-16-medium">Phone</div>
                    <div className="text-info-right text-14">
                      07811134592
                    </div>
                  </li>
                  <li>
                    <div className="label-left text-16-medium">Email</div>
                    <div className="text-info-right text-14">
                      esmatzahid@icloud.com 
                    </div>
                  </li>
                  <li>
                    <div className="label-left text-16-medium">Follow</div>
                    <div className="text-info-right text-14">
                      <a className="icon-socials icon-facebook" href="#"></a>
                      <a className="icon-socials icon-twitter" href="#"></a>
                      <a className="icon-socials icon-instagram" href="#"></a>
                      <a className="icon-socials icon-linkedin" href="#"></a>
                    </div>
                  </li>
                </ul>
                <div className="box-button-send">
                  <a className="btn btn-primary" href="#">
                    Send a Message
                    <svg
                      className="icon-16 ml-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
