import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Partners from "@/components/common/partners/Partners";
import Process from "@/components/common/process/Process";
import Facts from "@/components/common/facts/Facts";
import Features2 from "@/components/common/features/Features";
import Testimonials from "@/components/common/testimonials/Testimonials";
import DownloadApp from "@/components/common/downloadApp/DownloadApp";
import Breadcumb from "@/components/otherPages/about/Breadcumb";
import Faq from "@/components/otherPages/about/Faq";
import Features from "@/components/otherPages/about/Features";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Header3 from "@/components/headers/Header3";
import Footer3 from "@/components/footers/Footer3";
import Features3 from "@/components/otherPages/about/Features3";
import Banner from "@/components/otherPages/services/Banner";


export default function page() {
  return (
    <>
      <main className="main">
        {/* <Breadcumb /> */}
        <Banner />
        {/* <Partners /> */}
        <Features3/>
        <Features />
        {/* <Testimonials /> */}
        <Facts />
        {/* <Features2 /> */}
        {/* <Process /> */}
        <Faq />
        {/* <DownloadApp /> */}
      </main>
    </>
  );
}
