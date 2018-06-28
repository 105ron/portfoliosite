import React from 'react'
import favicon from './assets/favicon.png'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>MadeByRhys!</title>
          <meta
            name="Rhys"
            content="Website by Rhys"
          />

          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="HandheldFriendly" content="True" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}