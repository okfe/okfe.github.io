/**
 * @desc [文章详情页]
 */
import React from 'react';
import './Details.less';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: ''
    };
  }

  componentDidMount() {
    const routerId = this.props.match.params.name;
    this.res = this.getIssue(routerId);
  }

  escapeHTMLString(str) {
    str = str.replace(/</g,'&lt;');
    str = str.replace(/>/g,'&gt;');
    return str;
  }

  getIssue(id) {
    if (id) {
      let issue = '';
      fetch(`./data/${id}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }

      }).then(response => response.json())// 解析为Promise
        .then(data => {
          issue = data.data;
          this.setState({
            item: issue
          });
        });
    }
  }

  render() {
    console.log(this.escapeHTMLString(this.state.item))
    return (
      <div style={{ display: this.props.isShow }}>
        <div dangerouslySetInnerHTML = {{ __html: this.state.item }} />
      </div>
    );
  }
}

export default Details;
