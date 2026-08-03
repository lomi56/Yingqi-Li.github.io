import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.wrap}>
      <p className={styles.code}>
        <span className={styles.prompt}>$</span> cd ./{'{'}routed{'}'}
      </p>
      <p className={styles.err}>bash: cd: no such directory</p>
      <p className={styles.hint}>404 — 你要找的页面不存在</p>
      <Link to="/" className={styles.home}>
        ← 返回首页
      </Link>
    </div>
  )
}
