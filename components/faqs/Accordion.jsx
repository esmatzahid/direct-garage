"use client";
import { faqs } from "@/data/faq";
import { useState, useMemo } from "react";

export default function Accordion() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    if (!searchQuery) return faqs;
    
    return faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section className="section pt-80 mb-30">
      <div className="container-sub">
        <div className="box-faqs">
          <div className="text-center">
            <h2 className="color-brand-1 mb-20 wow fadeInUp">
              Frequently Asked Questions
            </h2>
          </div>
          <div className={`wow fadeInUp form-group ${searchQuery ? "focused" : ""}`}>
            {/* <label className="form-label" htmlFor="search">
              Search FAQs
            </label> */}
            <input
              className={`form-control ${searchQuery ? "filled" : ""}`}
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for questions or answers..."
            />
          </div>

          <div className="mt-60 mb-40">
            <div className="accordion wow fadeInUp" id="accordionFAQ">
              {filteredFaqs.map((faq, i) => (
                <div key={faq.id} className="accordion-item">
                  <h5 className="accordion-header" id={`heading${i}`}>
                    <button
                      className={`accordion-button text-heading-5 ${
                        i ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${i}`}
                      aria-expanded={`${!i ? "true" : "false"}`}
                      aria-controls={`collapse${i}`}
                    >
                      {faq.question}
                    </button>
                  </h5>
                  <div
                    className={`accordion-collapse collapse ${!i ? "show" : ""}`}
                    id={`collapse${i}`}
                    aria-labelledby={`heading${i}`}
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}