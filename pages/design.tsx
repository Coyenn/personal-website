import Link from "next/link";

export default function DesignPage() {
    return (
      <main className="bg-slate-50 dark:bg-zinc-900 h-screen w-screen">
        <div className="container mx-auto py-10 sm:py-20 lg:py-32 xl:py-44 px-10 sm:px-20 overflow-hidden">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p className='lead'><b>This</b> is a primary <em>paragraph</em></p>
          <p><b>This</b> is a <em>paragraph</em></p>
          <p className='secondary'><b>This</b> is a secondary <em>paragraph</em></p>
          <p><small>Small text</small></p>
          <p className="font-serif">Serif font</p>
          <p className="font-mono">Mono font</p>
          <Link href="/" passHref={true}>This is a link</Link>
        </div>
      </main>
    )
}