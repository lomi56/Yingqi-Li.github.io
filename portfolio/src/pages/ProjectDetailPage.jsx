import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import styles from './ProjectDetailPage.module.css'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p className={styles.err}>ls: cannot access './{slug}': No such file</p>
        <Link to="/projects" className={styles.back}>
          ← 返回项目列表
        </Link>
      </div>
    )
  }

  return (
    <article className={styles.detail}>
      <Link to="/projects" className={styles.back}>
        ← cd ..
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          {project.status && <span className={styles.status}>{project.status}</span>}
        </div>
      </header>

      <p className={styles.summary}>{project.summary}</p>

      {project.tech.length > 0 && (
        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techTag}>
              {t}
            </span>
          ))}
        </div>
      )}

      <ul className={styles.details}>
        {project.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      {project.links && (project.links.demo || project.links.repo) && (
        <div className={styles.links}>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer">
              demo ↗
            </a>
          )}
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noreferrer">
              repo ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}
