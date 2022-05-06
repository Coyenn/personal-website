import FadeIn from 'react-fade-in'
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
          <PageSection>
            <h1 className='lead page-heading mb-4 md:mb-5'>
              <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600">
                Tim Ritter
              </span>
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
        </FadeIn>
      </main>
    </>
  )
}

export default Home;