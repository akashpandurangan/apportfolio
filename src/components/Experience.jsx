const A = '/assets/exp'

// Third-company mark is built from two SVG glyphs plus a few teal squares.
function ThinkDigitalMark() {
  return (
    <div className="relative h-[35px] w-[32.12px] shrink-0">
      <img alt="" src={`${A}/think-d1.svg`} className="absolute top-[0.1px] left-[5.55px] block h-[34.896px] w-[26.57px] max-w-none" />
      <img alt="" src={`${A}/think-d2.svg`} className="absolute top-[0.1px] left-0 block h-[34.896px] w-[8.714px] max-w-none" />
      <div className="absolute top-0 left-0 h-[12.296px] w-[11.18px] bg-[#def1f1]" />
      <div className="absolute top-0 left-0 size-[3.397px] bg-[#00c0bf]" />
      <div className="absolute top-[2.69px] left-[6.16px] size-[3.161px] bg-[#00c0bf]" />
      <div className="absolute top-[7.68px] left-[7.23px] size-[3.161px] bg-[#00c0bf]" />
      <div className="absolute top-[5.85px] left-[2.38px] size-[3.161px] bg-[#00c0bf]" />
    </div>
  )
}

const jobs = [
  {
    role: 'Senior Product Designer',
    company: 'Quickplay Media, Chennai, India',
    period: 'Jul 2024 - Oct 2026',
    badge: <img alt="" src={`${A}/quickplay.svg`} className="block h-20 w-[110px] max-w-none shrink-0" />,
  },
  {
    role: 'UI UX Designer',
    company: 'KPOST Software Pvt Ltd, Chennai, India',
    period: 'Sep 2022 - Jul 2024',
    badge: (
      <div className="flex h-20 w-[110px] shrink-0 items-center justify-center rounded-[100px] bg-[rgba(5,56,118,0.1)] px-[26.464px] py-[13.232px]">
        <img alt="" src={`${A}/kpost.svg`} className="block h-[35px] w-[40.833px] max-w-none" />
      </div>
    ),
  },
  {
    role: 'Graphic & UI UX Designer',
    company: 'Think Digital Wordings Pvt Ltd, Chennai, India',
    period: 'Jul 2021 - Sep 2022',
    badge: (
      <div className="flex h-20 w-[110px] shrink-0 items-center justify-center rounded-[100px] bg-[rgba(0,192,191,0.1)] px-[26.464px] py-[13.232px]">
        <ThinkDigitalMark />
      </div>
    ),
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-[1728px] px-4 py-12 md:px-[80px] lg:px-[160px] lg:py-[80px]">
      <h2 className="trim text-center text-[40px] font-semibold text-ink md:text-[50px]">Experience</h2>
      <div className="mx-auto mt-[60px] flex w-full max-w-[1040px] flex-col gap-[30px]">
        {jobs.map((j) => (
          <div
            key={j.role}
            className="flex flex-col gap-4 rounded-[40px] bg-chip px-6 py-8 md:flex-row md:items-center md:justify-between md:rounded-[180px] md:px-[60px] md:py-[40px]"
          >
            <div className="flex items-center gap-6">
              {j.badge}
              <div className="flex flex-col items-start gap-[30px] leading-[normal] md:whitespace-nowrap">
                <p className="trim text-[24px] font-medium text-ink md:text-[36px]">{j.role}</p>
                <p className="trim text-[16px] text-ink-soft md:text-[22px]">{j.company}</p>
              </div>
            </div>
            <p className="trim text-[18px] whitespace-nowrap text-ink-soft md:text-[22px]">{j.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
