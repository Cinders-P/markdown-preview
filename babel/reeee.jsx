var DisplayContainer = React.createClass({

    saveChange: function(newValue) {
        this.setState({value: newValue});
    },
    render: function(){
        return (
              <span dangerouslySetInnerHTML={this.sanitize(this.state.value)}></span>
        );
    }
});

ReactDOM.render(<h1>HELP ME</h1>,document.getElementById("container"));
