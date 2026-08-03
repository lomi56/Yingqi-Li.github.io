import styles from './Timeline.module.css'

// 简历时间线：左侧时间标记 + 竖向 hairline
// 兼容两种条目：education（school/degree/period/courses）与 experience（title/issuer/date）
export default function Timeline({ items }) {
  return (
    <ol className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <div className={styles.rail}>
            <span className={styles.time}>{item.period || item.date}</span>
            <span className={styles.dot} aria-hidden="true" />
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>
              {item.title || item.school}
              {item.degree && <span className={styles.subtitle}> — {item.degree}</span>}
            </h3>
            {item.issuer && (
              <p className={styles.issuer}>
                <span className={styles.mono}>{item.issuer}</span>
              </p>
            )}
            {item.description && <p className={styles.desc}>{item.description}</p>}
            {item.courses && (
              <div className={styles.tags}>
                {item.courses.map((c) => (
                  <span key={c} className={styles.tag}>
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
