import CodeFormatter from '../CodeFormatter';
import React from 'react';
import Typography from '../../../src/Typography';

function Base() {
  return (
    <div>
      <Typography
        component="p"
        type="title"
      >
        Installation
      </Typography>
      <CodeFormatter code="npm install material-react-components@next" />
      <Typography
        component="p"
        type="title"
      >
       Configuration
      </Typography>

      <p>
        Two methods are available for using the library:
        {' ES6 (recommended) or ES5. See the '}
        <a href="https://github.com/collegepulse/material-react-components-examples">
          example projects
        </a>
        {' that demonstrate both.'}
      </p>
      <Typography
        component="p"
        type="title"
      >
        ES6 Configuration (recommended)
      </Typography>
      Add the following loaders to your Webpack configuration:
      <CodeFormatter
        code={`
          module: {
            rules: [
              {
                test: /\\.css$/,
                exclude: /node_modules\\/(?!material-react-components)/,
                use: [
                  'style-loader',
                  'css-loader?modules'
                ]
              },
              {
                test: /\\.js$/,
                exclude: /node_modules\\/(?!material-react-components)/,
                loader: 'babel-loader'
              }
            ]
          }`
        }
      />
      <p>{'If using the material-design-icons SVG icons, or any components containing SVG\'s (e.g., SelectField), include the following loader:'}</p>
      <CodeFormatter
        code={`
          module: {
            rules: [
              {
                test: /\\.svg$/,
                exclude: /node_modules\\/(?!material-design-icons)/,
                use: [
                  'babel-loader',
                  'react-svg-loader'
                ]
              }
            ]
          }`
        }
      />
      <Typography
        component="p"
        type="title"
      >
        ES5 Configuration
      </Typography>
      <p>Follow the SVG instructions in the ES6 Configuration section, if applicable.</p>
    </div>
  );
}

export default Base;
