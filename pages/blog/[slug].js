import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import { useRouter } from 'next/router'
import Link from 'next/link'

import ReactMarkdown from 'react-markdown'
import Blockquote from '../../components/Blockquote'

export default function BlogPost({ posts }) {
  const router = useRouter()
  const { slug } = router.query

  const post = posts
    .filter((p) => {
      return p.slug === slug
    })[0];

  console.log({ post })

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={post.slug} />

        {post.slug}

        <div className="text">
          <ReactMarkdown source={post.body} />

          {post.components &&
            <>
            {post.components.map((component) => {

              const { id } = component.sys.contentType.sys

              if (id === 'blockquote') {
                return (
                  <Blockquote quote={component.fields.quoteText} author={component.fields.quoteAuthor} />
                )
              }

            })}
            </>
          }
        </div>

        { post.relatedBlogPosts &&
        <>
          <h2>Related blog posts</h2>
          <ul>
          {post.relatedBlogPosts.map((post) => {
            return (
            <div key={post.fields.publishDate}>
              <Link href={`/blog/${encodeURIComponent(post.fields.slug)}`}>
                <a>
                  <h3>{post.fields.title}</h3>
                  <p>{post.fields.description}</p>
                  <code>{post.fields.slug}</code>
                </a>
              </Link>
            </div>
            )
          })}
          </ul>
        </>
        }

      </main>

      <Footer />
    </div>
  )
}
