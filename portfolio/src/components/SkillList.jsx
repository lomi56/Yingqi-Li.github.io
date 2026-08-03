import styles from './SkillList.module.css'

// 技能分组：[JavaScript] [TypeScript] 方括号标签组
export default function SkillList({ groups }) {
  return (
    <div className={styles.wrap}>
      {groups.map((group) => (
        <div key={group.title} className={styles.group}>
          <h3 className={styles.title}>## {group.title}</h3>
          <div className={styles.tags}>
            {group.items.map((item) => (
              <span key={item} className={styles.tag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
