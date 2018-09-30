import React from 'react';

export default class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:  props.author ? props.author.name : '',
      jobTitle: props.author ? props.author.jobTitle : '',
      bio: props.author ? props.author.bio : '',
    }
  }
  onSubmit = (e) => {
      e.preventDefault();
      if (this.state.name) {
        this.props.onSubmit({
          name: this.state.name,
          jobTitle: this.state.jobTitle,
          bio: this.state.bio
        });
      }
  };

  onNameChange = (e) => {
    e.preventDefault();
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onJobTitleChange = (e) => {
    e.preventDefault();
    const jobTitle = e.target.value;
    this.setState(() => ({ jobTitle }));
  };
  onBioChange = (e) => {
    e.preventDefault();
    const bio = e.target.value;
    this.setState(() => ({ bio }));
  };
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit} style={{display: 'flex', flexFlow: 'column'}}>
          <label style={{color: '#606060'}}>Name</label>
          <input
            type="text"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
            required
          />
          <label style={{color: '#606060'}}> Job title</label>
          <input
            type="text"
            value={this.state.jobTitle}
            onChange={this.onJobTitleChange}
          />

          <label style={{color: '#606060'}}>Bio</label>
          <textarea
            type="text"
            value={this.state.bio}
            onChange={this.onBioChange}
            rows="10" cols="30"
          >
          </textarea>
         <div style={{display: 'flex'}}>
           <button type="submit" className="form-save-btn" >Save</button>
           <div onClick={this.props.onCancel} className="form-cancel-btn" >Cancel</div>
         </div>
        </form>
      </div>
    )
  }
}
