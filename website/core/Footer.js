/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {

  render() {
    return (
      <footer className="nav-footer" id="footer">

        <section className="copyright">
          {this.props.config.copyright}
          <a href={this.props.config.ownerUrl} className='copyright-owner'
            target="_blank"
            rel="noreferrer noopener">
              {this.props.config.copyrightOwner}
          </a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
