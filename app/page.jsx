
// import Footer3 from "@/components/footers/Footer3";
// import Header3 from "@/components/headers/Header3";
// import Blogs from "@/components/homes/common/blogs/Blogs";
// import Cities from "@/components/homes/home-3/Cities";
// import DownloadApp from "@/components/common/downloadApp/DownloadApp";
// import Features from "@/components/common/features/Features2";
// import Feet from "@/components/homes/home-3/Feet";
// import Hero from "@/components/homes/home-3/Hero";
// import Partners from "@/components/homes/home-3/Partners";
// import Proces2 from "@/components/homes/home-3/Proces2";
// import Process from "@/components/homes/home-3/Process";
// import Service from "@/components/homes/home-3/Service";
// import Testimonials from "@/components/homes/home-3/Testimonials";
// import MobailHeader1 from "@/components/headers/MobailHeader1";
// export const metadata = {
//   title:
//     "Home 3 || Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
//   description:
//     "Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
// };

// export default function Home() {
//   return (
//     <>
//       <Header3 /> <MobailHeader1 />
//       <main className="main">
//         <Features />
//         {/* <Hero />
//         <Partners />
//         <Process />
//         <Feet />
//         <Proces2 />
//         <Service />
//         <Testimonials />
//         <Cities />
//         <Blogs />
//         <DownloadApp /> */}
//       </main>
//       <Footer3 />
//     </>
//   );
// }
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";

import Blogs from "@/components/homes/common/blogs/Blogs";
import DownloadApp from "@/components/homes/home-2/DownloadApp";
import Facts from "@/components/homes/home-2/Facts";
import Feet from "@/components/homes/home-2/Feet";
import Hero from "@/components/homes/home-2/Hero";
import Partners from "@/components/homes/common/partners/Partners2";
import Process from "@/components/common/process/Process2";
import Service from "@/components/homes/home-1/Service";
import Testimonials from "@/components/homes/home-2/Testimonials";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import Faq from "@/components/homes/home-5/Faq";
import TeamDetails from "@/components/otherPages/team/TeamDetails";
import BreadCumb2 from "@/components/otherPages/team/BreadCumb2";
import ServiceMain from "@/components/homes/home-3/services";
import ThirdGrid from "@/ui/ThirdGrid";
import ImageGrid from "@/ui/ImageGrid";
// export const metadata = {
//   title:
//     "Home 2 || Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
//   description:
//     "Lixride Chauffeur Limousine Transport and Car Hire Nextjs Template",
// };

export default function Home() {
  return (
    <>
      {/* <Header2 /> <MobailHeader1 /> */}
      <main className="main">
        <Hero />
        <Process />
        <Faq />
        <BreadCumb2 teamMember={3} />
        <TeamDetails />
        <Service />
        <section className="section pt-120">
          <div className="container-sub">
            <div className="text-center">
              <h2 className="heading-44-medium wow fadeInUp">Our Results</h2>
            </div>
          </div>
        </section>
        <div
          className="mt-60 mb-60"
          style={{
            overflow: "hidden",
          }}
        >
          <ThirdGrid />
          <ImageGrid />
        </div>
        {/* <Feet />
        <Facts />
        <Testimonials />
        <Blogs />
        <Partners />
        <DownloadApp />  */}
      </main>
      {/* <Footer2 /> */}
    </>
  );
}
