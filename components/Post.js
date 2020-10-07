import ReactMarkdown from 'react-markdown';

function Post( { post }) {
 const { slug, title, body, publishDate } = post
 const { file, description } = post.heroImage.fields
 const { width, height } = post.heroImage.fields.file.details.image

  return (
    <article className="post">
      <img alt={description} src={`https:${file.url}`} width={width} height={height} />
      <header>
        <h2>{title}</h2>
        <p>slug: {slug}</p>
        <p>Posted {publishDate}</p>
      </header>
      <div className="text">
        <ReactMarkdown source={body} />
      </div>
    </article>
  )
}
  
  export default Post