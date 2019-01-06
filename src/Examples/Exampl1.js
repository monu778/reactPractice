import React from 'react';
import './Exampl1.css'
import Radium from 'radium';
const example1 = (props) => {
    const style = {
        '@media (min-width:500px)':{
            width:'450px'
        }
    }

    return (
        <div className='class1' style={style} onClick={props.click}>
            <p> First Example Rendering through {props.name} </p>

            <p onClick={props.click}> </p>
            <p> {props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    )
}

export default  Radium(example1);

/*
Each component needs to return/ render some JSX code - it defines which HTML code React should render to
the real DOM in the end.

JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though
(for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript,
allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:

Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later
in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is
recommended but optional)
class-based components (also referred to as "containers", "smart" or "stateful" components) =>
class Cmp extends Component { render () { return <div>some JSX</div> } }

create-react-app: https://github.com/facebookincubator/create-react-app
Introducing JSX: https://reactjs.org/docs/introducing-jsx.html
Rendering Elements: https://reactjs.org/docs/rendering-elements.html
Components & Props: https://reactjs.org/docs/components-and-props.html
Listenable Events: https://reactjs.org/docs/events.html
 */