import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';

const myProjects = [
  {
    id: 1,
    title: "Light weight secure operating system (On-going)",
    description:
      "This project focuses on building a lightweight operating system from scratch that runs directly on hardware (Currently working on this)",
    link: "https://github.com/Leosat10/LeOS.git",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing my skills, projects, and experience.",
    link: "https://github.com/Leosat10/Portfolio",
  },
  {
    id: 3,
    title: "Mobile Charging System",
    description:
      "A hardware-based mobile charging system project published on Hackster.",
    link: "https://leosat10.github.io/Mobile-Charging-System",
  },
  {
    id: 4,
    title: "Pick and Place Robot",
    description:
      "An automated pick and place robot project demonstrating robotics and control systems.",
    link: "https://leosat10.github.io/Pick-and-Place-Robot",
  },
];

export const ProjectsSection = () => {
  return (
    <>
      <div className={styles.header}>
        <h3>My Projects</h3>
      </div>

      <div className={styles.container}>
        {myProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default function ProjectsPage(props) {
  return <ProjectsSection {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Projects',
    },
  };
}
