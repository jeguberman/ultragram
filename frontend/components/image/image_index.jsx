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
    if(this.props.images.length > 0){
      return (<ul className="feed-list">{this.imageList()}</ul>);
    }else{
      return(<div className="no-posts grey-border">Not following anybody yet.</div>);
    }
  }

}

export default ImageIndex;
