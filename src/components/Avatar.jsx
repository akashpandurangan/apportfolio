const sizes = {
  // outer pill / inner pill / photo box, all straight from the Figma frames
  sm: {
    outer: 'h-[68px] w-[110px]',
    inner: 'left-[2px] top-px h-[60px] w-[100px]',
    photo: 'left-[14.5px] top-[-1px] size-[71px]',
  },
  lg: {
    outer: 'h-[88px] w-[160px]',
    inner: 'left-[4px] top-[3.67px] h-[74px] w-[146px]',
    photo: 'left-[28px] top-px h-[92px] w-[93px]',
  },
}

export default function Avatar({ size = 'sm' }) {
  const s = sizes[size]
  return (
    // the transparent 3px border keeps the exact Figma geometry; the animated ring paints over it
    <div className={`avatar-glow relative shrink-0 rounded-[60px] border-3 border-solid border-transparent ${s.outer}`}>
      <span aria-hidden className="avatar-ring" />
      <div
        className={`absolute overflow-clip rounded-[60px] border border-solid border-black/10 bg-white ${s.inner}`}
      >
        <div className={`absolute ${s.photo}`}>
          <img
            alt="Akash Pandurangan"
            src="/assets/profile.webp"
            width="93"
            height="93"
            decoding="async"
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          />
        </div>
      </div>
    </div>
  )
}
