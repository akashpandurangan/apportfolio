// Shared 24px-icon / text pill used by the hero and footer link rows.
export default function Pill({ href = '#', label, icon, tint = 'bg-black/10', children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`flex items-center justify-center rounded-[10000px] px-[30px] py-[15px] text-[16px] leading-6 font-medium text-ink ${tint}`}
    >
      {icon ? <img alt="" src={icon} className="block size-6 max-w-none" /> : children}
    </a>
  )
}
