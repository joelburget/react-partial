'use strict';

import React from 'react';
import Partial from '../index.jsx';

let App = React.createClass({
  getInitialState: function() {
    return {
      selectedValue: 'apple',
    };
  },

  handleChange: function(value) {
    this.setState({
      selectedValue: value,
    });
  },

  render: function() {
    const { selectedValue } = this.state;

    return (
      <div>
        <Partial
          cls='input'
          type="radio"
          name="fruit">
          {Radio => (
            <div>
              <label>
                <Radio
                  value="apple"
                  checked={selectedValue === "apple"}
                  onChange={() => this.handleChange("apple")} />
                Apple
              </label>
              <label>
                <Radio
                  value="orange"
                  checked={selectedValue === "orange"}
                  onChange={() => this.handleChange("orange")} />
                Orange
              </label>
              <label>
                <Radio
                  value="watermelon"
                  checked={selectedValue === "watermelon"}
                  onChange={() => this.handleChange("watermelon")} />
                Watermelon
              </label>
            </div>
          )}
        </Partial>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));
