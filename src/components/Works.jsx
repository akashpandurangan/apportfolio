const OTT_DS =
  'The OTT Design System was created to standardize and scale user experiences across TV, STB, Web, Mobile, Smart TV, and gaming consoles. The goal was to establish a unified design foundation covering navigation, movie cards, content rails, video player components, interaction patterns, and theming systems.'

// Each card fades from `tint` (behind the text) to `accent` (behind the mockup);
// the exported mockup image carries the same gradient and is blended in at its top edge.
const works = [
  {
    title: 'SonyLIV',
    tag: 'OTT · Multi-platform UX',
    blurb:
      'A next-generation SonyLIV experience concept focused on making OTT discovery more personalized, intelligent, and interactive.',
    image: '/assets/works/sonyliv.png',
    tint: '#fcf8f1',
    accent: '#ffe9b5',
  },
  {
    title: 'Xcourt Sports',
    tag: 'Sports · SaaS',
    blurb:
      'Quickplay CMS is a content and operations management platform designed to help media teams manage, organize, schedule, and monitor large volumes of video and live-streaming content from a single interface.',
    image: '/assets/works/xcourt.png',
    tint: '#f7fcf1',
    accent: '#e9f8d4',
  },
  {
    title: 'Ai studio',
    tag: 'AI · Content tools',
    blurb: OTT_DS,
    image: '/assets/works/aistudio.png',
    tint: '#fbf4f1',
    accent: '#fbd2be',
  },
  {
    title: 'OTT Design System',
    tag: 'Design systems',
    blurb: OTT_DS,
    image: '/assets/works/ott-ds.png',
    tint: '#f5f5f5',
    accent: '#cbcbcb',
  },
  {
    title: 'KAMPUS UEducate',
    tag: 'E-learning · SaaS',
    blurb:
      'KAMPUS UEducate is a live, production-grade e-learning platform implemented for schools to digitize academic operations and enhance remote learning experiences. The platform supports students, teachers, and administrators through role-based dashboards integrating live classes, attendance tracking, assignments, examinations, performance analytics, and announcements.',
    image: '/assets/works/kampus.png',
    tint: '#f0f7fa',
    accent: '#cee7f1',
  },
  {
    title: 'KPOST Communication',
    tag: 'Enterprise · Communication',
    blurb:
      'KPOST is a large-scale enterprise communication platform designed to unify collaboration, productivity, and commerce tools into a single ecosystem. The platform integrates chat, mail, voice communication, scheduling, directory management, cloud storage, and e-commerce capabilities to streamline organizational workflows.',
    image: '/assets/works/kpost.png',
    tint: '#f0f5fb',
    accent: '#b4ceed',
  },
]

function WorkCard({ work }) {
  return (
    <article
      className="flex flex-col overflow-hidden rounded-[40px]"
      style={{ background: `linear-gradient(to bottom, ${work.tint} 20%, ${work.accent} 100%)` }}
    >
      <div className="flex flex-col items-center gap-[34px] p-[50px] text-center">
        <h3 className="trim w-full text-[40px] font-medium text-ink">{work.title}</h3>
        <p className="trim w-full text-[22px] text-ink-soft">{work.tag}</p>
        {/* pb/-mb keep descenders from being clipped by line-clamp's overflow:hidden */}
        <p className="trim -mb-2 line-clamp-2 w-full pb-2 text-[22px] text-ink-soft">{work.blurb}</p>
        <a
          href="#"
          className="flex items-center justify-center rounded-[10000px] bg-ink-soft px-9 py-[18px] text-[16px] leading-6 font-semibold whitespace-nowrap text-white"
        >
          Learn more
        </a>
      </div>
      <img
        alt={`${work.title} preview`}
        src={work.image}
        loading="lazy"
        className="mt-auto block aspect-[506/507] w-full [mask-image:linear-gradient(to_bottom,transparent,black_32px)]"
      />
    </article>
  )
}

export default function Works() {
  return (
    <section id="works" className="mx-auto w-full max-w-[1728px] px-4 py-12 md:px-[80px] md:py-[80px]">
      <h2 className="trim text-center text-[40px] font-semibold text-ink md:text-[50px]">Works</h2>
      <div className="mt-[60px] grid grid-cols-1 gap-x-6 gap-y-[60px] md:mt-[60px] md:grid-cols-2 xl:grid-cols-3">
        {works.map((w) => (
          <WorkCard key={w.title} work={w} />
        ))}
      </div>
    </section>
  )
}
