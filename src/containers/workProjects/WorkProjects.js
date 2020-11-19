import React, { useContext } from "react";
import "./WorkProjects.css";
import BlogCard from "../../components/blogCard/BlogCard";
import WorkProjectCard from "../../components/WorkProjectCard/WorkProjectCard";
import { blogSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

/**
 * Re-uses JS/CSS from "Blogs".
 */
export default function WorkProjects() {
  const { isDark } = useContext(StyleContext);
  return (
    <div id="work-projects">
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="blogs">
          <div className="blog-header">
            <h1 className="blog-header-text">{blogSection.title}</h1>
            <p className={isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"}>
              {blogSection.subtitle}
            </p>
          </div>
          <div className="blog-main-div">
            <div className="blog-text-div">
              {blogSection.blogs.map((blog, i) => {
                return (
                  <WorkProjectCard 
                    key={i}
                    isDark={isDark}
                    blog={{
                      url: blog.url,
                      image: blog.image,
                      title: blog.title,
                      description: blog.description,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}


