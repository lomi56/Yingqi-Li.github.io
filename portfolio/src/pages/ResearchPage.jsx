import SectionHeading from '../components/SectionHeading.jsx'
import ResearchEntry from '../components/ResearchEntry.jsx'
import { research } from '../data/research.js'
import styles from './ResearchPage.module.css'

export default function ResearchPage() {
  return (
    <>
      <SectionHeading command="ls" path="./research" />
      <div className={styles.list}>
        {research.map((entry, i) => (
          <ResearchEntry key={i} entry={entry} />
        ))}
      </div>
    </>
  )
}
