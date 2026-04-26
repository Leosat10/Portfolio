import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>

      {/* Image (optional) */}
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={300}
          className={styles.image}
        />
      )}

      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.cta}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
