export default function Projects() {
  const projects = [
    { title: "Portfolio Next.js", desc: "Un site personnel moderne" },
    { title: "ToDo App", desc: "Application de tâches en React" },
    { title: "Interactive color changer", desc: "application en react" },
    { title: "cinéma app", desc: "apllication des cards descriptives des films " },
    { title: "travel agence", desc: "apllication  avec javaScript" },
    { title: "fifaplayer cards", desc: "apllication des cards descriptives des jours de football " },
  ];
  ];

  return (
    <div style={{
        padding: "2rem",
        background: "#f5f7fa",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}>
      <h1 style={{
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#2a5298",
        }}>Mes Projets</h1>
      <ul style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5rem",
          listStyle: "none",
          padding: 0,
        }}>
        {projects.map((p, i) => (
          <li key={i} style={{
              background: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(0, 0, 0, 0.1)";
            }}>
            <h3 style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1.3rem",
                color: "#1e3c72",
              }}>{p.title}</h3>
            < style={{ fontSize: "1rem", color: "#444" }}>{p.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}