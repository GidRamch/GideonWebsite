import React from 'react';
import NavbarLayout from '../../layouts/navbar-layout/navbar-layout';
import blogsStyles from './blog.module.scss';
import Head from "../../components/head/head";
import BlogCard from '../../components/blog-card/blog-card';
import { graphql, Link, useStaticQuery } from 'gatsby';


const Blog = () => {


  const blogPosts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort : {
          fields:publishedDate,
          order:DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            snippet
            duration
            mainImage {
              fixed(width: 640) {
                ...GatsbyContentfulFixed
              } 
            }
          }
        }
      }
    }
  `);

  
  console.log(blogPosts);


  const blogPostCards = blogPosts.allContentfulBlogPost.edges.map(edge=>(
    <Link to={`/blog/${edge.node.slug}`} className={blogsStyles.noStyleLink}>
      <BlogCard
        image={edge.node.mainImage.fixed.src}
        title={edge.node.title}
        snippet={edge.node.snippet}
        date={edge.node.publishedDate}
        duration={edge.node.duration + 'min read'}
      ></BlogCard>
    </Link>
  ));


  return (
    <NavbarLayout>
      <Head title="Blog"/>
      <div className={blogsStyles.container}>
        <div className={blogsStyles.content}>
          <div className={blogsStyles.title}>
            Blog Posts
          </div>
          <div className={blogsStyles.cardContainer}>
            {blogPostCards}
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
}

export default Blog;