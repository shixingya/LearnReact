import React, { Component } from 'react'
import XiaojiejieItem from './XiaojiejieItem' 
import Boss from './Boss';
 
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'shixngya',
            list: ['捶背', '推荐股票','还花呗','还房贷','拉活儿']
        }
    }
    render() {
        return (

            <div> 
                <Boss/>
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
                                <XiaojiejieItem 
                                avname="汪导"
                                key={index+item}  
                                content={item}
                                index={index} 
                                deleteItem={this.deleteItem.bind(this)}
                                />
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
            inputValue: e.target.value
        })
    }
}
export default Xiaojiejie;