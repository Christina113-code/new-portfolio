import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import Technologies from '@/components/technologies'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        {/* <RecentPosts /> */}
        <RecentProjects />
        <Technologies/>
        {/* <NewsletterForm /> */}
      </div>
    </section>
  )
}
