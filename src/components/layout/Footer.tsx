import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-bg px-5 md:px-10 pt-20 pb-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid md:grid-cols-12 gap-10 pb-20">
          <div className="md:col-span-7">
            <p className="text-brand-primary text-[10px] uppercase tracking-[.2em] font-bold mb-6">Let&apos;s build something.</p>
            <h2 className="font-serif text-6xl md:text-[8vw] max-w-4xl">Have a project<br /><em className="text-brand-primary">in mind?</em></h2>
          </div>
          <div className="md:col-span-5 flex md:justify-end md:items-end">
            <div className="max-w-sm">
              <p className="text-brand-bg/65 leading-7 mb-8">Full-stack development, AI-native products, and interfaces engineered with equal attention to systems and experience.</p>
              <Link href="/contact" className="inline-flex pill bg-brand-primary text-brand-black px-6 py-4 text-[10px] font-black uppercase tracking-[.15em] hover:bg-brand-orange transition-colors">Start a conversation <span className="ml-3">↗</span></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-bg/15 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div><p className="font-black tracking-[.08em] mb-3">KESAB MAHARANA</p><p className="text-brand-bg/50">Full-Stack Developer / AI</p></div>
          <div><p className="uppercase tracking-widest text-brand-bg/40 mb-3">Navigate</p><div className="flex flex-col gap-2"><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
          <div><p className="uppercase tracking-widest text-brand-bg/40 mb-3">Elsewhere</p><div className="flex flex-col gap-2"><a href="https://github.com" target="_blank">GitHub ↗</a><a href="https://linkedin.com" target="_blank">LinkedIn ↗</a></div></div>
          <div className="md:text-right"><p className="text-brand-bg/40">© {new Date().getFullYear()} Kesab Maharana</p><p className="text-brand-primary mt-2">Built with intent.</p></div>
        </div>
      </div>
    </footer>
  );
}
