import React from "react"
import NavbarLayout from "../layouts/navbar-layout/navbar-layout";
import indexStyles from './index.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Head from "../components/head/head";


export default function Home() {

  const assets = useStaticQuery(graphql`
    query {
      bgPhoto: allContentfulAsset (filter: {title: {eq: "HomePagePhoto"}}) {
        edges {
          node {
            id
            title
            fluid(maxWidth: 1920) {
    					...GatsbyContentfulFluid
  					}
          }
        }
      }
      bgVideo: allContentfulAsset (filter: {title: {eq: "HomePageVideo"}}) {
        edges {
          node {
            id
            title
            file {
              fileName
              url
                contentType
            }
          }
        }
      }
    }
  `);

  console.log(assets);

  return (
    <div className={indexStyles.pageContainer}>
      <Head title="About"/>
      <video loop autoPlay className={indexStyles.videoPlayer} muted poster={assets.bgPhoto.edges[0].node.fluid.base64}>
        <source
          src={assets.bgVideo.edges[0].node.file.url}
          type={assets.bgVideo.edges[0].node.file.contentType}
        />
      </video>

      <NavbarLayout className="content" contrast={true}>
        <div className={indexStyles.messageContainer}>
          <div className={indexStyles.message}>Hey! Let's get in touch!</div>
          <a className={indexStyles.link} href="mailto:gidramch@gmail.com">Reach me at gidramch@gmail.com</a>
        </div>
      </NavbarLayout>
    </div>


  );
}
