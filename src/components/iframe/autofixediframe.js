import React from 'react';
import ReactDOM from 'react-dom';

export default class AutoFixedIframe extends React.Component {

  constructor() {
    super();
    this.state = {
        iFrameHeight: '0px'
    }
  }

  handleOnLoad = () => {
    const obj = ReactDOM.findDOMNode(this);
    const body = obj.contentWindow.document.body;
    const newHeight = Math.max( body.scrollHeight, body.offsetHeight );
    this.setState({
        "iFrameHeight":  newHeight + 'px'
    });
  }

  render() {
    const src = this.props.src;
    return (
      <iframe 
        title="auto-fixed-iframe"
        style={{width:'100%', height:this.state.iFrameHeight, overflow:'visible'}}
        onLoad={this.handleOnLoad} 
        ref="iframe" 
        src={src} 
        width="100%" 
        height={this.state.iFrameHeight} 
        scrolling="no" 
        frameBorder="0"
      />
    );
  }
}
