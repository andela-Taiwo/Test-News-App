// src/components/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {


/*
 * @returns{<NotFound />}
 * @memberof NotFound renders UI for the NotFound component
 */
  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <Link to="/">Go back to the news sources page</Link>
        </p>
      </div>
    );
  }
}

