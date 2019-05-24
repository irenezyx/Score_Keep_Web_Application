import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return (
        <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
      )
    }
    // in javascript, if not explictly return anything, it will return an undefined object
    // if return nothing, the function won't be executed
  }
  render() {
    // after div, can't use class, because in jsx "class" is reserved for js to make a new class
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};
// subtitle optional

TitleBar.defaultProps = {
  // title: 'Default title'
};
