import SectionHeading from '../components/SectionHeading.jsx'
import PostCard from '../components/PostCard.jsx'
import { posts } from '../content/blog/index.js'
import styles from './BlogListPage.module.css'

export default function BlogListPage() {
  return (
    <>
      <SectionHeading command="ls" path="./blog" />
      <div className={styles.list}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}
