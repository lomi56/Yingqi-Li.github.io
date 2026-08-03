// 项目展示：卡片 + 详情页
export const projects = [
  {
    slug: 'resume-site',
    title: 'Personal Resume Site',
    year: '2026',
    status: 'active',
    tech: ['React', 'Vite', 'GitHub Pages'],
    summary: '本网站。用 React + Vite 搭建的个人主页，深色终端风格，内容数据驱动。',
    details: [
      '使用 HashRouter 实现 SPA 路由，适配 GitHub Pages 静态托管。',
      '博客以 Markdown 文件管理，构建时通过 import.meta.glob 打包，运行时渲染。',
      '全部个人内容集中在 src/data 下，方便维护与替换。',
    ],
    links: {
      demo: 'https://lomi56.github.io/',
      repo: 'https://github.com/lomi56/Yingqi-Li.github.io',
    },
  },
  {
    slug: 'todo-terminal',
    title: 'Todo Terminal',
    year: '2025',
    status: 'finished',
    tech: ['TypeScript', 'Node.js'],
    summary: '一个命令行待办事项工具，支持子任务、标签与归档。',
    details: [
      '用 Node.js 实现，数据以 JSON 持久化到本地。',
      '支持交互式提示符，遵循 Unix 工具惯例。',
    ],
    links: {
      repo: 'https://github.com/lomi56',
    },
  },
  {
    slug: 'course-grades',
    title: 'Course Grades Analyzer',
    year: '2025',
    status: 'in-progress',
    tech: ['Python', 'pandas', 'matplotlib'],
    summary: '课内成绩数据分析脚本，输出个人成绩趋势图。',
    details: [
      '解析教务系统导出的 Excel 成绩单。',
      '统计学期 GPA 变化，用 matplotlib 可视化。',
    ],
    links: {
      repo: 'https://github.com/lomi56',
    },
  },
  {
    slug: 'campus-helper',
    title: 'Campus Helper',
    year: '2024',
    status: 'finished',
    tech: ['React', 'Express', 'MongoDB'],
    summary: '课程小组项目：校园失物招领与二手交易信息平台。',
    details: [
      '前端 React + 后端 Express，全栈组队完成。',
      '负责前端页面与 API 联调，实现登录与信息发布。',
    ],
    links: {
      repo: 'https://github.com/lomi56',
    },
  },
]
