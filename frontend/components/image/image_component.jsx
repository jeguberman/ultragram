import React from 'react';

class ImageComponent extends React.Component{

  constructor(props){
    //
    super(props);
    this.state = {id: props.id, image_url:""};
  }

  componentDidMount(){
    this.props.fetchPost(this.state.id)
  }

  componentWillReceiveProps(newProps,oldProps){

  }

  shouldComponentUpdate(){

  }

  render(){
    debugger
    return(
      <img src={this.state.image.image_url}></img>
    );
  }
}

export default ImageComponent;
