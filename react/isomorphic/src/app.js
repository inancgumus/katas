const React = require('react')
    , ReactDOMServer = require('react-dom/server');

class Image extends React.Component {
  render() {
    return <img src={this.props.src} />;
  }
}

let result = ReactDOMServer.renderToString(
  <div>
    <Image src="nanik.jpg" />
    <Image src="nanik2.jpg" />
    <Image src="nanik3.jpg" />
  </div>
);

console.log(result);
