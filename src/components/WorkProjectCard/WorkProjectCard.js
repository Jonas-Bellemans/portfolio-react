import React from "react";
import "./WorkProjectCard.css";

/**
 * Uses JS/CSS inspired on "BlogCard"
 * @param {Object} project: contains single project item. 
 */
// export default function WorkProjectCard({ project, isDark }) {
export default function WorkProjectCard() {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    
    <div className="container" onClick={() => openUrlInNewTab("piep")}>
      <div className="project-column">
        <div className="project-module-card">
          <div className="thumbnail">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
          </div>
          <div className="post-content">
            <div className="category">Photos</div>
            <h1 className="title">City Lights in New York</h1>
            <h2 className="sub_title">The city that never sleeps.</h2>
            <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
            <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-">o</i> 6 mins ago</span><span className="comments"><i className="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
          </div>
        </div>
      </div>

    </div>

  );

  // return (
  //   <div onClick={() => openUrlInNewTab(blog.url)}>
  //     <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
  //       <a
  //         className={isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"}
  //         href="#blog"
  //       >
  //         <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
  //           title
  //         </h3>
  //         <p className={isDark ? "small-dark small" : "small"}>
  //           {blog.description}
  //         </p>
  //         <div className="go-corner">
  //           <div className="go-arrow">→</div>
  //         </div>
  //       </a>
  //     </div>
  //   </div>
  // );
}
