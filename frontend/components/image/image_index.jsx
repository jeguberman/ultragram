import React from 'react';

class ImageIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {images: props.images};
  }

  componentWillMount(){
    this.props.fetchImages();
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
    return (<ul>{this.imageList()}</ul>);
  }

}

export default ImageIndex;
