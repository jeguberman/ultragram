import React from 'react';

class ImageForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleFileChange=this.handleFileChange.bind(this);
    this.state={image_url: "", imageFile: null};
  }

  renderForm(){
    return (<form onSubmit={this.handleSubmit}>
      <input type="file" onChange={this.handleFileChange}/>
      <img src={this.state.image_url} />
      
      <input type="text" placeholder="Caption goes here" />
    </form>);
  }

  isEdit(){
    if(this.props.formType==="editImage"){
      return(<div>is edit</div>);
    }
  }

  handleFileChange(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => {
      return( this.setState( {image_url: reader.result, imageFile: file} ) );
    };

    if(file){
      reader.readAsDataURL(file);
    }else{
      this.setState({image_url:"", imageFile: null});
    }

  }

  handleSubmit(e){
    e.preventDefault();
  }

  render (){

    return(
      <div>
        {this.renderForm()}
        {this.isEdit()}
      </div>
    );

  }
}

export default ImageForm;
