import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tim Ritter</title>
        <meta name="description" content="Tim Ritters personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto py-10 sm:py-20 lg:py-32 xl:py-44 px-10 sm:px-20 overflow-hidden">
          <p className="lead mb-4 md:mb-5">Tim Ritter</p>
          <div className="mb-2 md:mb-3">
            <p>Creating <em>exciting</em>, <em>inclusive</em>, and <em>accessible</em> user experiences on the world wide web.</p>
          </div>
          <div className="py-2 md:py-3">
            <p className='pb-2 secondary'><small>About Me</small></p>
            <p>Hey there! I'm <em>Tim</em>, a {(Math.floor((Number(new Date()) - new Date('2004-06-05').getTime()) / 3.15576e+10)).toString()}-year-old trainee Software Developer from Germany. I've been interested in visually pleasing web experiences for a long time. One day I started out creating websites as a hobby. Now I do it full-time and try to gradually improve my work one step at a time.</p>
          </div>
          <div className="py-2 md:py-3">
            <p className='pb-2 secondary'><small>Projects</small></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
              <a href='https://github.com/coyenn/cloudboard' target="_blank" rel='noreferrer' className='no-underline'>
                <p className='link'>Cloudboard</p>
                <p className="secondary">
                  A self-hosted personal dashboard to list microservices and websites. Similar to Flame, Homer or Heimdall.
                </p>
              </a>
              <a href='https://github.com/coyenn/zep' target="_blank" rel='noreferrer' className='no-underline'>
                <p className='link'>Zep</p>
                <p className="secondary">
                  Instantly available Roblox Plugin development boilerplate using Roact and Roblox-TS.
                </p>
              </a>
              <a href='https://github.com/coyenn/personal-website' target="_blank" rel='noreferrer' className='no-underline'>
                <p className='link'>Personal Website</p>
                <p className="secondary">
                  My personal website. Developed using NextJS, TypeScript, SCSS and a lot of &#127861;.
                </p>
              </a>
              <a href='https://github.com/coyenn/homelab' target="_blank" rel='noreferrer' className='no-underline'>
                <p className='link'>HomeLab</p>
                <p className="secondary">
                  I run services on my old Desktop PC. This project includes all files necessary to get it up and running.
                </p>
              </a>
            </div>
          </div>
          <div className="py-2 md:py-3">
            <p className='pb-2 secondary'><small>Contact</small></p>
            <p>Let's get in <em>touch</em>. Contact me at <a href="mailto:t-ritter-mail@web.de">t-ritter-mail@web.de</a></p>
          </div>
        </div>
      </main>

      <footer className='border border-t border-b-0 border-gray-100 dark:border-zinc-800 md:p-5'>
        <div className="container mx-auto poverflow-hidden px-10 sm:px-20">
          <p className='secondary'>Made with &#129293; and &#127861; by Tim Ritter, {new Date().getFullYear().toString()}</p>
        </div>
      </footer>
    </>
  )
}
