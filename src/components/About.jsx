import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1728px] px-4 py-12 md:px-[80px] lg:px-[160px] lg:py-[80px]">
      <div className="flex w-full flex-col items-end gap-[34px]">
        <Reveal className="flex w-full flex-col gap-[34px]">
          <h2 className="trim text-[40px] font-semibold text-ink md:text-[50px]">About</h2>
          <p className="trim text-[22px] leading-9 font-medium text-black md:text-[28px] md:leading-[48px]">
            Designing Digital Experiences That Make a Difference
          </p>
        </Reveal>

        <Reveal delay={100} className="trim w-full text-[18px] text-ink-soft md:text-[22px]">
          <p>
            I&apos;m Akash Pandurangan, a UI/UX and Product Designer with 5 years of experience creating intuitive,
            user-centered digital experiences across mobile, web, tablet, Smart TV, and OTT platforms.
          </p>
          <p className="mt-[1lh]">
            I specialize in transforming complex requirements into simple, engaging, and scalable product experiences.
            From understanding user needs and mapping user journeys to designing high-fidelity interfaces, interactive
            prototypes, and scalable design systems, I focus on creating solutions that balance user needs with business
            goals.
          </p>
          <p className="mt-[1lh]">
            Throughout my journey, I&apos;ve collaborated with product managers, developers, and cross-functional teams
            to bring ideas to life. I&apos;m passionate about solving real-world problems through thoughtful design,
            building consistent design systems, and continuously improving the way people interact with digital
            products.
          </p>
          <p className="mt-[1lh]">
            For me, great design goes beyond aesthetics — it&apos;s about making products intuitive, accessible, and
            meaningful.
          </p>
        </Reveal>

        <Reveal delay={150} className="flex w-full flex-col items-end gap-[34px]">
          <p className="trim w-full text-[22px] font-medium text-black md:text-[28px]">
            My goal is simple: to create digital experiences that work beautifully for both people and businesses.
          </p>

          <a
            href="#contact"
            className="btn-dark flex min-h-[54px] items-center justify-center rounded-[10000px] bg-ink-soft px-9 py-[18px] text-[16px] leading-6 font-semibold whitespace-nowrap text-white"
          >
            Read More
          </a>
        </Reveal>
      </div>
    </section>
  )
}
