import { Link, useParams } from 'react-router-dom'
import Markdown from '../components/Markdown.jsx'
import { getPost } from '../content/blog/index.js'
import styles from './BlogPostPage.module.css'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <div className={styles.notFound}>
        <p className={styles.err}>cat: './{slug}.md': No such file</p>
        <Link to="/blog" className={styles.back}>
          ← 返回博客列表
        </Link>
      </div>
    )
  }

  return (
    <article className={styles.post}>
      <Link to="/blog" className={styles.back}>
        ← cd ..
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
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
      </header>

      <Markdown content={post.content} />
    </article>
  )
}
