import { fetchEntries } from 'util/contentfulPosts'

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <h1>Blog Posts</h1>
        <div className="posts">
          {posts.map((post) => {
            return <Post key={post.publishDate} post={post} />
          })}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          max-width: 1200px;
          padding: 15px;
          margin: 0 auto;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        * {
          box-sizing: border-box;
        }

        article {
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: solid 3px #ddd;
        }

        .description {
          font-style: italic;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res
    .filter((post) => {
      return post.sys.contentType.sys.id === 'blogPost'
    })
    .map((post) => {
      return post.fields
    })

  return {
    props: {
      posts,
    },
  }
}
