import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

// 项目卡片：整卡可点，进入 /projects/:slug 详情页
export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.meta}>
          {project.year}
          {project.status && <span className={styles.status}>{project.status}</span>}
        </span>
      </div>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.tech}>
        {project.tech.map((t) => (
          <span key={t} className={styles.techTag}>
            {t}
          </span>
        ))}
      </div>
    </Link>
  )
}
