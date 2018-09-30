import React from 'react';

export default class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      jobTitle: '',
      bio: ''
    }
  }
  onSubmit = (e) =>{
    e.preventDefault();
    alert('submited')
  }

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
      <form onSubmit={this.onSubmit} style={{display: 'flex', flexFlow: 'column'}}>
        <label style={{color: '#606060'}}>Name</label>
        <input
          type="text"
          autoFocus
          value={this.state.name}
          onChange={this.onNameChange}
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
        ></textarea>
       <div style={{display: 'flex'}}>
         <button type="submit" onClick={()=>alert('hi')} style={{width: 100, background: '#0080ff', border: 'none', padding: '10px 20px', borderRadius: 5, color: 'white'}}>Save</button>
         <button onClick={()=>alert('cancel')} style={{marginLeft: 10, width: 100, background: 'white', border: '1px solid #a5a5a5', padding: '10px 20px', borderRadius: 5, color: 'black'}} >Cancel</button>
       </div>
      </form>
    )
  }
}
