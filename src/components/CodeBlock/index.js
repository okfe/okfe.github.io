import React from 'react';
import Highlight from 'react-highlight';

export default class CodeBlock extends React.PureComponent {

  render() {
    return (
      <Highlight className='Vs 2015'>
        {this.props.value}
      </Highlight>
    );
  }
}