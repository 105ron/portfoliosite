import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from "gatsby-image";
import formatDate from '../assets/date-formatter';
import BannerImage from '../components/BannerImage';
import Device from '../assets/mediaqueries';

const Wrapper = styled.article`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 20px 20px;
`;

const TitleImage = styled(Img)`
  width:100%
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

  /* For articles with images */

  & .article-image {
    max-width: 710px;
    margin: 0 auto 2rem auto;
    padding: 0;
    text-align: center;
    border-radius: 3px;
    -webkit-box-shadow: 0px 25px 50px rgb(100,100,100);
            box-shadow: 0px 25px 50px rgb(100,100,100);
  }
  & .article-image .image {
    display: block;
    border-radius: 3px;
    margin: 0;
    padding: 0; 
  }
  .article-image .quote {
    color: rgba(74,74,74,0.7);
    padding: 0.4rem 1rem 0.8rem 1rem;
    margin: 0;
    font-size: 0.8rem;
    line-height: 24px;
    font-style: italic;
  }

  /* For the about page */
  
  & .card {
    float: right;
    width: 320px;
    margin: 0 0 0 1rem;
    text-align: center;
    border-radius: 3px;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    padding: 1.2rem; 
    @media ${Device.tablet} {
      float: none;
      margin: 0 auto 1rem auto;
    }
  }
  & .card .about-heading {
    margin: 0.6rem 0px;
    color: #939393;
    font-family: arial;
    font-size: 1.5rem;
    text-align: center; 
  }
  & .card .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    padding: 0;
    list-style-type: none;
    grid-gap: 1rem;
    justify-items: stretch; 
  }
  & .card li.button {
    display: block;
    background: #ECECEC;
    border-radius: 15px;
    padding: 10px 0;
    font-family: arial;
    font-weight: bold;
    color: #9d9d9d;
    text-shadow: 0px 1px 0px #fff;
    border: 1px solid #a7a7a7;
    -webkit-box-shadow: 0px 2px 1px white inset, 
                        0px -2px 8px white, 0px 2px 5px rgba(0, 0, 0, 0.1), 
                        0px 8px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 1px white inset, 
                        0px -2px 8px white, 
                        0px 2px 5px rgba(0, 0, 0, 0.1), 
                        0px 8px 10px rgba(0, 0, 0, 0.1);
  }
  & .card li.button:hover {
    -webkit-box-shadow: 0px 2px 1px white inset, 0px -2px 20px white, 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 1px white inset, 0px -2px 20px white, 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1);
  }
  & .card li.button:active {
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5) inset, 0px -2px 20px white, 0px 1px 5px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5) inset, 0px -2px 20px white, 0px 1px 5px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1);
    background: -webkit-gradient(linear, left top, left bottom, from(#d1d1d1), to(#ECECEC));
    background: -webkit-linear-gradient(top, #d1d1d1 0%, #ECECEC 100%);
    background: -o-linear-gradient(top, #d1d1d1 0%, #ECECEC 100%);
    background: linear-gradient(top, #d1d1d1 0%, #ECECEC 100%); 
  }
`;

function BlogPost(props) {
  const { title, subHeading, content, published, tags, slug } = props.data.contentfulBlog;
  return (
    <div>
      <BannerImage 
        heading={ title }
        tagline= { tags.split(',')[0] }
        image={ props.bannerImage }
        alt='Sydney harbour banner image'
      />
      <Wrapper>
        {(slug !== 'about') &&
          <div>
            <h1>{ title } </h1>
            <h2>{ subHeading }</h2>
            <ArticleDate>{ formatDate(published) }</ArticleDate>
          </div>
        }
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
      slug
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
`;
