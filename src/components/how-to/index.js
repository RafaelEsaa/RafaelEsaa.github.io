import React from 'react';

import './_how-to.scss';

const NewsListing = props =>
  (<section className="howto" id="howto">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="howto-title">How to</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ol className="howto-list">
          {props.data}
          </ol>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;