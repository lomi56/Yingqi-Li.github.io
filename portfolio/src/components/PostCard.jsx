import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'

// 博客列表项
export default function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.date}>{post.date}</span>
        <div className={styles.tags}>
          {post.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
    </Link>
  )
}
