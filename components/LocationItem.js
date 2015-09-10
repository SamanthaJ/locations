var React = require('react');
var LocationItem = require('/.LocationItem');
var moment = requite('moment');

var LocationItem = React.creatClass({

  handleClick(){
    this.props.onClick(this.props.address);
  },
    render(){

      var cn = "list-group-item";

      if(this.props.active){

      }
      return (
        <a className={cn} onClick={this.handleClick}>
          {this.props.address}
          <span className="createdAt">{ moment(this.props.timestamp).fromNow() }</span>
          <span className="glyphicon gylphicon-menu-right"></span>
        </a>
      )
    }
});

module.exports = LocationItem;
