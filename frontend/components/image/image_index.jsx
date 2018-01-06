import React from 'react';

class ImageIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {images: props.images};
  }

  componentWillMount(){
    // debugger
    this.props.fetchImages();
  }

  componentDidMount(){
    // debugger
  }

  componentWillReceiveProps(){
    // debugger
  }

  imageList(){
    return (
      this.props.images.map(
        (image) => {
          return (<li key={image.id}><img src={image.image_url}/></li>);
        }
      )
    );
  }


  render(){

    // debugger
    return (<ul>{this.imageList()}</ul>);
  }

}

export default ImageIndex;
