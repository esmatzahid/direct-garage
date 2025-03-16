// import Breadcumb from "@/components/otherPages/faqs/Breadcrumb";
import Accordion from "@/components/faqs/Accordion";
import Header2 from "@/components/headers/Header2";
import Breadcumb from "@/components/otherPages/faqs/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      {/* <Header2 /> */}
      <main className="main">
        <Breadcumb />
        <Accordion />
      </main>
    </>
  );
};

export default page;
