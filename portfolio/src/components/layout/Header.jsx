import { Link, NavLink } from 'react-router-dom'
import { nav, site } from '../../data/site.js'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          {site.prompt}
          <span className={styles.brandCursor}>▌</span>
        </Link>
        <nav className={styles.nav}>
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {item.command}
            </NavLink>
          ))}
          <a
            className={styles.github}
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            github ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
