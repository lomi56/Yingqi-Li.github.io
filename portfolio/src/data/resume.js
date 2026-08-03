// 简历：教育经历、技能分组、证书/奖项
export const education = [
  {
    school: '某某大学',
    degree: '软件工程 · 本科',
    period: '2023.09 — 2027.06',
    description: '目前大三在读，方向偏向 Web 前端与系统基础。',
    courses: ['数据结构', '操作系统', '计算机网络', '数据库系统'],
  },
]

export const skillGroups = [
  {
    title: 'languages',
    items: ['JavaScript / TypeScript', 'Java', 'Python', 'C++'],
  },
  {
    title: 'frontend',
    items: ['React', 'Vite', 'HTML / CSS', 'Tailwind'],
  },
  {
    title: 'backend',
    items: ['Node.js', 'Spring Boot', 'MySQL'],
  },
  {
    title: 'tools',
    items: ['Git / GitHub', 'Linux', 'Docker', 'Figma'],
  },
]

// type: 'certificate' | 'award'，可自行扩展
export const experience = [
  {
    type: 'award',
    title: '全国大学生数学建模竞赛 省级一等奖',
    issuer: '教育部高等教育司',
    date: '2024-11',
  },
  {
    type: 'certificate',
    title: 'CET-6 英语六级',
    issuer: '全国大学英语四六级考试委员会',
    date: '2024-06',
  },
  {
    type: 'award',
    title: '校级优秀学生奖学金 二等奖',
    issuer: '某某大学',
    date: '2024-10',
  },
]
