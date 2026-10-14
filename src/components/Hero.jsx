import Pill from './Pill'
import Reveal from './Reveal'
import { LINKS } from '../links'

const A = '/assets'

/** One full set of client logos. Each entry mirrors the exact crop/size of the Figma layer. */
function LogoSet({ duplicate = false }) {
  const alt = (text) => (duplicate ? '' : text)
  return (
    <div
      aria-hidden={duplicate || undefined}
      className={`flex shrink-0 items-center gap-16 pr-16 ${duplicate ? 'marquee-dup' : ''}`}
    >
      <img alt={alt('UEducate')} src={`${A}/hero/ueducate.webp`} width="163" height="50" className="h-[50px] w-[163px] shrink-0 object-cover" />

      <div className="flex shrink-0 items-center gap-[8.48px]">
        <div className="relative h-[30px] w-[29.095px] shrink-0 overflow-hidden">
          <img
            alt=""
            src={`${A}/hero/kpost-mark.webp`}
            className="absolute top-[1.99%] left-[-7.77%] h-[115.58%] w-[119.17%] max-w-none"
          />
        </div>
        <p className="trim font-nunito text-[25.44px] leading-[42.399px] font-bold whitespace-nowrap text-[#25205b]">
          KPOST
        </p>
      </div>

      <img alt={alt('Kampus')} src={`${A}/hero/kampus.webp`} width="114" height="30" className="h-[30px] w-[114.286px] shrink-0 object-cover" />

      <div className="relative size-[50px] shrink-0 overflow-hidden">
        <img
          alt={alt('SonyLIV')}
          src={`${A}/hero/sonyliv.webp`}
          className="absolute top-[-9.34%] left-[-60.06%] h-[118.98%] w-[219.22%] max-w-none"
        />
      </div>

      <div className="relative h-10 w-[82.441px] shrink-0 overflow-clip">
        <div className="absolute inset-[0_0_38.79%_0]">
          <img alt={alt('Unifi TV')} src={`${A}/hero/unifi-a.svg`} className="absolute inset-0 block size-full max-w-none" />
        </div>
        <div className="absolute inset-[74.47%_-0.23%_0.82%_73.12%]">
          <img alt="" src={`${A}/hero/unifi-b.svg`} className="absolute inset-0 block size-full max-w-none" />
        </div>
      </div>

      <div className="relative h-[30px] w-[112.366px] shrink-0 overflow-hidden">
        <img
          alt={alt('TVNZ+')}
          src={`${A}/hero/tvnz.webp`}
          className="absolute top-[-21.88%] left-[-5.06%] h-[143.27%] w-[110.13%] max-w-none"
        />
      </div>

      <img alt={alt('Comedy.tv')} src={`${A}/hero/comedytv.svg`} className="block h-[30px] w-[189.14px] shrink-0" />

      <div className="flex shrink-0 items-center gap-[7.246px]">
        <img alt="" src={`${A}/hero/ai-flame.svg`} className="block h-[30px] w-[20.894px] max-w-none" />
        <img alt={alt('ai studio')} src={`${A}/hero/ai-text.svg`} className="block h-[22px] w-[113.57px] max-w-none" />
      </div>

      <div className="relative h-[50px] w-[59.989px] shrink-0 overflow-hidden">
        <img
          alt={alt('KUN Elite')}
          src={`${A}/hero/kun.webp`}
          className="absolute top-[-10.22%] left-[-44.5%] h-[110.22%] w-[183.73%] max-w-none"
        />
      </div>

      <img alt={alt('ST Courier')} src={`${A}/hero/stcourier.webp`} width="174" height="40" className="h-[40.28px] w-[174.184px] shrink-0 object-cover" />
      <img alt="" src={`${A}/hero/aistudio-ph.webp`} width="112" height="40" className="h-10 w-[112.404px] shrink-0 object-cover" />
    </div>
  )
}

/**
 * Seamless loop: two identical sets side by side, translated by exactly -50%
 * (one set incl. its trailing gap), so the restart is invisible.
 */
function Logos() {
  return (
    <div
      role="group"
      aria-label="Brands I have worked with"
      className="marquee relative -mx-4 w-[calc(100%+2rem)] md:-mx-[80px] md:w-[calc(100%+160px)]"
    >
      <div className="marquee-track">
        <LogoSet />
        <LogoSet duplicate />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-[1728px] px-4 md:px-[80px]">
      <div className="relative flex min-h-[560px] flex-col items-center justify-between gap-12 overflow-clip rounded-[40px] px-4 pt-16 pb-10 md:min-h-[700px] md:px-[80px] md:pt-[100px] md:pb-[60px]">
        {/* background: drifting orange ellipse + soft orb + film-grain overlay */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -ml-[1024px] h-[1080px] w-[1920px] overflow-clip bg-white">
          <div className="absolute top-[-1710.06px] left-[calc(50%-0.34px)] h-[2136.504px] w-[2329.318px] -translate-x-1/2">
            <div className="hero-ellipse absolute inset-0">
              <div className="absolute inset-[-46.74%_-42.88%]">
                <img alt="" src={`${A}/hero/bg-ellipse.svg`} className="block size-full max-w-none" />
              </div>
            </div>
          </div>
          <div className="hero-orb" />
          <div className="absolute top-0 left-0 h-[1080px] w-[1921px] opacity-50 mix-blend-overlay">
            <img alt="" src={`${A}/hero/noise.webp`} className="absolute inset-0 size-full max-w-none object-cover" />
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center gap-[25px]">
          <Reveal className="flex w-full flex-col items-center gap-[26px] text-center text-ink">
            <p className="text-[28px] font-medium md:text-[40px]">Akash Pandurangan</p>
            <h1 className="w-full text-[40px] leading-[1.1] font-semibold sm:text-[56px] lg:text-[70px] lg:leading-normal">
              Senior Product Designer
            </h1>
            <p className="w-full text-[18px] md:text-[21px]">
              5+ Years Experience · UX Strategy · Design Systems · Mobile &amp; Web · SaaS &amp; OTT
            </p>
          </Reveal>
          <Reveal delay={150} className="flex flex-wrap items-center justify-center gap-2">
            <Pill label="Behance" href={LINKS.behance} external icon={`${A}/icons/behance.svg`} />
            <Pill label="LinkedIn" href={LINKS.linkedin} external icon={`${A}/icons/linkedin.svg`} />
            <Pill href="#works">View my work</Pill>
            <Pill href={LINKS.resume} external>
              Resume
            </Pill>
          </Reveal>
        </div>

        <Logos />
      </div>
    </section>
  )
}
