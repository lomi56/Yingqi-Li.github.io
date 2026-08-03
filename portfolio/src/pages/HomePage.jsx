import { Link } from 'react-router-dom'
import TerminalHero from '../components/TerminalHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillList from '../components/SkillList.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import PostCard from '../components/PostCard.jsx'
import { profile } from '../data/profile.js'
import { site } from '../data/site.js'
import { skillGroups } from '../data/resume.js'
import { projects } from '../data/projects.js'
import { posts } from '../content/blog/index.js'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <TerminalHero />

      <section className={styles.about}>
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className={styles.actions}>
          <Link to="/resume" className={styles.action}>
            <span className={styles.prompt}>$</span> cat ./resume
          </Link>
          <a
            href={`mailto:${site.email}`}
            className={`${styles.action} ${styles.actionMuted}`}
          >
            <span className={styles.prompt}>$</span> cat ./contact
          </a>
        </div>
      </section>

      <SectionHeading command="ls" path="./skills" />
      <SkillList groups={skillGroups} />

      <SectionHeading command="ls" path="./projects" />
      <div className={styles.grid}>
        {projects.slice(0, 2).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <SectionHeading command="ls" path="./blog" />
      <div className={styles.posts}>
        {posts.slice(0, 2).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}
