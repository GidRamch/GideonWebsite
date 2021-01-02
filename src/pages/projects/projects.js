import React from 'react';
import Card from '../../components/card/card';
import NavbarLayout from '../../layouts/navbar-layout/navbar-layout';
import projectsStyles from './project.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Head from "../../components/head/head";



const Projects = () => {

  const projects = useStaticQuery(graphql`
    query {
      allContentfulWebsiteProjects {
        edges {
          node {
            title
            subtitle
            image {
              fixed(width: 640) {
                ...GatsbyContentfulFixed
              } 
            }
            links {
              title
              url
            }
          }
        }
      }
    }
  `);

  console.log(projects);

  const projectCards = projects.allContentfulWebsiteProjects.edges.map(edge=>(
    <Card 
      title={edge.node.title}
      message={edge.node.subtitle}
      image={edge.node.image.fixed.src}
      key={edge.node.title}
      links={edge.node.links}
    ></Card>
  ));

  return (
    <NavbarLayout>
      <Head title="Projects"/>
      <div className={projectsStyles.container}>
        <div className={projectsStyles.content}>
          <div className={projectsStyles.title}>
            My Projects
          </div>
          <div className={projectsStyles.cardContainer}>
            {projectCards?.length ? projectCards : 'Loading...'}
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
}

export default Projects;