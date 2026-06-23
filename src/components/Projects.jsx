import { useState, useRef, useEffect } from "react";
import useInView from "../hooks/useInView";
import { ONGOING, EXECUTED } from "../data/siteData";
import bgImage from "../assets/projectImages/project1/bg-project-sec.png";

const PER_PAGE = 4;

export default function Projects() {
  const [tab, setTab] = useState("ongoing");
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const [ref] = useInView();

  const projects = tab === "ongoing" ? ONGOING : EXECUTED;
  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const isSinglePage = projects.length <= PER_PAGE;

  useEffect(() => setPage(0), [tab]);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selected]);

  const openModal = (proj, i) => {
    setSelected({ proj, index: i });
    setActiveImg(0);
  };

  const visibleProjects = projects.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE,
  );

  return (
    <>
      <section
        id="projects"
        ref={ref}
        style={{
          padding: "90px 0",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(248, 251, 255, 0.3)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0f172a" }}>
              Our Projects
            </h2>
            <p style={{ color: "#64748b", marginTop: 10 }}>
              Excellence in infrastructure, construction & electrification
              across Pakistan
            </p>
            <button
              style={{
                marginTop: 18,
                padding: "12px 26px",
                borderRadius: 30,
                border: "none",
                background: "linear-gradient(90deg,#1d4ed8,#3b82f6)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Explore All Projects
            </button>
          </div>

          {/* TABS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                background: "#eaf2ff",
                padding: 6,
                borderRadius: 14,
              }}
            >
              {["ongoing", "executed"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  style={{
                    padding: "10px 22px",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    background: tab === t ? "#1d4ed8" : "transparent",
                    color: tab === t ? "#fff" : "#1d4ed8",
                    fontWeight: 600,
                  }}
                >
                  {t.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* CARDS */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {visibleProjects.map((p, i) => {
              const proj = typeof p === "string" ? { title: p, images: [] } : p;

              return (
                <div
                  key={i}
                  onClick={() => openModal(proj, i)}
                  style={{
                    minWidth: 270,
                    flex: "1 1 270px",
                    background: "#fff",
                    borderRadius: 18,
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* MAIN IMAGE */}
                  <div
                    style={{
                      height: 180,
                      background: "#dbeafe",
                      overflow: "hidden",
                    }}
                  >
                    {proj.images && proj.images.length > 0 ? (
                      <img
                        src={proj.images[0]}
                        alt="project"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    ) : (
                      <div style={{ textAlign: "center", paddingTop: 60 }}>
                        🏗️
                      </div>
                    )}
                  </div>

                  {/* THUMBNAILS */}
                  <div style={{ display: "flex", gap: 5, padding: 8 }}>
                    {proj.images?.slice(0, 3).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`thumb-${idx}`}
                        style={{
                          width: 45,
                          height: 45,
                          objectFit: "cover",
                          borderRadius: 6,
                          border: "1px solid #e5e7eb",
                        }}
                      />
                    ))}
                    {proj.images?.length > 3 && (
                      <div
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 6,
                          background: "#1d4ed8",
                          color: "#fff",
                          fontSize: 12,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 600,
                        }}
                      >
                        +{proj.images.length - 3}
                      </div>
                    )}
                  </div>

                  {/* TEXT */}
                  <div style={{ padding: 14 }}>
                    <h4
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#0f172a",
                      }}
                    >
                      {proj.title}
                    </h4>
                    <p style={{ fontSize: 12, color: "#64748b" }}>
                      {proj.location || "Pakistan"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* PAGINATION */}
          {!isSinglePage && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 12,
                marginTop: 36,
              }}
            >
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 0))}
                disabled={page === 0}
                style={{
                  padding: "10px 22px",
                  borderRadius: 10,
                  border: "none",
                  background: page === 0 ? "#e2e8f0" : "#1d4ed8",
                  color: page === 0 ? "#94a3b8" : "#fff",
                  fontWeight: 600,
                  cursor: page === 0 ? "not-allowed" : "pointer",
                }}
              >
                ← Prev
              </button>

              <span style={{ color: "#64748b", fontWeight: 600 }}>
                {page + 1} / {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                disabled={page === totalPages - 1}
                style={{
                  padding: "10px 22px",
                  borderRadius: 10,
                  border: "none",
                  background: page === totalPages - 1 ? "#e2e8f0" : "#1d4ed8",
                  color: page === totalPages - 1 ? "#94a3b8" : "#fff",
                  fontWeight: 600,
                  cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
                }}
              >
                Next →
              </button>
            </div>
          )}

          {/* MODAL */}
          {selected && (
            <div
              onClick={() => setSelected(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(2,6,23,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "90%",
                  maxWidth: 700,
                  background: "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <img
                  src={selected.proj.images?.[activeImg]}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 500,
                    objectFit: "contain",
                    background: "#000",
                  }}
                />

                {/* THUMBNAILS */}
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    padding: 10,
                    flexWrap: "wrap",
                  }}
                >
                  {selected.proj.images?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      onClick={() => setActiveImg(i)}
                      style={{
                        width: 70,
                        height: 60,
                        objectFit: "cover",
                        borderRadius: 8,
                        cursor: "pointer",
                        border:
                          activeImg === i
                            ? "2px solid #1d4ed8"
                            : "1px solid #e5e7eb",
                      }}
                    />
                  ))}
                </div>

                <div style={{ padding: 20 }}>
                  <h2 style={{ color: "#0f172a" }}>{selected.proj.title}</h2>
                  <p style={{ color: "#64748b" }}>{selected.proj.location}</p>
                  <button
                    onClick={() => setSelected(null)}
                    style={{
                      marginTop: 15,
                      padding: "10px 18px",
                      background: "#1d4ed8",
                      color: "#fff",
                      border: "none",
                      borderRadius: 10,
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
