import React, { Component } from 'react';  
import PropTypes from 'prop-types'
class XiaojiejieItem  extends Component {   
   constructor(props){
       super(props)
       this.handleClick=this.handleClick.bind(this)
   } 
    render() { 
        return ( 
            <div onClick={this.handleClick}>
                本店头牌{this.props.avname}为你-{this.props.content}
            </div>
        );
    }
    handleClick(){
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
 
XiaojiejieItem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
export default XiaojiejieItem;