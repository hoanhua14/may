const projects = [
  {
    name: "MRQ",
    gitUrl: "https://github.com/hoanhua14/mrq",
    gitLogo: "https://img.icons8.com/material-rounded/24/github.png",
    description:
      "Designed, architected, and deployed a React application with Tailwind reusable, responsive components to allow users to track, record, and view the progress of their health related goals via personalized charts and tables. Implemented authentication using JWTs for users to access protected endpoints and CI/CD  to automate the building and testing process while maintaining a working pipeline. Protected RESTful API endpoints using FastAPI framework to facilitate better and more secure users’ experience. ",
  },
  {
    name: "Car.Inc",
    gitUrl: "https://github.com/hoanhua14/carinc",
    gitLogo: "https://img.icons8.com/material-rounded/24/github.png",
    description:
      "Engineered Single Page Application (SPA) for dealership management leveraging React, seamlessly integrating microservices for servicing, sales, and inventory.Developed a Docker-based RESTful API system capable of handling data for a rapidly growing dealership. Built React component library with fetching and state management solutions for direct data via API calls. Architected object-oriented models for each microservice, ensuring efficient data organization.",
  },
  {
    name: "Productive",
    gitUrl: "https://github.com/hoanhua14/productive",
    gitLogo: "https://img.icons8.com/material-rounded/24/github.png",
    description:
      "Created and developed a project management web application using Django, Python, CSS, HTML, and SQLite to help organize, prioritize, and accomplish goals effectively, while following Agile methodologies. Empowered users to effortlessly edit tasks and projects, boosting productivity and efficiency. Protected endpoints for logged in users to create, manage, and delete records.",
  },
];

const Exp = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <>
          {/* <img src={project.gitLogo} alt={project.name} /> */}
          <a href={project.gitUrl}>
            <img src={project.gitLogo} alt="mrq" />
          </a>
          <div>{project.name}</div>
          <div>{project.description}</div>
        </>
      ))}
    </div>
  );
};
export default Exp;
