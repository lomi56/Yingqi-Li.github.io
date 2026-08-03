// 基于 public/icons.svg 中 symbol 的图标组件
// 用 BASE_URL 拼接相对路径，兼容 base: './' 部署
export default function SvgIcon({ id, className }) {
  const base = import.meta.env.BASE_URL
  return (
    <svg className={className} role="presentation" aria-hidden="true">
      <use href={`${base}icons.svg#${id}`} />
    </svg>
  )
}
