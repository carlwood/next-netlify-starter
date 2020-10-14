import ReactMarkdown from 'react-markdown'
import Blockquote from './Blockquote'
import Link from 'next/link'

function Post({ post }) {
  const { slug, title, body, publishDate, relatedBlogPosts, components } = post
  const { file, description } = post.heroImage.fields
  const { width, height } = post.heroImage.fields.file.details.image

  return (
    <article className="post">
      {/* <img alt={description} src={`https:${file.url}`} width={width} height={height} /> */}
      <header>
        <Link href={`/blog/${encodeURIComponent(slug)}`}>
          <a>
            <h2>{title}</h2>
            <code>slug: {slug}</code>
            <p>Posted {publishDate}</p>
          </a>
        </Link>
      </header>
    </article>
  )
}
  
  export default Post