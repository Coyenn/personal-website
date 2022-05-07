import FadeIn from 'react-fade-in'
import Container from '../components/layout/container';
import PageSection from '../components/layout/page-section'
import AllPosts from '../components/posts/all-posts';
import AllProjects from '../components/projects/all-projects'
import query from '../lib/cms-query'
import { ReactJs, Nextdotjs, Tailwindcss, Docker, Typescript, Git, Visualstudiocode, Gitpod } from '@icons-pack/react-simple-icons';

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
          <div className='relative overflow-hidden flex justify-center'>
            <Container>
              <PageSection size='2xl' className='border-neutral-800 border-b'>
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] leading-snug text-center mb-10 sm:mb-20 md:mb-32 font-black">
                  Creating <span className='text-gradient bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500'>exciting</span>, <span className='text-gradient bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500'>inclusive</span>, and <span className='text-gradient bg-gradient-to-r from-yellow-500 via-green-400 to-emerald-500'>accessible</span> user experiences
                </h1>
              </PageSection>
            </Container>
            <div className="absolute bottom-0 w-[750px] sm:w-[1000px] md:w-[2000px] xl:w-[3000px] h-full bg-gradient-radial from-blue-500/10 via-transparent to-transparent translate-y-1/2">
            </div>
          </div>
          <PageSection size='xl' className='bg-neutral-950 border-neutral-800 border-b'>
            <Container>
              <p className="text-base text-blue-500 mb-5 md:mb-7 lg:mb-12 text-center font-normal uppercase">Building websites using<br />modern development tools</p>
              <div className="flex gap-10 justify-center overflow-x-auto">
                <div className="flex justify-center">
                  <ReactJs color='#ffff' size={50} />
                </div>
                <div className="flex justify-center">
                  <Nextdotjs color='#ffff' size={50} />
                </div>
                <div className="flex justify-center">
                  <Tailwindcss color='#ffff' size={50} />
                </div>
                <div className="flex justify-center">
                  <Docker color='#ffff' size={50} />
                </div>
                <div className="flex justify-center">
                  <Typescript color='#ffff' size={50} />
                </div>
                <div className="flex justify-center">
                  <Git color='#ffff' size={50} />
                </div>
                <div className="flex justify-center">
                  <Gitpod color='#ffff' size={50} />
                </div>
                <div className="flex justify-center">
                  <Visualstudiocode color='#ffff' size={50} />
                </div>
              </div>
            </Container>
          </PageSection>
          <PageSection size='2xl' className='bg-neutral-900 border-neutral-800 border-b'>
            <Container>
              <h3 className="text-white text-2xl md:text-3xl lg:text-5xl mb-5 md:mb-7">About Me</h3>
              <h2 className="text-gray-400 text-base font-normal md:text-xl">
                Hey there! I&apos;m Tim, a {(Math.floor((Number(new Date()) - new Date('2004-06-05').getTime()) / 3.15576e+10)).toString()}-year-old trainee Software Developer from Germany. I&apos;ve been interested in visually pleasing web experiences for a while. One day I started out creating websites as a hobby. Now I do it full-time and try to gradually improve my work one step at a time.
              </h2>
            </Container>
          </PageSection>
          <PageSection size='2xl' className='bg-neutral-950 border-neutral-800 border-b'>
            <Container>
              <AllProjects allProjects={allProjects} />
            </Container>
          </PageSection>
          <PageSection size='2xl' className='bg-neutral-900 border-neutral-800 border-b'>
            <Container>
              <h2 className="text-white text-2xl md:text-3xl lg:text-5xl mb-5 md:mb-7 lg:mb-20 text-center">Blog Posts</h2>
              <AllPosts allPosts={allPosts} />
            </Container>
          </PageSection>
        </FadeIn>
      </main>
    </>
  )
}

export default Home;