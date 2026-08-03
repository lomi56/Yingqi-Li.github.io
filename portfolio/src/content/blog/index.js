// 博客文章加载：构建时用 import.meta.glob 读取 src/content/blog/*.md
// 暴露：posts（按日期倒序）、getPost(slug)
const modules = import.meta.glob('./*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// 极简 frontmatter 解析：支持 key: value 与逗号分隔列表
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!m) return { meta: {}, content: raw }
  const meta = {}
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':')
    if (i < 0) continue
    const key = line.slice(0, i).trim()
    let val = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
    meta[key] = val
  }
  return { meta, content: raw.slice(m[0].length) }
}

const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace('./', '').replace(/\.md$/, '')
    const { meta, content } = parseFrontmatter(raw)
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || '',
      tags: (meta.tags || '').split(',').map((t) => t.trim()).filter(Boolean),
      excerpt: meta.excerpt || '',
      content,
    }
  })
  // 按日期倒序（ISO 字符串可字典序比较）
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}

export { posts }
