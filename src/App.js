import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import { githubRepoName } from "./portfolio";

import "bootstrap/dist/css/bootstrap.min.css"; /* BOOTSTRAP: "The following line can be included in your src/index.js or App.js file" ~ https://react-bootstrap.github.io/getting-started/introduction/ */


/*TODO: basename vervangen door JS variable */
/**
 * Setup github pages routing (normal client-side router doesn't work)
 * - https://github.com/whatsyourgithub/react-router-github-pages-example/blob/master/src/App.js
 * - https://github.com/facebook/create-react-app/issues/1765
 * - https://medium.com/@bennirus/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
 * 
 * => make sure to use the HashRouter. Without it, on browser refresh, the url won't exist as it
 * is an client side route... This would cause the Github 404 page to be shown.
 */
function App() {
  return (
    <HashRouter basename={githubRepoName}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </HashRouter>
  );
}

export default App;



const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
