import { Link, routes } from '@redwoodjs/router'

const BlogPostPage = () => {
  return (
    <>
      <h1>BlogPostPage</h1>
      <p>
        Find me in <tt>./web/src/pages/BlogPostPage/BlogPostPage.js</tt>
      </p>
      <p>
        My default route is named <tt>blogPost</tt>, link to me with `
        <Link to={routes.blogPost()}>BlogPost</Link>`
      </p>
    </>
  )
}

export default BlogPostPage
