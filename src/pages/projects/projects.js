import React from 'react';
import Card from '../../components/card/card';
import NavbarLayout from '../../layouts/navbar-layout/navbar-layout';
import projectsStyles from './project.module.scss';
import { graphql, useStaticQuery } from 'gatsby';



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
      key={edge.node.image.fixed.src}
      links={edge.node.links}
    ></Card>
  ));

  return (
    <NavbarLayout>
      <div className={projectsStyles.container}>
        <div className={projectsStyles.content}>
          <div className={projectsStyles.title}>
            My Projects
          </div>
          <div className={projectsStyles.cardContainer}>
            {projectCards}
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
}

export default Projects;