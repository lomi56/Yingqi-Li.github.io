import styles from './SectionHeading.module.css'

// 章节标题：`$ ls ./skills` 风格的 mono eyebrow
export default function SectionHeading({ command, path }) {
  return (
    <div className={styles.heading}>
      <span className={styles.prompt}>$</span>
      <span className={styles.command}>{command}</span>
      {path && <span className={styles.path}> {path}</span>}
      <span className={styles.rule} aria-hidden="true" />
    </div>
  )
}
