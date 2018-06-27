import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Img from "gatsby-image";
import formatDate from '../assets/date-formatter'
import Device from '../assets/mediaqueries';

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 20px 20px;
`;

const IndivialPost = styled.section`
  margin: 0 0 3rem 0;
`;

const Image = styled(Img)`
  z-index: 1;
  border-radius: 3px;

`;

const TextHolder = styled.div`
  position:relative;
  z-index: 4;
  margin: 0 4rem;
  margin-top: -5rem;
  padding: 3rem;
  background-color: #f5f5f5;
  border-radius: 3px;
`;

const ArticleTitle = styled.h2`

`


function BlogPosts (props) {
  return (
    <Wrapper>
      {props.data.allContentfulBlog.edges.map( edge  => {
        const {title, tags, published, bannerimage, synopsis} = edge.node;
        return (
          <IndivialPost>
            <Image sizes={ bannerimage.sizes } />
            <TextHolder>
              <ArticleTitle> { title } </ArticleTitle>
                <p> 
                  { tags.split(',')[0] } &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; {formatDate(published)}
                </p>
              <p> { synopsis.internal.content }</p>
            </TextHolder>
          </IndivialPost>
        )
      } ) }
    </Wrapper>
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
         published
         tags
         synopsis {
           internal {
             content
           }
         }
         bannerimage {
           sizes(maxWidth: 720) {
             ...GatsbyContentfulSizes
           }
         }
       }
     }
 }
}`;