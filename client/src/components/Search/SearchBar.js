import React from "react";
import { Redirect } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  updateInputVal = e => {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.updateInputVal}
          placeholder="Where are you going?"
        />
        <input
            type="date"
            value={this.state.inputValue}
            onChange={this.updateInputVal}
            placeholder="Add Dates"
        />
        <input
            type="date"
            value={this.state.inputValue}
            onChange={this.updateInputVal}
            placeholder="Add Dates"
        />
        <input
            type="text"
            value={this.state.inputValue}
            onChange={this.updateInputVal}
            placeholder="Add Guests"
        />
        <button type="submit" >Submit</button>
      </form>
    );
  }
};

export default SearchBar;
