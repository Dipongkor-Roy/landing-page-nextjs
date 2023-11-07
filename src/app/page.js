import Hero from '@/Component/Hero'
import Content from '@/Component/Content'
import Image from 'next/image'
import Features from '@/Component/Features'
import Contact from '@/Component/Contact'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Content/>
      <Features/>
      <Contact/>
    </main>
  )
}
