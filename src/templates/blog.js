import React from 'react';
import { graphql } from 'gatsby';
import NavbarLayout from '../layouts/navbar-layout/navbar-layout';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import blogStyles from './blog.module.scss';

import Head from "../components/head/head";
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { renderRichText } from "gatsby-source-contentful/rich-text"

// const Bold = ({ children }) => <span className="bold">{children}</span>

const options = {
  renderNode: {
  //   [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
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

// const options = {
//   renderNode: {
//     "embedded-asset-block": (node) => {

//       console.log(node);

//       const alt = node?.data?.target?.fields?.title['en-US']
//       const src = node?.data?.target?.fields?.file['en-US']?.url

//       return <img alt={alt} src={src} width="100%" />
//     }
//   }
// };


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
            {/* {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)} */}
            {props.data.contentfulBlogPost.body && renderRichText(props.data.contentfulBlogPost.body, options)}
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
}

export default Blog;