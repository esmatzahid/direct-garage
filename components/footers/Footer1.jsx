import {
  legalLinks,
  links1,
  links2,
  links3,
  links4,
  links5,
  socialMediaPlatforms,
} from "@/data/footerLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer1() {
  return (
    <footer className="footer">
      <div className="footer-1">
        <div className="container-sub">
          <div className="box-footer-top">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 text-md-start text-center mb-15 wow fadeInUp">
                <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                  <a className="mr-30" href="#">
                    <Image
                      width={150}
                      height={19}
                      style={{ height: "fit-content" }}
                      src="/assets/imgs/c7cacd_c519d744eb6145da99cc8626213cfb52_mv2-_1_.jpg"
                      alt="Garage"
                    />
                  </a>
                  <a
                    className="text-14-medium call-phone color-white hover-up"
                    href="tel:+41227157000"
                  >
                    +44 7857 984362
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-md-end text-center mb-15 wow fadeInUp">
                <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                  <span className="text-18-medium color-white mr-10">
                    Follow Us
                  </span>
                  {socialMediaPlatforms.map((elm, i) => (
                    <a key={i} className={elm.className} href={elm.href}></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-lg-3 width-20">
              <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                Auto Repair Services
              </h5>
              <ul className="menu-footer wow fadeInUp">
                {links1.map((elm, i) => (
                  <li key={i}>
                    <Link href={elm.href}>{elm.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                Customization
              </h5>
              <ul className="menu-footer wow fadeInUp">
                {links2.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                Registration & Tests
              </h5>
              <ul className="menu-footer wow fadeInUp">
                {links3.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                Additional Services
              </h5>
              <ul className="menu-footer wow fadeInUp">
                {links4.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h5 className="text-18-medium color-white mb-20 wow fadeInUp">
                Support & Convenience
              </h5>
              <ul className="menu-footer wow fadeInUp">
                {links5.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <div className="container-sub">
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12 text-center text-lg-start">
                <span className="text-14 color-white mr-50">
                  © {new Date().getFullYear()} Garage
                </span>
                <ul className="menu-bottom">
                  {legalLinks.map((elm, i) => (
                    <li key={i}>
                      <Link href={elm.href}>{elm.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 text-center text-lg-end">
                <a className="btn btn-link-location" href="#">
                  Canada
                </a>
                <a className="btn btn-link-globe active" href="#">
                  English
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
