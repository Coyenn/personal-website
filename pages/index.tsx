import FadeIn from 'react-fade-in'
import Project from '../components/projects/project'
import PageSection from '../components/layout/page-section'

export async function getStaticProps() {
  const token = process.env.DATO_API_KEY
  const response = await fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: '{ allProjects { title, content, link, _status, id } }'
      }),
    }
  )
  const responseData = (await response.json())?.data;

  return {
    props: {
      responseData,
    },
  }
}

function Home({ responseData }) {
  return (
    <>
      <main>
        <div className="container mx-auto py-10 sm:py-20 lg:py-32 2xl:py-40 px-10 sm:px-20 overflow-hidden">
          <FadeIn>
            <PageSection>
              <p className="lead mb-4 md:mb-5">
                Tim Ritter
              </p>
              <p>Creating <em>exciting</em>, <em>inclusive</em>, and <em>accessible</em> user experiences on the world wide web.</p>
            </PageSection>
            <PageSection>
              <p className='mb-3 secondary'><small>About Me</small></p>
              <p>Hey there! I&apos;m <em>Tim</em>, a {(Math.floor((Number(new Date()) - new Date('2004-06-05').getTime()) / 3.15576e+10)).toString()}-year-old trainee Software Developer from Germany. I&apos;ve been interested in visually pleasing web experiences for a while. One day I started out creating websites as a hobby. Now I do it full-time and try to gradually improve my work one step at a time.</p>
            </PageSection>
            <PageSection>
              <div className="py-2 md:py-3">
                <p className='mb-3 secondary'><small>Projects</small></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                  {responseData.allProjects?.map((project) => {
                    return (
                      <Project
                        link={project.link}
                        name={project.title}
                        description={project.content}
                        key={project.id}
                      />
                    )
                  })}
                </div>
              </div>
            </PageSection>
            <PageSection>
              <p className='mb-3 secondary'><small>Contact</small></p>
              <p>Let&apos;s get in <em>touch</em>. Contact me at <a href="mailto:t-ritter-mail@web.de">t-ritter-mail@web.de</a></p>
            </PageSection>
          </FadeIn>
        </div>
      </main>
    </>
  )
}

export default Home;