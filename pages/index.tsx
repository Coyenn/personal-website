import FadeIn from 'react-fade-in'
import Container from '../components/layout/container';
import PageSection from '../components/layout/page-section'
import AllPosts from '../components/posts/all-posts';
import AllProjects from '../components/projects/all-projects'
import query from '../lib/cms-query'

export async function getStaticProps() {
  const allProjects = (await query('{ allProjects { title, content, link, id, _status } }'))?.allProjects;
  const allPosts = (await query('{ allBlogPosts { title, content, published, id, _firstPublishedAt, _status } }'))?.allBlogPosts;

  return {
    props: {
      allProjects,
      allPosts,
    },
  }
}

function Home({ allProjects, allPosts }) {
  return (
    <>
      <main>
        <FadeIn>
          <Container>
            <PageSection size='2xl'>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-snug text-center">
                Creating <span className='text-gradient bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 pr-1'>exciting</span>, <span className='text-gradient bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 pr-1'>inclusive</span>, and <span className='text-gradient bg-gradient-to-r from-amber-500 via-green-400 to-emerald-500 pr-1'>accessible</span> user experiences
              </h1>
            </PageSection>
          </Container>
          <PageSection size='xl' className='bg-neutral-950 border-neutral-800 border-b border-t'>
            <Container>
              <h2 className="text-base text-blue-500 mb-5 md:mb-7 lg:mb-12 text-center font-normal">BUILDING WEBSITES USING<br />MODERN DEVELOPMENT TOOLS</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                <p className="text-white text-center">React</p>
                <p className="text-white text-center">NextJS</p>
                <p className="text-white text-center">TailwindCSS</p>
                <p className="text-white text-center">Docker</p>
                <p className="text-white text-center">TypeScript</p>
                <p className="text-white text-center">Git</p>
              </div>
            </Container>
          </PageSection>
          <PageSection size='2xl' className='bg-neutral-900 border-neutral-800 border-b border-t'>
            <Container>
              <h2 className="text-white text-2xl md:text-3xl lg:text-5xl mb-5 md:mb-7">About Me</h2>
              <p className="text-gray-400 text-md md:text-xl">
                <p>Hey there! I&apos;m <em>Tim</em>, a {(Math.floor((Number(new Date()) - new Date('2004-06-05').getTime()) / 3.15576e+10)).toString()}-year-old trainee Software Developer from Germany. I&apos;ve been interested in visually pleasing web experiences for a while. One day I started out creating websites as a hobby. Now I do it full-time and try to gradually improve my work one step at a time.</p>
              </p>
            </Container>
          </PageSection>
          <PageSection size='2xl' className='bg-neutral-800 border-neutral-800 border-b border-t'>
            <Container>
              <h2 className="text-white text-2xl md:text-3xl lg:text-5xl mb-10 lg:mb-20 text-center">Past and Recent Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <a href='github.com' target={"_blank"} rel="_noreferrer" className="bg-neutral-900 border border-neutral-800 p-10 rounded-lg shadow-lg hover:shadow-xl transition-all no-underline hover:scale-105">
                  <p className="text-white text-xl mb-2 md:mb-7">Cloudboard</p>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eius? Molestiae nobis sit qui expedita recusandae sapiente, fugit, ipsa possimus quo ipsum architecto aut facilis perspiciatis velit nisi nulla vel?
                  </p>
                </a>
              </div>
            </Container>
          </PageSection>
          <PageSection size='2xl' className='bg-neutral-950 border-neutral-800 border-b border-t'>
            <Container>
              <h2 className="text-white text-2xl md:text-3xl lg:text-5xl mb-5 md:mb-7 lg:mb-20 text-center">Blog Posts and Writing</h2>
              <AllPosts allPosts={allPosts} />
            </Container>
          </PageSection>

          <Container>
            <PageSection>
              <h1 className='lead page-heading mb-4 md:mb-5 text-gradient bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 inline-block'>
                Tim Ritter
              </h1>
              <h2 className='text-base font-normal'>Creating <em>exciting</em>, <em>inclusive</em>, and <em>accessible</em> user experiences on the world wide web.</h2>
            </PageSection>
            <PageSection>
              <p className='mb-3 secondary'><small>About Me</small></p>
              <p>Hey there! I&apos;m <em>Tim</em>, a {(Math.floor((Number(new Date()) - new Date('2004-06-05').getTime()) / 3.15576e+10)).toString()}-year-old trainee Software Developer from Germany. I&apos;ve been interested in visually pleasing web experiences for a while. One day I started out creating websites as a hobby. Now I do it full-time and try to gradually improve my work one step at a time.</p>
            </PageSection>
            <PageSection>
              <AllProjects allProjects={allProjects} />
            </PageSection>
            <PageSection>
              <AllPosts allPosts={allPosts} />
            </PageSection>
            <PageSection>
              <p className='mb-3 secondary'><small>Contact</small></p>
              <p>Let&apos;s get in <em>touch</em>. Contact me at <a href="mailto:t-ritter-mail@web.de">t-ritter-mail@web.de</a></p>
            </PageSection>
          </Container>
        </FadeIn>
      </main>
    </>
  )
}

export default Home;