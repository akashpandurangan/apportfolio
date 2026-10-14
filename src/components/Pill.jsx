// Shared 24px-icon / text pill used by the hero and footer link rows.
// `external` opens in a new tab.
export default function Pill({
  href = '#',
  label,
  icon,
  tint = 'bg-black/10',
  external = false,
  children,
}) {
  const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a
      href={href}
      aria-label={label}
      {...extra}
      className={`flex min-h-[54px] items-center justify-center gap-2 rounded-[10000px] px-[30px] py-[15px] text-[16px] leading-6 font-medium text-ink transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${tint}`}
    >
      {icon ? <img alt="" src={icon} className="block size-6 max-w-none" /> : children}
    </a>
  )
}
