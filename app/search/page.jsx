"use client";
import Accordion from "@/components/faqs/Accordion";
import Header2 from "@/components/headers/Header2";
import Breadcumbs from "@/components/otherPages/search/Breadcrumbs";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("helo");
  // Handle input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      fetch(`/api/obdcode?code=${encodeURIComponent(searchQuery)}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setSearchResults(Array.isArray(data) ? data : [data]);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching OBD codes:", error);
          setError("Failed to fetch OBD codes. Please try again.");
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <>
      {/* <Header2 /> */}
      <main className="main">
        <Breadcumbs />
        <div
          style={{
            border: "2px solid #ccc",
            borderRadius: "8px",
            height: "50vh",
            margin: "20px 55px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              marginTop: "20px",
              position: "relative",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <input
              type="text"
              placeholder="Search OBD codes..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                width: "100%",
                padding: "10px",
                paddingLeft: "40px",
                fontSize: "20px",
                borderRadius: "8px",
                border: "2px solid #ccc",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  fill="#888"
                />
              </svg>
            </div>
          </div>

          {/* Search results section */}
          <div style={{ marginTop: "20px", width: "100%", maxWidth: "800px" }}>
            {loading && (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <p>Searching for OBD code information...</p>
              </div>
            )}

            {error && (
              <div
                style={{ color: "red", textAlign: "center", padding: "20px" }}
              >
                <p>{error}</p>
              </div>
            )}

            {!loading &&
              !error &&
              searchQuery &&
              searchResults.length === 0 && (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <p>No OBD codes found for "{searchQuery}"</p>
                </div>
              )}

            {!loading && !error && searchResults.length > 0 && (
              <div>
                <h3 style={{ marginBottom: "15px" }}>OBD Code Results:</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      style={{
                        padding: "15px",
                        marginBottom: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      <h4 style={{ margin: "0 0 10px 0" }}>
                        {result.code || "Unknown Code"}
                      </h4>
                      <p style={{ margin: "0 0 5px 0" }}>
                        <strong>Description:</strong>{" "}
                        {result.description || "No description available"}
                      </p>
                      {result.solution && (
                        <p style={{ margin: "0" }}>
                          <strong>Solution:</strong> {result.solution}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
