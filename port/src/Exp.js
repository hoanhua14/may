const projects = [
  {
    name: "MRQ",
    gitUrl: "https://github.com/hoanhua14/mrq",
    gitLogo: "https://img.icons8.com/material-rounded/24/github.png",
    description: [{1}, {2}],
    techStack:
      "JavaScript | React.js | Python | fastAPI | Tailwind CSS | Postgresql",
  },
  {
    name: "Car.Inc",
    gitUrl: "https://github.com/hoanhua14/carinc",
    gitLogo: "https://img.icons8.com/material-rounded/24/github.png",
    description:
      "Engineered Single Page Application (SPA) for dealership management leveraging React, seamlessly integrating microservices for servicing, sales, and inventory.\nDeveloped a Docker-based RESTful API system capable of handling data for a rapidly growing dealership. Built React component library with fetching and state management solutions for direct data via API calls. Architected object-oriented models for each microservice, ensuring efficient data organization.",
    techStack: "Python | Docker | React.js | RESTful API",
  },
  {
    name: "Productive",
    gitUrl: "https://github.com/hoanhua14/productive",
    gitLogo: "https://img.icons8.com/material-rounded/24/github.png",
    description:
      "Created and developed a project management web application using Django, Python, CSS, HTML, and SQLite to help organize, prioritize, and accomplish goals effectively, while following Agile methodologies. Empowered users to effortlessly edit tasks and projects, boosting productivity and efficiency. Protected endpoints for logged in users to create, manage, and delete records.",
    techStack: "Python | Django",
  },
];

const Exp = () => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div className="project">
          <div className="intro">
            {project.name}
            <a href={project.gitUrl}>
              <br></br>
              <img src={project.gitLogo} alt={project.name}></img>
              <br></br>
            </a>
            <div>{project.techStack}</div>
          </div>
          <ul className="description">
            <>{project.description.map((des, index) => (
              <li>{des}</li>
            ))}</>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Exp;
