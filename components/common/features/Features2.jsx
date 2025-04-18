import Image from "next/image";
import Link from "next/link";

const listItems = ["Affordable", "Punctual", "Professional"];

export default function Features() {
  return (
    <section className="section pt-20 pb-120">
      <div className="container-sub">
        <div className="row ">
          <div className="col-lg-6 mb-30">
            <div className="box-region-right wow fadeInUp">
              <p className="sub_text text-16 color-text">
                Digital Marketing Agency driven by
              </p>
              <h1 className="main_text heading-44-medium color-text mb-30">
                RELATIONSHIPS
                <br />& RESULTS{" "}
              </h1>
              <div className={`main_flex form-group gap-3 align-items-center`}>
                <input
                  className={`form-control`}
                  id="fullname"
                  type="text"
                  value=""
                  style={{
                    width: "60%",
                  }}

                  // onChange={(e) => setEmailValue(e.target.value)}
                />
                <div className="box-button-login d-none2 d-inline-block align-middle">
                  <Link className="all_btn btn btn-white  hover-up" href="/register">
                    Get My Free Proposal
                  </Link>
                </div>
              </div>

              <ul className="list-ticks">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="box-image-showcase wow fadeInUp">
              <div className="box-image-top text-center text-lg-start">
                <Image
                  width={470}
                  height={280}
                  src="/assets/imgs/page/homepage3/img1.png"
                  alt="luxride"
                />
              </div>
              <div className="box-image-bottom text-end text-sm-center text-lg-end">
                <Image
                  width={125}
                  height={125}
                  src="/assets/imgs/page/homepage3/img3.png"
                  alt="luxride"
                />
                <Image
                  width={250}
                  height={250}
                  src="/assets/imgs/page/homepage3/img2.png"
                  alt="luxride"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
