import React,{Component} from 'react'

class App extends Component
{
    render(){
        return (
            <ul className="my-list">
                <li>{true?'JSPang.com':'技术胖'}</li>
                <li>I love React</li>
            </ul>
        )
    }
}
export default App;