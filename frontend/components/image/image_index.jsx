import React from 'react';
import FeedItemContainer from './feed_item_container';

class ImageIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){

    this.props.fetchImages();

  }

  imageList(){
    return (
      this.props.images.map(
        (image) => {

          return (<li key={image.id}>
            <div>feedItem</div>
            // <FeedItemContainer image={image}/>
          </li>);
        }
      )
    );
  }


  render(){
    return (<ul>{this.imageList()}</ul>);
  }

}

export default ImageIndex;
