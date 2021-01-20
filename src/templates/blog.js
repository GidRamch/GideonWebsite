import React from 'react';
import { graphql } from 'gatsby';
import NavbarLayout from '../layouts/navbar-layout/navbar-layout';
import { BLOCKS } from "@contentful/rich-text-types"
import { Disqus } from 'gatsby-plugin-disqus';
import blogStyles from './blog.module.scss';
import Head from "../components/head/head";
import { renderRichText } from "gatsby-source-contentful/rich-text"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      console.log(node);

      return (
        <img 
          alt={node.data.target.title}
          src={node.data.target.fluid.src}
          width="100%"
          srcSet={node.data.target.fluid.srcSet}
          sizes={node.data.target.fluid.sizes}
        />
      )
    },
  },
}


export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            fluid(maxWidth: 980) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Blog = (props) => {


  const discusConfig = {
    url: `https://distracted-hoover-350ab2.netlify.app${props.uri}`,
    identifier: props.data.contentfulBlogPost.title,
    title: props.data.contentfulBlogPost.title,
  };


  console.log(props);

  const title = `${props.data.contentfulBlogPost.title}`

  return (
    <NavbarLayout >
      <Head title={title} />
      <div className={blogStyles.container}>
        <div className={blogStyles.content}>
          <div className={blogStyles.title}>
            {props.data.contentfulBlogPost.title}
          </div>
          <div className={blogStyles.date}>
            {props.data.contentfulBlogPost.publishedDate}
          </div>
          <div className={blogStyles.cardContainer}>
            {props.data.contentfulBlogPost.body && renderRichText(props.data.contentfulBlogPost.body, options)}
          </div>
          <Disqus
            className={blogStyles.comments}
            config={
              discusConfig
            }
        />
        </div>
      </div>
    </NavbarLayout>
  );
}

export default Blog;