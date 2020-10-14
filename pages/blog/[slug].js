import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import { useRouter } from 'next/router'

export default function BlogPost({ post }) {
  const router = useRouter()
  const { slug } = router.query
  console.log(router)

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Blog" />
        <h2>{slug}</h2>
      </main>

      <Footer />
    </div>
  )
}
