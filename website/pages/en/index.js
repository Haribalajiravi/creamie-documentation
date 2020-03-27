/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    // let yankVerification = window.document.createElement('meta');
    // yankVerification.setAttribute('name', 'yandex-verification');
    // yankVerification.setAttribute('content', '38f3542598fc418d');
    // window.document.head.appendChild(yankVerification);
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle lobster">
        {props.title}
        <small className="overpass">{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper noto-sans">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/creamie.png`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('installation.html')}>Get started</Button>
            <a href="https://www.buymeacoffee.com/7xcFqmn" target="_blank">
              <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style={{ width: '162px !important', marginLeft: '10px', borderRadius: '3px' }} />
            </a>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Production = () => (
      <Block background="try">
        {[
          {
            content:
              `Production run is auto-configured in 'ecosystem.config.js'. If you want, you can also manually configure it according to your specific need.`,
            image: `${baseUrl}img/production.gif`,
            imageAlign: 'right',
            title: 'Production',
          },
        ]}
      </Block>
    );

    const Development = () => (
      <Block background="light">
        {[
          {
            content:
              `Changes in development will be auto-updated in your browser. Development configuration and application performance are based on webpack configuration, so performance will be very optimal once your webpack is optimized.`,
            image: `${baseUrl}img/development.gif`,
            imageAlign: 'left',
            title: 'Development',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Save time and enhance your application by preventing code duplication.',
            image: `${baseUrl}img/webcomponents.svg`,
            imageAlign: 'top',
            title: 'Web Components',
          },
          {
            content: 'Code without stressing about accessing DOM.',
            image: `${baseUrl}img/binder.svg`,
            imageAlign: 'top',
            title: 'Binder',
          },
          {
            content: 'Route your components anywhere in your application.',
            image: `${baseUrl}img/router.svg`,
            imageAlign: 'top',
            title: 'Router',
          },
          {
            content: 'Simplify development and debugging by initializing events.',
            image: `${baseUrl}img/events.svg`,
            imageAlign: 'top',
            title: 'Events',
          }
        ]}
      </Block>
    );

    const Constributors = () => {
      if ((siteConfig.contributors || []).length === 0) {
        return null;
      }

      const template = siteConfig.contributors.map(contributor => (
        <li key={contributor.link}>
          <a href={contributor.link}>{contributor.name}</a>
        </li>
      ))
      return (
        <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div style={{ padding: '0px 60px'}}>
            <h1>Contributors</h1>
            <ul>
              {template}
            </ul>
          </div>
        </div>
      )
    }

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div className="overpass">
       <meta name="yandex-verification" content="38f3542598fc418d" />
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="main-container">
          <Features />
          <Development />
          <Production />
          <Constributors />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
