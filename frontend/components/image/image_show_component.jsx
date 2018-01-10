import React from 'react';

class ImageShow extends React.Component{

  componentWillMount(){

    this.props.fetchImage(this.props.id);

  }



  render(){

    return(
      <div>
        from image show wrapper
      </div>
    );
  }

}

export default ImageShow;
