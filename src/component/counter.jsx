import React, { Component } from "react";

class Counter extends Component {
  /**
   * An object that includes any data that this component needs.
   */
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      /** when comparing an empty string using and operators it is a falsy but
        a string with atleast one character is a truthy. 
        number 0 is falsy. Any number but 0 is considered truthy*/
      <div>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
