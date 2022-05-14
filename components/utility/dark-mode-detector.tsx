import { Component } from "react";

export default class DarkModeDetector extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
        };
    }

    setTheme() {
        // Determine initial theme and set the theme variable in state accordingly
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    componentDidMount() {
        this.setTheme();
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", this.setTheme);
        this.setState({
            mounted: true,
        });
    }

    render() {
        return (
            <>{this.state.mounted === true ? <>{this.props.children}</> : ""}</>
        );
    }
}
