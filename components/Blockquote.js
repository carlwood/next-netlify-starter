export default function Blockquote({ quote, author }) {
  return (
    <blockquote>
      {quote}
      <footer>– {author}</footer>
    </blockquote>
  )
}
  