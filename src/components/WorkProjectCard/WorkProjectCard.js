import React, { useState, useEffect } from "react";
import "./WorkProjectCard.css";
import $ from "jquery";
import Moment from 'react-moment';

/**
 * Uses JS/CSS inspired on "BlogCard"
 * Uses JS/CSS from codepen: https://codepen.io/zeus012345/pen/jOrKRLE.
 * 
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

  /* Displays animation "showing" the description on hovering the current project card. */
  function onHover(ev) {
    console.debug("Hover event: " + ev.type);

    // The target property can be the element that registered for the event or a descendant of it.
    var $description = $(ev.target).find('.description');

    // Stop the current animation (e.g. mouseenter -> mouseleave)
    $description.stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 200);
  }

  function getDateTimeProjectCardEdited() {
    // November 21 2020
    var datetimeStr = "2020-11-19T12:59-0500";
    return (
      <span>
        <Moment format="MMMM DD, YYYY">{datetimeStr}</Moment>&nbsp;
        (<Moment fromNow="true">{datetimeStr}</Moment>)
      </span>
    );
  }

  function getReadTime() {
    return (5);
  }

  return (
    <div className="container work-project-card-container" onClick={() => openUrlInNewTab("#/portfolio-react/#blogs")} onMouseEnter={onHover} onMouseLeave={onHover}>
      <div className="project-column">
        <div className="post-module project-module-card">
          <div className="thumbnail">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
          </div>
          <div className="post-content">
            <div className="category">Photos</div>
            <h1 className="title">City Lights in New York</h1>
            <h2 className="sub_title">The city that never sleeps.</h2>
            <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
            <div className="post-meta">
              <span className="timestamp">
                <i className="fas fa-clock"></i> {getDateTimeProjectCardEdited()} - &nbsp;
                <i class="fas fa-book-reader"></i> {getReadTime()} mins read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
