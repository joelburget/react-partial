'use strict';

import React, {PropTypes} from 'react';

function prebind(cls, earlyBound) {
  return React.createClass({
    render: function() {
      let { children, ...lateBound } = this.props
      return React.createElement(
        cls,
        { ...earlyBound, ...lateBound },
        children
      );
    }
  });
}

export default React.createClass({
  propTypes: {
    cls: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(React.cls),
    ]).isRequired,
    children: PropTypes.func.isRequired,
  },

  render: function() {
    let { children, cls, ...earlyBound } = this.props;
    return children(prebind(cls, earlyBound))
  }
});
