import { profile } from '../data/profile.js'
import styles from './TerminalHero.module.css'

// 签名元素：终端风格的 hero 块，带顺序淡入与闪烁光标
export default function TerminalHero() {
  return (
    <div className={styles.wrap}>
      <div className={styles.terminal}>
        <div className={styles.titlebar}>
          <span className={styles.dots}>
            <i className={styles.dot} />
            <i className={styles.dot} />
            <i className={styles.dot} />
          </span>
          <span className={styles.title}>{profile.terminalTitle}</span>
        </div>
        <div className={styles.body}>
          {profile.whoami.map((line, i) => {
            const isCommand = line.startsWith('$')
            return (
              <div
                key={i}
                className={`${styles.line} ${isCommand ? styles.command : ''}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {line}
              </div>
            )
          })}
          <div className={styles.line} style={{ animationDelay: `${profile.whoami.length * 120}ms` }}>
            <span className={styles.cursor}>▌</span>
          </div>
        </div>
      </div>
    </div>
  )
}
