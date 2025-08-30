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
    <div style={{ padding: "2rem" }}>
      <h1>Mes Projets</h1>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}