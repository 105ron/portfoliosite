import React from 'react'
import Link from 'gatsby-link'

function BlogPosts (props) {
  return (
    <div>
      <h1>Hi from Blogs</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default BlogPosts;

export const pageQuery = graphql`
query postsQuery {
 allContentfulBlog (
 filter: {
   node_locale: {eq: "en-US"}
 },
 sort:{ fields: [published], order: DESC },
 limit: 4
 ) {
     edges {
       node {
         title
         slug
         content {
           childMarkdownRemark {
             excerpt
           }
         }
         bannerimage {
           sizes(maxWidth: 400) {
             ...GatsbyContentfulSizes
           }
         }
       }
     }
 }
}`;