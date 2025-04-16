"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* {menuItems.map((elm, i) => (
        <li key={i} className="has-children">
          <a
            className={`${
              elm.subMenu.some(
                (elm3) => pathname.split("/")[1] === elm3.link.split("/")[1]
              )
                ? "active-link"
                : ""
            }`}
          >
            {elm.title}
          </a>
          {elm.title === "Results" ? (
            <ul
              className="results-submenu "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                listStyle: "none",
                padding: "20px 0",
              }}
            >
              {elm.subMenu.map((resultItem, resultIndex) => (
                <li key={resultIndex} style={{ width: "170px !important" }} className="results-item">
                  <img
                    src={resultItem.mainImage}
                    alt={`Result ${resultIndex + 1}`}
                    style={{
                      width: "170px",
                      height: "96px",
                      borderRadius: "8px",
                    }}
                  />
                </li>
              ))}
            </ul>
          ) : (
            // <div className="container">

           
            <ul
              className="main_flex sub-menu pt-20 pb-20"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                placeContent:"center"
              }}
            >
              {elm.subMenu.map((elm2, i2) => (
                
                <li
                  key={i2}
                  style={{
                    width: "30%", // Adjust width to ensure 3 items per row
                    minWidth: "200px",
                  }}
                >
                  <div className="main_flex">
                    {elm2.mainImage && (
                      <img
                        src={elm2.mainImage}
                        style={{
                          width: "100%",
                          borderRadius: "8px",
                        }}
                      />
                    )}
                  </div>
                  <Link
                    className={
                      pathname.split("/")[1] === elm2.link.split("/")[1]
                        ? "active-link"
                        : ""
                    }
                    href={elm2.link}
                  >
                    <span className="main_flex">
                      {elm2.icon && (
                        <img
                          src={elm2.icon}
                          // alt={elm2.title}
                          style={{ width: "20px", marginRight: "8px" }}
                        />
                      )}
                      {elm2.title}
                    </span>
                  </Link>
                  {elm2.subMenu && (
                    <div className="nested-menu">
                      {elm2.subMenu.map((nestedItem, nestedIndex) => (
                        <div key={nestedIndex} className="nested-menu-item">
                          <Link
                            href={nestedItem.link}
                            className={`main_link ${
                              pathname.split("/")[1] ===
                              nestedItem.link.split("/")[1]
                                ? "active-link"
                                : ""
                            }`}
                            style={{ marginLeft: "30px" }}
                          >
                            {nestedItem.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            // </div>
          )}
        </li>
      ))} */}
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/faqs">Faqs</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/search">Search</Link>
      </li>
    </>
  );
}
