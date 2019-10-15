import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '_src/components/CodeBlock';

export default class Markdown extends React.PureComponent {
  render() {
    const { source } = this.props;
    return (
      <ReactMarkdown className={'markdown'}
        //必须是false不然img标签渲染不出来
        escapeHtml={false}
        source={source}
        renderers={{
          code: CodeBlock
        }}
      />
    );
  }
}
