import { useEffect, useRef, useState } from 'react'
import Avatar from './Avatar'
import { LINKS } from '../links'

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

const navLink =
  '-my-3 py-3 text-[14px] font-medium whitespace-nowrap text-ink transition-opacity duration-300 hover:opacity-60'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const wrap = useRef(null)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 8))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // close the mobile menu on Escape, outside tap, or when the viewport becomes desktop-sized
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onDown = (e) => wrap.current && !wrap.current.contains(e.target) && setOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    const onMq = () => mq.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    // A floating pill, like the Google Store nav: no bar behind it, page content scrolls underneath.
    // top-[-16px] cancels most of the 30px top padding, so the stuck pill sits 14px below the viewport edge.
    // The wrapper ignores pointer events so the transparent padding never blocks the page beneath.
    <header className="pointer-events-none sticky top-[-16px] z-50">
      <div ref={wrap} className="relative mx-auto w-full max-w-[1728px] px-4 py-[30px] md:px-[80px]">
        <div
          className={`pointer-events-auto flex items-center justify-between rounded-[800px] py-[15px] pr-3 pl-3 transition-[background-color,box-shadow] duration-500 ease-out-expo md:pr-[40px] md:pl-[20px] ${
            scrolled ? 'bg-white shadow-[0_2px_16px_rgba(0,0,0,0.12)]' : 'bg-chip shadow-[0_2px_16px_rgba(0,0,0,0)]'
          }`}
        >
          <div className="flex min-w-px flex-[1_0_0] items-center gap-6">
            <a href="#home" aria-label="Home" className="shrink-0">
              <Avatar size="sm" />
            </a>
            <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
              {nav.map((n) => (
                <a key={n.label} href={n.href} className={navLink}>
                  {n.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden min-w-px flex-[1_0_0] items-center justify-end gap-[21px] text-[14px] font-medium whitespace-nowrap text-ink lg:flex">
            <a href={LINKS.email} className={navLink}>
              akashmailbox54@gmail.com
            </a>
            <a href={LINKS.phone} className={navLink}>
              +91 95669 51943
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-12 shrink-0 items-center justify-center rounded-full text-ink transition-transform duration-300 active:scale-90 md:hidden"
          >
            <span className="relative block h-3.5 w-6" aria-hidden>
              <span className={`absolute left-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute top-1.5 left-0 h-0.5 w-6 rounded bg-current transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="menu-panel pointer-events-auto absolute top-[calc(100%-18px)] right-4 left-4 z-10 rounded-[28px] bg-white p-3 shadow-[0_2px_16px_rgba(0,0,0,0.12)] md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-2xl px-4 text-[18px] font-medium text-ink"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-1 border-t border-black/10 px-4 pt-3 text-[14px] text-ink">
              <a href={LINKS.email} className="flex min-h-11 items-center">
                akashmailbox54@gmail.com
              </a>
              <a href={LINKS.phone} className="flex min-h-11 items-center">
                +91 95669 51943
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
