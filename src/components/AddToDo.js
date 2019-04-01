import React, { Component } from 'react'

export class AddToDo extends Component {
    state = {
        title: '',
        searchActive: false
    }

    onChange = (e) => this.setState({ title: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: ''});
    }


// Serach BTN
searchToggle = (evt) => {

    // Get the size of an object
    var container = document.querySelector('.search-wrapper');
        if(!container.classList.contains('active')){
            container.classList.add('active');
            evt.preventDefault();
        }
        else if(container.classList.contains('active')){
            container.classList.remove('active');
            // clear input
            document.querySelector('.search-input').value = '';
            
        }
}



  render() {
    return (

<form onSubmit={this.onSubmit}>
  <div className="search-wrapper">
    <div className="input-holder">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Enter New task..."
        value={this.state.title}
        onChange={this.onChange}
        />
      <button 
      type="submit"
      onClick={this.onSubmit} 
      className="search-icon"
      >
      <span></span>
      </button>
    </div>
    <span className="close actionItem" onClick={this.searchToggle}></span>
    
  </div>
</form>


    )
  }
}

export default AddToDo
