import styles from './ResearchEntry.module.css'

// 科研条目：论文/研究项目，含摘要与状态
export default function ResearchEntry({ entry }) {
  return (
    <article className={styles.entry}>
      <div className={styles.header}>
        <h3 className={styles.title}>{entry.title}</h3>
        <div className={styles.meta}>
          {entry.year && <span className={styles.year}>{entry.year}</span>}
          <span className={`${styles.badge} ${styles[entry.type]}`}>
            {entry.type === 'paper' ? 'paper' : 'study'}
          </span>
          {entry.status && <span className={styles.status}>{entry.status}</span>}
        </div>
      </div>
      <p className={styles.venue}>{entry.venue}</p>
      <p className={styles.authors}>{entry.authors.join(' · ')}</p>
      {entry.abstract && <p className={styles.abstract}>{entry.abstract}</p>}
      {entry.links && Object.keys(entry.links).length > 0 && (
        <div className={styles.links}>
          {entry.links.paper && (
            <a href={entry.links.paper} target="_blank" rel="noreferrer">
              paper ↗
            </a>
          )}
          {entry.links.slides && (
            <a href={entry.links.slides} target="_blank" rel="noreferrer">
              slides ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}
