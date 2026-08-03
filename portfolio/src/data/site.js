// 站点级信息：导航、社交外链、页脚
export const site = {
  name: '李英奇',
  nameEn: 'Yingqi Li',
  // 导航栏左侧的终端风格提示符
  prompt: '~/lomi56',
  github: 'https://github.com/lomi56',
  email: 'you@example.com',
  // icon 值需与 public/icons.svg 中的 symbol id 对应
  social: [
    { label: 'GitHub', href: 'https://github.com/lomi56', icon: 'github-icon' },
    { label: 'Bluesky', href: 'https://bsky.app/', icon: 'bluesky-icon' },
    { label: 'X', href: 'https://x.com/', icon: 'x-icon' },
  ],
}

// 顶部导航：path 为 HashRouter 内部路径（不含 #）
export const nav = [
  { label: '简历', path: '/resume', command: './resume' },
  { label: '项目', path: '/projects', command: './projects' },
  { label: '科研', path: '/research', command: './research' },
  { label: '博客', path: '/blog', command: './blog' },
]
