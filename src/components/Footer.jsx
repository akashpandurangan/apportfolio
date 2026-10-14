import Avatar from './Avatar'
import Pill from './Pill'
import Reveal from './Reveal'
import { LINKS } from '../links'

const I = '/assets/icons'

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto w-full max-w-[1728px] p-4 md:p-[80px]">
      <div className="flex min-h-[503px] flex-col items-center justify-between gap-12 overflow-clip rounded-[40px] px-4 py-[60px] md:px-[80px]">
        <Reveal className="flex w-full flex-col items-center gap-[44px]">
          <div className="flex flex-col items-center justify-center gap-[26px] lg:flex-row">
            <Avatar size="lg" />
            <p className="text-center text-[32px] font-semibold text-ink min-[400px]:text-[40px] md:text-[56px] md:whitespace-nowrap lg:text-[70px]">
              Akash Pandurangan
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill label="Behance" href={LINKS.behance} external icon={`${I}/behance.svg`} tint="bg-[rgba(0,84,247,0.1)]" />
            <Pill label="LinkedIn" href={LINKS.linkedin} external icon={`${I}/linkedin.svg`} tint="bg-[rgba(0,122,181,0.1)]" />
            <Pill label="WhatsApp" href={LINKS.whatsapp} external icon={`${I}/whatsapp.svg`} tint="bg-[rgba(2,181,55,0.1)]" />
            <Pill label="Instagram" href={LINKS.instagram} external icon={`${I}/instagram.svg`} tint="bg-[rgba(145,54,201,0.1)]" />
            <Pill label="X (Twitter)" href={LINKS.x} external icon={`${I}/twitter.svg`} tint="bg-black/10" />
            <Pill href={LINKS.resume} external tint="bg-[rgba(254,92,52,0.1)]">
              Resume
            </Pill>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-[21px] gap-y-1 text-[14px] whitespace-nowrap text-ink">
            <a href={LINKS.email} className="flex min-h-11 items-center hover:underline">
              akashmailbox54@gmail.com
            </a>
            <a href={LINKS.phone} className="flex min-h-11 items-center hover:underline">
              +91 95669 51943
            </a>
          </div>
        </Reveal>

        <p className="text-[14px] whitespace-nowrap text-ink opacity-50">© 2026 akashpandurangan.</p>
      </div>
    </footer>
  )
}
