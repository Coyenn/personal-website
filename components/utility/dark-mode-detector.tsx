import { Component } from "react";

export default class DarkModeDetector extends Component {
  constructor(props) {
    super(props);
  }

  setTheme(){
    // Determine initial theme and set the theme variable in state accordingly
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  componentDidMount() {
    this.setTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.setTheme)
  }

  render() {
    return (
      <></>
    );
  }
}