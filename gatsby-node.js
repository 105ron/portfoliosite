const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/Templates/BlogPost/BlogPost.js');
    resolve(
      graphql(`
        {
            allContentfulBlog (limit:100) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
          `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulBlog.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        return;
      }),
    );
  });
};

/* eslint no-useless-return: "off" */
