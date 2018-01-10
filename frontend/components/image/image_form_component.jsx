import React from 'react';

class ImageForm extends React.Component{
  constructor(props){

    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleFileChange=this.handleFileChange.bind(this);
    this.state={imageUrl: "", imageFile: null, caption:""};

  }


  imageField(){
    return(
      <div className='image-form-image'>

      </div>
    );
  }

  formComponent(){
    return (
      <form className="image-form form grey-border" onSubmit={this.handleSubmit}>


        <div className="image-form-buffer"></div>
        <img className='image-form-image' src={this.state.image_url} />


        <input type="text" value={this.state.caption} className="image-form-caption" placeholder="Write a caption for your image..." onChange={this.update('caption')}/>

        {this.listErrors()}

        <div className="image-form-buttons">

        <label className="file-upload-mask session-button">
          Choose file...
          <input type="file" onChange={this.handleFileChange}
            id="file-upload"/>
        </label>


          <input type="submit" className="image-form-submit session-button" value="Submit Image" />

        </div>
      </form>
    );
  }



  render (){

    return(
      <div>
        {this.formComponent()}
        {this.isEdit()}
      </div>
    );
  }

isEdit(){
  if(this.props.formType==="editImage"){
    return(<div>is edit</div>);
  }
}

listErrors(){
  if(this.props.errors){
    const errorList = this.props.errors.map(
      (error, idx) => {
        return <li key={idx}
          className="image-form-error-item error">{error}</li>;
        }
      );

      return(
        <ul className="image-form-errors">{errorList}</ul>
      );

    }else{
      return null;
    }
  }

handleSubmit(e){

  e.preventDefault();
  const formData = new FormData();
  formData.append("image[image_url]", this.state.imageFile);
  formData.append("image[caption]", this.state.caption);
  this.props.postImage(formData);
  if(!this.props.errors){
    this.props.history.push("/");
  }
}

handleFileChange(e){
  const reader = new FileReader();
  const file = e.currentTarget.files[0];

  reader.onloadend = () => {
    return( this.setState(
      {image_url: reader.result, imageFile: file}
    ));
  };

  if(file){
    reader.readAsDataURL(file);
  }else{
    this.setState({image_url:"", imageFile: null});
  }

}

update(field){
  return (e) => {
    this.setState({[field]:e.target.value});
  };
}
}
export default ImageForm;
