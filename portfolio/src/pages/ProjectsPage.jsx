import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <>
      <SectionHeading command="ls" path="./projects" />
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  )
}
