import ReactMarkdown from 'react-markdown'
import Blockquote from './Blockquote'

function Post({ post }) {
  const { slug, title, body, publishDate, relatedBlogPosts, components } = post
  const { file, description } = post.heroImage.fields
  const { width, height } = post.heroImage.fields.file.details.image

  return (
    <article className="post">
      <img alt={description} src={`https:${file.url}`} width={width} height={height} />
      <header>
        <h2>{title}</h2>
        <code>slug: {slug}</code>
        <p>Posted {publishDate}</p>
      </header>
      <div className="text">
        <ReactMarkdown source={body} />

        {components &&
          <>
          {components.map((component) => {

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
      { relatedBlogPosts &&
       <>
        <h2>Related blog posts</h2>
        <ul>
         {relatedBlogPosts.map((post) => {
          return (
           <div key={post.fields.publishDate}>
            <h3>{post.fields.title}</h3>
            <p>{post.fields.description}</p>
            <code>{post.fields.slug}</code>
           </div>
          )
         })}
        </ul>
       </>
      }
    </article>
  )
}
  
  export default Post