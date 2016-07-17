marked.setOptions({
  sanitize: true,
});

var TextComponent = React.createClass({
    update: function(event) {
        var newValue=event.target.value;
        this.props.saveChange(newValue);
    },
    render: function() {
        return (
            <div>
                <textarea value={this.props.value} onChange={this.update}></textarea>
            </div>
        );
    },
});

var DisplayContainer = React.createClass({
    getInitialState: function() {
        return {
            value: "It's very easy to make some words **bold** and other words *italic* with Markdown. See all the intricacies on [Github.](https://guides.github.com/features/mastering-markdown/)\n\n# Demonstration\n\n### This is a third-tier heading\n\nYou can use one `#` all the way up to `######` six for different heading sizes.\n\nSometimes you want numbered lists:\n1. One\n2. Two\n3. Three\n\nAlternatively,\n- Dashes work just as well\n- And if you have sub points, put two spaces before the dash or star:\n  - Like this\n  - And this"
        };
    },
    sanitize: function(html) {
        return ({
            __html: marked(this.state.value)
        });
    },
    saveChange: function(newValue) {
        this.setState({value: newValue});
    },
    render: function(){
        return (
          <div className="container">
              <TextComponent value={this.state.value} saveChange={this.saveChange}/>
			  <div>
				  <span dangerouslySetInnerHTML={this.sanitize(this.state.value)}></span>
			  </div></div>
        );
    }
});

ReactDOM.render(<DisplayContainer/>,document.getElementById("container"));
