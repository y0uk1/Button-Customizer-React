import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const CustomButton = (props) => {
  const color = props.color;
  const backgroundColor = props.backgroundColor;
  const borderRadius = props.borderRadius;
  const opacity = props.opacity;
  const fontSize = props.fontSize;

  const divStyle = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: `${borderRadius}%`,
    opacity: opacity,
    fontSize: `${fontSize}px`,
  };

  return (
    <button disabled={props.disabled} style={divStyle}>
      {props.buttonText}
    </button>
  )
}

const Range = (props) => {
  return (
    <form>
      <label>{props.name}</label>
      <input name={props.name} type="range" min={props.min} max={props.max} step={props.step} value={props.value} onChange={props.onChange} />
      {props.value}
    </form>
  );
}

const Color = (props) => {
  return (
    <form>
      <label>{props.name}</label>
      <input name={props.name} type="color" value={props.value} onChange={props.onChange} />
    </form>
  )
}

const Text = (props) => {
  return (
    <form>
      <label>{props.name}</label>
      <input name={props.name} type="text" value={props.value} onChange={props.onChange} />
    </form>
  )
}

const Checkbox = (props) => {
  return (
    <form>
      <label>{props.name}</label>
      <input name={props.name} type="checkbox" value={props.value} onChange={props.onChange} />
    </form>
  )
}

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      backgroundColor: '',
      opacity: "1",
      borderRadius: "50",
      fontSize: "30",
      disabled: false,
      buttonText: "custom button",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <CustomButton
          color={this.state.color}
          backgroundColor={this.state.backgroundColor}
          opacity={this.state.opacity}
          borderRadius={this.state.borderRadius}
          fontSize={this.state.fontSize}
          disabled={this.state.disabled}
          buttonText={this.state.buttonText}
        />
        <Color
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <Color
          name="backgroundColor"
          value={this.state.backgroundColor}
          onChange={this.handleChange}
        />
        <Range
          name="opacity"
          min="0"
          max="1"
          step="0.1"
          value={this.state.opacity}
          onChange={this.handleChange}
        />
        <Range
          name="borderRadius"
          min="0"
          max="50"
          step="1"
          value={this.state.borderRadius}
          onChange={this.handleChange}
        />
        <Range
          name="fontSize"
          min="10"
          max="40"
          step="1"
          value={this.state.fontSize}
          onChange={this.handleChange}
        />
        <Checkbox
          name="disabled"
          value={this.state.disabled}
          onChange={this.handleChange}
        />
        <Text
          name="buttonText"
          value={this.state.buttonText}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Setting />,
  document.getElementById('root')
);