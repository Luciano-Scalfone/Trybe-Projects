import React, { Component } from 'react';
import { connect } from 'react-redux';
import Buttons from './Components/Buttons';
import PersonalInfo from './Components/PersonalInfo';
import Renderer from './Components/Renderer';
import WorkInfo from './Components/WorkInfo';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClean = this.handleClean.bind(this);

    this.state = {render: true};
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      ...this.props.state,
    });
  }

  handleClean = () => {
    this.setState({});
  }

  render() {
    return (
      <div>
        <PersonalInfo />
        <WorkInfo />
        <Buttons handleClick={this.handleClick} handleClean={this.handleClean} />
        <Renderer forms={this.state} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.reducer,
});

export default connect(mapStateToProps)(Form);
