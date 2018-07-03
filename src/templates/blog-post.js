import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from "gatsby-image";
import formatDate from '../assets/date-formatter';
import BannerImage from '../components/BannerImage';

const Wrapper = styled.article`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 20px 20px;
`;

const TitleImage = styled(Img)`
  width:100%
`;

const Title = styled.h1`
`;

const SubTitle = styled.h2`
`;

const ArticleDate = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  text-align: center;
  overflow: hidden;
  margin: 0 0 1rem 0;

  &:before,
  &:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &:before {
    right: 0.5em;
    margin-left: -50%;
  }

  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;

const Article = styled.div`
  & h1, & h2, & h3, & h4, & h5, & h6 {
    font-family: arial, sans-serif;
    color: rgba(74, 74, 74, 0.9);
    font-weight: bold;
    margin: 0.8rem 0 1rem;
  }

  & h1 {
    font-size: 1.8rem;
  }

  & h2 {
    font-size: 1.4rem;
  }

  & p{
    margin: 0 0 20px;
  }

  & ul {
    color: rgba(74, 74, 74, 0.7);
    list-style-type: square;
    padding-left: 1rem;
  }
  
  & ol {
    color: rgba(74, 74, 74, 0.7);
    list-style-type: upper-roman;
    padding-left: 1rem;
  }
  
  & li {
    color: rgba(74, 74, 74, 0.7);
    font-size: 0.9rem;
  }

  & li > p {
    margin: 0;
    font-size: 0.9rem;
  }

  & a {
    color: var(--linkblue);
    text-decoration: none;
  }
  
  & img{
    max-width: 100%;
  }

  & blockquote {
    position: relative;
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }

  & blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  & blockquote:after {
    position: absolute;
    right: 0.5rem;
    bottom: -0.4rem;
    color: #ccc;
    content: close-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-left: 0.25em;
    vertical-align: -0.4em;
  }

  & blockquote p {
    display: inline;
    margin-right: 3rem;
    font-style: italic;
  }
`;

function BlogPost(props) {
  const { title, subHeading, content, published, tags } = props.data.contentfulBlog;
  return (
    <div>
      <BannerImage 
        heading={ title }
        tagline= { tags.split(',')[0] }
        image={ props.bannerImage }
        alt='Sydney harbour banner image'
      />
      <Wrapper>
        {/*<TitleImage sizes={ bannerimage.sizes } />*/}
        <Title>{ title }</Title>
        <SubTitle>{ subHeading }</SubTitle>
        <ArticleDate>{ formatDate(published) }</ArticleDate>
        <Article dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
      </Wrapper>
    </div>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) {
      title
      subHeading
      tags
      published
      bannerimage {
        sizes(maxWidth: 780) {
          ...GatsbyContentfulSizes
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`