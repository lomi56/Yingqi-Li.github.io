import SectionHeading from '../components/SectionHeading.jsx'
import Timeline from '../components/Timeline.jsx'
import SkillList from '../components/SkillList.jsx'
import { profile } from '../data/profile.js'
import { education, skillGroups, experience } from '../data/resume.js'
import styles from './ResumePage.module.css'

export default function ResumePage() {
  return (
    <>
      <SectionHeading command="cat" path="./resume" />

      <div className={styles.head}>
        <h1 className={styles.name}>
          {profile.name}
          <span className={styles.nameEn}> / {profile.nameEn}</span>
        </h1>
        <p className={styles.role}>{profile.role}</p>
      </div>

      <SectionHeading command="ls" path="./education" />
      <Timeline items={education} />

      <SectionHeading command="ls" path="./skills" />
      <SkillList groups={skillGroups} />

      <SectionHeading command="ls" path="./certificates-awards" />
      <Timeline items={experience} />
    </>
  )
}
