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

  componentWillMount() {
    const routerId = this.props.match.params.name;
    this.res = this.getIssue(routerId);
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
    return (
      <div style={{ display: this.props.isShow }}>
        <div dangerouslySetInnerHTML = {{ __html: this.state.item }}></div>,
      </div>
    );
  }
}

export default Details;
