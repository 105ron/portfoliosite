import React from 'react'
import styled from 'styled-components';
import Img from "gatsby-image";
import formatDate from '../assets/date-formatter'
import Device from '../assets/mediaqueries';
import BannerImage from '../components/BannerImage';

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 1.8rem auto;
  padding: 0 20px;
`;

const IndivialPost = styled.section`
  padding: 0 0.8rem;
  &+& {
    margin: 1.5rem 0;
    border-top: 1px solid var(--greyline);
  }
  @media ${Device.tablet} {
    padding: 0 0.4rem;
  }
`;

const Image = styled(Img)`
  z-index: 1;
  border-radius: 3px;
  margin-top: 1.5rem;
`;

const TextHolder = styled.div`
  position:relative;
  z-index: 4;
  margin: 0 6rem;
  margin-top: -5rem;
  padding: 3rem;
  background-color: #f5f5f5;
  border-radius: 3px;
  @media ${Device.tablet} {
    padding: 1rem;
    margin: 0 1rem;
    margin-top: -2.5rem;
  }
`;

const ArticleLink = styled.a`
  color: var(--linkblue);
  text-align: center;
  text-decoration: none;
`;

const ArticleTitle = styled.h3`
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
`;

const ArticleTags = styled.h6`
  text-align: center;
  color: rgba(74,74,74,0.7);
  margin: 0 0 1rem 0;
`;

const NoEmphasis = styled.span`
  font-weight: lighter;
`;

const Synopsis = styled.p`
  margin-bottom: 0;
`;

function BlogPosts (props) {
  return (
    <div>
      <BannerImage 
          heading='Blog Posts'
          tagline= "Most recent posts covering the latest news in Web Development..."
          image={ props.bannerImage }
          alt='Sydney harbour banner image'
        />
      <Wrapper>
        {props.data.allContentfulBlog.edges.map( edge  => {
          const { title, tags, slug, published, bannerimage, synopsis } = edge.node;
          return (
            <IndivialPost>
              <Image sizes={ bannerimage.sizes } />
              <TextHolder>
                <ArticleLink href={ `/${slug}` }>
                  <ArticleTitle>{ title }</ArticleTitle>
                </ArticleLink>
                  <ArticleTags>
                    { tags.split(',')[0] } 
                    <NoEmphasis>
                      &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp; 
                      {formatDate(published)}
                    </NoEmphasis>
                  </ArticleTags>
                <Synopsis> { synopsis.internal.content }</Synopsis>
              </TextHolder>
            </IndivialPost>
          )
        } ) }
      </Wrapper>
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
 limit: 100
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