import { site } from '../../data/site.js'
import SvgIcon from '../SvgIcon.jsx'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.prompt}>{site.prompt}</span>
          <a className={styles.github} href={site.github} target="_blank" rel="noreferrer">
            github →
          </a>
        </div>
        <div className={styles.social}>
          {site.social.map((s) => (
            <a
              key={s.label}
              className={styles.socialLink}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.label}
            >
              <SvgIcon id={s.icon} className={styles.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
