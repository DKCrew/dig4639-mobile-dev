class Task {
    constructor(props) {
        this.props = props;
        console.log("Test");
        this.button.addEventListener("click", this.onClick)
    }
    onClick() {
        console.log("Clicked");
    }
    render() {
        return `<div></div>`;
    }

}
export default Component;