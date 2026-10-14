import Reveal from './Reveal'
import { PROTOTYPES } from '../links'

// Each card fades from `tint` (behind the text) to `accent` (behind the mockup);
// the exported mockup image carries the same gradient and is blended in at its top edge.
// `href` is the Figma prototype for the card (opens in a new tab).
const works = [
  {
    title: 'SonyLIV',
    tag: 'OTT · Multi-platform UX',
    image: '/assets/works/sonyliv.webp',
    tint: '#fcf8f1',
    accent: '#ffe9b5',
    href: PROTOTYPES.sonyliv,
  },
  {
    title: 'Xcourt Sports',
    tag: 'Sports · SaaS',
    image: '/assets/works/xcourt.webp',
    tint: '#f7fcf1',
    accent: '#e9f8d4',
    href: PROTOTYPES.xcourt,
  },
  {
    title: 'Ai studio',
    tag: 'AI · Content tools',
    image: '/assets/works/aistudio.webp',
    tint: '#fbf4f1',
    accent: '#fbd2be',
    href: PROTOTYPES.aistudio,
  },
  {
    title: 'OTT Design System',
    tag: 'Design systems',
    image: '/assets/works/ott-ds.webp',
    tint: '#f5f5f5',
    accent: '#cbcbcb',
    href: PROTOTYPES.ottds,
  },
  {
    title: 'KAMPUS UEducate',
    tag: 'E-learning · SaaS',
    image: '/assets/works/kampus.webp',
    tint: '#f0f7fa',
    accent: '#cee7f1',
    href: PROTOTYPES.kampus,
  },
  {
    title: 'KPOST Communication',
    tag: 'Enterprise · Communication',
    image: '/assets/works/kpost.webp',
    tint: '#f0f5fb',
    accent: '#b4ceed',
    href: PROTOTYPES.kpost,
  },
]

const ctaClass =
  'btn-dark flex min-h-[54px] items-center justify-center rounded-[10000px] bg-ink-soft px-9 py-[18px] text-[16px] leading-6 font-semibold whitespace-nowrap text-white'

function WorkCard({ work }) {
  const link = { href: work.href, target: '_blank', rel: 'noopener noreferrer' }

  return (
    // no card-level hover effect: only the image zoom (group-hover below) animates
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[40px]"
      style={{ background: `linear-gradient(to bottom, ${work.tint} 20%, ${work.accent} 100%)` }}
    >
      <div className="flex flex-col items-center gap-[34px] p-8 text-center 2xl:p-[50px]">
        <h3 className="trim w-full text-[32px] font-medium text-ink md:text-[30px] 2xl:text-[40px]">{work.title}</h3>
        <p className="trim w-full text-[18px] text-ink-soft sm:text-[20px] 2xl:text-[22px]">{work.tag}</p>
        <a {...link} className={ctaClass} aria-label={`View case study: ${work.title} (opens in a new tab)`}>
          View case study
        </a>
      </div>
      <div className="mt-auto overflow-hidden">
        <a {...link} tabIndex={-1} aria-hidden className="block">
          <img
            alt={`${work.title} preview`}
            src={work.image}
            width="1012"
            height="1014"
            loading="lazy"
            decoding="async"
            className="block aspect-[506/507] w-full origin-bottom transition-transform duration-700 ease-out-expo [mask-image:linear-gradient(to_bottom,transparent,black_32px)] group-hover:scale-[1.03]"
          />
        </a>
      </div>
    </article>
  )
}

export default function Works() {
  return (
    <section id="works" className="mx-auto w-full max-w-[1728px] px-4 py-12 md:px-[80px] md:py-[80px]">
      <Reveal>
        <h2 className="trim text-center text-[40px] font-semibold text-ink md:text-[50px]">Works</h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 md:mt-[60px] md:grid-cols-2 md:gap-y-[60px] xl:grid-cols-3">
        {works.map((w, i) => (
          <Reveal key={w.title} delay={(i % 3) * 120} className="h-full">
            <WorkCard work={w} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
