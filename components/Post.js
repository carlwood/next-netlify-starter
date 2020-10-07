import ReactMarkdown from 'react-markdown';

function Post( { post }) {
  // let { file, description, } = image

  const { slug, title, body, description, publishDate } = post;

  return (
    <article className="post">
      {/* <img alt={description} src={`https:${file.url}`} /> */}
      <header>
        <h2>{title}</h2>
        <div className="description">
         <ReactMarkdown source={description} />
        </div>
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