import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Device from '../../assets/styles/mediaQueries';
import formatDate from '../../assets/helpers/dateFormatter';

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

function blogPostPreviewCard(props) {
  const {
    articleImage, published, slug, synopsis, tags, title,
  } = props;
  return (
    <IndivialPost>
      <Image fluid={articleImage.fluid} />
      <TextHolder>
        <ArticleLink href={`/${slug}`}>
          <ArticleTitle>
            {title}
          </ArticleTitle>
        </ArticleLink>
        <ArticleTags>
          { tags.split(',')[0] }
          <NoEmphasis>
            &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
            {formatDate(published)}
          </NoEmphasis>
        </ArticleTags>
        <Synopsis>
          { synopsis.internal.content }
        </Synopsis>
      </TextHolder>
    </IndivialPost>
  );
}

blogPostPreviewCard.propTypes = {
  articleImage: PropTypes.object.isRequired,
  published: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  synopsis: PropTypes.object.isRequired,
  tags: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default blogPostPreviewCard;
