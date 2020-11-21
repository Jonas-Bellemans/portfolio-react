import React, { useState, useEffect } from "react";
import "./WorkProjectCard.css";
import $ from "jquery";
import Moment from 'react-moment';
import {calculateReadTimeAsync}  from "../../helpers/read-time-helper";
import {useLongPress}  from "../../events/long-press-event";

/**
 * Uses JS/CSS inspired on "BlogCard"
 * Uses JS/CSS from codepen: https://codepen.io/zeus012345/pen/jOrKRLE.
 * 
 * @param {Object} project: contains single project item. 
 */
// export default function WorkProjectCard({ project, isDark }) {
export default function WorkProjectCard() {
  const [isHiddenDesc, setDescToHidden] = useState(true);

  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }
  
  /* Displays animation "showing" the description on hovering the current project card. */
  function onToggleDescription(ev) {
    // Prevent event from bubbeling up.
    ev.stopPropagation();
    ev.preventDefault();
    ev.nativeEvent.stopImmediatePropagation();  // ~ https://stackoverflow.com/a/44587299

    console.log(ev.target.tagName);

    // Invert the hidden state
    setDescToHidden(!isHiddenDesc);

    // The target property can be the element that registered for the event or a descendant of it.
    var $containerCard = (
      $(ev.target).hasClass('container')
      ? $(ev.target)
      : $(ev.target).parents('.container')
    );
    var $description = $containerCard.find('.description');

    // Stop the current animation (e.g. mouseenter -> mouseleave)
    $description.stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 200);

    return false;
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
    try{
      return calculateReadTimeAsync();
    } catch(ex) {
      console.error(ex);
      return -1;
    }
  }

  return (
    <div className="container work-project-card-container" onMouseLeave={(ev) => !isHiddenDesc && onToggleDescription(ev)}>
      <div className="project-column">
        <div className="post-module project-module-card">
          <div className="thumbnail">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
          </div>
          <div className="post-content">
            <div className="btn-open-post" onClick={() => openUrlInNewTab("#/portfolio-react/#blogs")}>Go to post</div>
            <h1 className="title">City Lights in New York</h1>
            <h2 className="sub_title">The city that never sleeps.</h2>
            {(
              isHiddenDesc && 
              <span className="post-open-description" onClick={onToggleDescription} onMouseEnter={onToggleDescription}>
                <i class="fas fa-angle-double-down"></i>
              </span>
            )}
            <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers. bla aznezaenazkjenakzjenazjkeaz jkzajenakzj nkjnazk eaznejan zkjen azj nazkjena z bla aznezaenazkjenakzjenazjkeaz jkzajenakzj nkjnazk eaznejan zkjen azj nazkjena z bla aznezaenazkjenakzjenazjkeaz jkzajenakzj nkjnazk eaznejan zkjen azj nazkjena z bla aznezaenazkjenakzjenazjkeaz jkzajenakzj nkjnazk eaznejan zkjen azj nazkjena z</p>
            <div className="post-meta">
              <div className="timestamps">
                <div className="timestamp-item"><i className="fas fa-clock"></i> {getDateTimeProjectCardEdited()}</div>
                <div className="timestamp-item"><i class="fas fa-book-reader"></i> {getReadTime()} min read</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
