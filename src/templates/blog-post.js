import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.article`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 20px 20px;
`;
const Title = styled.h1`
  font-family: arial;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 1.2rem 0 0.6rem 0;
  color: var(--headinggrey);
`;

const SubTitle = styled.h2`
  font-family: arial;
  font-size: 1.1rem;
  text-align: center;
  margin: 0 0 0.6rem 0;
  color: rgba(74,74,74,0.75);
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
    margin: 0 0 22px;
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
  const { title,content, subHeading, published } = props.data.contentfulBlog;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const publishedDate = new Date(published);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subHeading}</SubTitle>
      <ArticleDate>{publishedDate.toLocaleDateString('en-US', options)}</ArticleDate>
      <Article dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
    </Wrapper>
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
      slug
      subHeading
      published
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`