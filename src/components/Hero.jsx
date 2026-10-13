import Pill from './Pill'

const A = '/assets'

/** Static client-logo strip. Each entry mirrors the exact crop/size of the Figma layer. */
function Logos() {
  return (
    <div className="relative flex w-full justify-center" aria-label="Brands I have worked with">
      <div className="flex shrink-0 items-center gap-16">
        <img alt="UEducate" src={`${A}/hero/ueducate.png`} className="h-[50px] w-[163px] shrink-0 object-cover" />

        <div className="flex shrink-0 items-center gap-[8.48px]">
          <div className="relative h-[30px] w-[29.095px] shrink-0 overflow-hidden">
            <img
              alt=""
              src={`${A}/hero/kpost-mark.png`}
              className="absolute top-[1.99%] left-[-7.77%] h-[115.58%] w-[119.17%] max-w-none"
            />
          </div>
          <p className="trim font-nunito text-[25.44px] leading-[42.399px] font-bold whitespace-nowrap text-[#25205b]">
            KPOST
          </p>
        </div>

        <img alt="Kampus" src={`${A}/hero/kampus.png`} className="h-[30px] w-[114.286px] shrink-0 object-cover" />

        <div className="relative size-[50px] shrink-0 overflow-hidden">
          <img
            alt="SonyLIV"
            src={`${A}/hero/sonyliv.png`}
            className="absolute top-[-9.34%] left-[-60.06%] h-[118.98%] w-[219.22%] max-w-none"
          />
        </div>

        <div className="relative h-10 w-[82.441px] shrink-0 overflow-clip">
          <div className="absolute inset-[0_0_38.79%_0]">
            <img alt="Unifi TV" src={`${A}/hero/unifi-a.svg`} className="absolute inset-0 block size-full max-w-none" />
          </div>
          <div className="absolute inset-[74.47%_-0.23%_0.82%_73.12%]">
            <img alt="" src={`${A}/hero/unifi-b.svg`} className="absolute inset-0 block size-full max-w-none" />
          </div>
        </div>

        <div className="relative h-[30px] w-[112.366px] shrink-0 overflow-hidden">
          <img
            alt="TVNZ+"
            src={`${A}/hero/tvnz.png`}
            className="absolute top-[-21.88%] left-[-5.06%] h-[143.27%] w-[110.13%] max-w-none"
          />
        </div>

        <img alt="Comedy.tv" src={`${A}/hero/comedytv.svg`} className="block h-[30px] w-[189.14px] shrink-0" />

        <div className="flex shrink-0 items-center gap-[7.246px]">
          <img alt="" src={`${A}/hero/ai-flame.svg`} className="block h-[30px] w-[20.894px] max-w-none" />
          <img alt="ai studio" src={`${A}/hero/ai-text.svg`} className="block h-[22px] w-[113.57px] max-w-none" />
        </div>

        <div className="relative h-[50px] w-[59.989px] shrink-0 overflow-hidden">
          <img
            alt="KUN Elite"
            src={`${A}/hero/kun.png`}
            className="absolute top-[-10.22%] left-[-44.5%] h-[110.22%] w-[183.73%] max-w-none"
          />
        </div>

        <img alt="ST Courier" src={`${A}/hero/stcourier.png`} className="h-[40.28px] w-[174.184px] shrink-0 object-cover" />
        <img alt="" src={`${A}/hero/aistudio-ph.png`} className="h-10 w-[112.404px] shrink-0 object-cover" />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-[1728px] px-4 md:px-[80px]">
      <div className="relative flex min-h-[700px] flex-col items-center justify-between gap-12 overflow-clip rounded-[40px] px-4 pt-[100px] pb-[60px] md:px-[80px]">
        {/* background: blurred orange ellipse + film-grain overlay */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -ml-[1024px] h-[1080px] w-[1920px] overflow-clip bg-white">
          <div className="absolute top-[-1710.06px] left-[calc(50%-0.34px)] h-[2136.504px] w-[2329.318px] -translate-x-1/2">
            <div className="absolute inset-[-46.74%_-42.88%]">
              <img alt="" src={`${A}/hero/bg-ellipse.svg`} className="block size-full max-w-none" />
            </div>
          </div>
          <div className="absolute top-0 left-0 h-[1080px] w-[1921px] opacity-50 mix-blend-overlay">
            <img alt="" src={`${A}/hero/noise.png`} className="absolute inset-0 size-full max-w-none object-cover" />
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center gap-[25px]">
          <div className="flex w-full flex-col items-center gap-[26px] text-center text-ink">
            <p className="text-[28px] font-medium md:text-[40px]">Akash Pandurangan</p>
            <h1 className="w-full text-[40px] leading-[1.1] font-semibold sm:text-[56px] lg:text-[70px] lg:leading-normal">
              Senior Product Designer
            </h1>
            <p className="w-full text-[18px] md:text-[21px]">Designing intuitive digital products across platforms.</p>
            <p className="w-full text-[18px] md:text-[21px]">
              5+ Years Experience · UX Strategy · Design Systems · Mobile &amp; Web · SaaS &amp; OTT
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill label="Behance" href="#" icon={`${A}/icons/behance.svg`} />
            <Pill label="Email" href="mailto:akashmailbox54@gmail.com" icon={`${A}/icons/mail.svg`} />
            <Pill label="LinkedIn" href="#" icon={`${A}/icons/linkedin.svg`} />
            <Pill href="#works">View my work</Pill>
            <Pill href="#">Resume</Pill>
          </div>
        </div>

        <Logos />
      </div>
    </section>
  )
}
