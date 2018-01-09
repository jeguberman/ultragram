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
      this.props.images.reverse().map(
        (image) => {

          return (<li key={image.id}>
            <FeedItemContainer image={image}/>
          </li>);
        }
      )
    );

  }


  render(){
    return (<ul className="feed-list">{this.imageList()}</ul>);
  }

}

export default ImageIndex;
