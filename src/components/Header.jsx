import Avatar from './Avatar'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-[1728px] px-4 py-[30px] md:px-[80px]">
      <div className="flex items-center justify-between rounded-[800px] bg-chip py-[15px] pr-5 pl-3 md:pr-[40px] md:pl-[20px]">
        <div className="flex min-w-px flex-[1_0_0] items-center gap-6">
          <a href="#home" aria-label="Home" className="shrink-0">
            <Avatar size="sm" />
          </a>
          <nav className="flex items-center gap-4 md:gap-6">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="text-[14px] font-medium whitespace-nowrap text-ink">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="hidden min-w-px flex-[1_0_0] items-center justify-end gap-[21px] text-[14px] font-medium whitespace-nowrap text-ink lg:flex">
          <a href="mailto:akashmailbox54@gmail.com">akashmailbox54@gmail.com</a>
          <a href="tel:+919566951943">+91 95669 51943</a>
        </div>
      </div>
    </header>
  )
}
