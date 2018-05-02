import React from 'react'
import ReactDOM from 'react-dom'

//const MyComponent = () => <h1>Hello World</h1>
//ReactDOM.render(<MyComponent />, document.getElementById('react-container'))

class Hello extends React.Component {
    render() {
        return (
            <div id="fancy">
            <h1 className="heading">Hello World</h1>
        </div>
    )
    }
}

ReactDOM.render(
<Hello/>,
    document.getElementById('react-container')
)