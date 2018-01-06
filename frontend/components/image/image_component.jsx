import React from 'react';

class ImageComponent extends React.Component{

  constructor(props){
    // debugger
    super(props);
    this.state = {id: props.id, image_url:""};
  }

  componentWillMount(){

    debugger
    this.props.fetchImage(this.state.id);
    this.setState({image: this.props.images[this.state.id]});

  }

  componentWillReceiveProps(newProps,oldProps){
    debugger
  }

  shouldComponentUpdate(){
    debugger
  }

  render(){
    debugger
    return(
      <img src={this.state.image.image_url}></img>
    );
  }
}

export default ImageComponent;
