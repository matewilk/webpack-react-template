var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
    render: function(){
        return (
            <div className="my-component">
                <h1>Hello world </h1>
            </div>
        );
    }
});
ReactDOM.render(<Main />, document.getElementById('app'));
