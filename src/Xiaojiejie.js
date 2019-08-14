import React, { Component } from 'react'
import XiaojiejieItem from './XiaojiejieItem' 
 
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'shixngya',
            list: ['base mashaji', 'exper mashaji']
        }
    }
    render() {
        return (

            <div>
                <label htmlFor="jspang">加入服务：</label>
    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
    <button onClick={this.addList.bind(this)}> 增加服务 </button>
                <div> <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务 </button></div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            // return <li>{item}</li>
                            return (
                                // <li
                                //     key={index + item}
                                //     onClick={this.deleteItem.bind(this, index)}
                                //     dangerouslySetInnerHTML={{ __html: item }}
                                // >
                                // </li>
                                //<XiaojiejieItem />
                                <XiaojiejieItem 
                                key={index+item}  
                                content={item} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })

    }
    addList() { 
        this.setState({ 
            list: [...this.state.list, this.state.inputValue + ":" + this.state.list.length]
        })

    }
    inputChange(e) {
        console.log(e.target.value)

        // console.log(e.target.value);
        // this.state.inputValue=e.target.value;
        this.setState({
            inputValue: e.target.value+e.target.index
        })
    }
}
export default Xiaojiejie;