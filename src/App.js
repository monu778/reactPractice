import React, { Component } from 'react';
import logo from './logo.svg';
import Radium,{StyleRoot} from 'radium';

import Example from './Examples/Exampl1';
import './App.css';

class App extends Component {
    state = {
        persons:[
            {   id:1,
                name:'sravan',
                age:37
            },
            {
                id:2,
                name:'reddy',
                age:37
            }
        ],
        showPersons:false,
        persons1:[
            {
                name:'sravan1',
                age:37
            },
            {
                name:'reddy1',
                age:37
            }
        ],
    }


   switchNameHandler = (newName) => {
        console.log("Was Clikced");
       this.setState({
           persons1:[
               {name:'Xyz',age:37},
               {name:newName,age:24}
           ]
       })
   }

    nameChangeHandler = (event,id) => {
        console.log("Was Clikced");
        const personIndex = this.state.persons.findIndex(p=>{
            return p.id === id;
        })
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons:persons
        })
    }
   toggleHandler = () => {
        const doesShow = this.state.showPersons;

        this.setState(
            {
                showPersons:!doesShow
            }
        )
   }

    nameChangeHandler1 = (event) => {
        this.setState({
            persons1:[
                {name:event.target.value,age:37},
                {name:'ABC',age:24}
            ]
        })
    }

    deleteHandler = (personIndex) =>{
     //   const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1)
        console.log("dd")
        this.setState({
            persons:persons
        })

    }
  render() {
        const style = {
            backgroundColor:'white',
            font:'inherit',
            border:'1px solid blue',
            padding:'8px',
            cursor:'pointer',
            ':hover':{
                backgroundColor:'lightgreen',
                color:'black'
            }
        }

        const classes = [];
        if(this.state.persons.length <=2) {
            classes.push('red');

        } else if(this.state.persons.length <= 1) {
            classes.push('bold');
        }

        let examples = "";

        if(this.state.showPersons ) {
            examples = (
                <div>
                    {this.state.persons.map((person,i) =>{
                        return <Example name={person.name} age={person.age} click1={() => this.deleteHandler(i)} key={person.id} changed={(event) =>
                        this.nameChangeHandler(event,person.id)} />


                    })}


                </div>
            )
            style.backgroundColor='red';
        }
      /* same style hover applied to only to single button with radium */
    return (
        <StyleRoot>
      <div className="App">
          <h1> First React App:</h1>
          <p className={classes.join(' ')}> This is really working!</p>

          <button style={style} onClick={this.toggleHandler}>Show Examples</button>
          <button  onClick={this.switchNameHandler.bind(this,"SravanReddy")}>Switch Handler with bind</button>
          <button   onClick={() => this.switchNameHandler("SravanReddy12")}>Switch Handler with Function</button>
          {
              this.state.showPersons === true?
              <div>
          <Example name={this.state.persons1[0].name}
                   age={this.state.persons1[0].age} change={this.nameChangeHandler1} key="11">THis is a props childeren text</Example>
          <Example name={this.state.persons1[1].name}
                   age={this.state.persons1[1].age} click={this.switchNameHandler.bind(this,"Sravan!")} key="12">THis is a props childeren text</Example>

          </div>:null
          }

          {examples}
      </div>
        </StyleRoot>

    );

   // React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi,I\'m React App!!!'))

  }
}

export default Radium(App);
/*


Conditional Rendering: https://reactjs.org/docs/conditional-rendering.html
Lists & Keys: https://reactjs.org/docs/lists-and-keys.html
Course Content

Search course content
Section: 1
10 / 11
Getting Started
Section: 2
10 / 13
Refreshing Next Generation JavaScript (Optional)
Section: 3
19 / 25
Understanding the Base Features & Syntax
25. Module Introduction
0:38
26. The Build Workflow
8:00
27. Using Create React App
5:22
28. Understanding the Folder Structure
8:11
ide-setup.pdf
29. Understanding Component Basics
5:32
components-learning-card.pdf
30. Understanding JSX
5:38
31. JSX Restrictions
3:09
32. Creating a Functional Component
8:09
33. Components & JSX Cheat Sheet
components.pdf
34. Working with Components & Re-Using Them
1:47
35. Outputting Dynamic Content
3:02
36. Working with Props
4:07
props-learning-card.pdf
37. Understanding the Children Property
2:56
base-syntax--01-props-custom-cmp.zip
38. Understanding & Using State
6:53
39. Props & State
props&state.pdf
40. Handling Events with Methods
3:45
41. To Which Events Can You Listen?
42. Manipulating the State
4:56
state-learning-card.pdf
43. Functional (Stateless) vs class (Stateful) Components
3:33
44. Passing Method References Between Components
7:05
base-syntax--02-state-events.zip
45. Adding Two Way Binding
6:51
46. Adding Styling with Stylesheets
5:28
47. Working with Inline Styles
4:15
Assignment 1: Time to Practice - The Base Syntax
48. Useful Resources & Links
base-syntax--01-props-custom-cmp.zip
base-syntax--02-state-events.zip
base-syntax--03-finished.zip
base-syntax--assignment-solution.zip
Section: 4
0 / 12
Working with Lists and Conditionals
Section: 5
0 / 12
Styling React Components & Elements
Section: 6
0 / 7
Debugging React Apps
Section: 7
0 / 31
Diving Deeper into Components & React Internals
Section: 8
0 / 40
A Real App: The Burger Builder (Basic Version)
Section: 9
0 / 18
Reaching out to the Web (Http / Ajax)
Section: 10
0 / 10
Burger Builder Project: Accessing a Server
Section: 11
0 / 34
Multi-Page-Feeling in a Single-Page-App: Routing
Section: 12
0 / 14
Adding Routing to our Burger Project
Section: 13
0 / 17
Forms and Form Validation
Section: 14
0 / 23
Redux
Section: 15
0 / 10
Adding Redux to our Project
Section: 16
0 / 16
Redux Advanced
Section: 17
0 / 22
Redux Advanced: Burger Project
Section: 18
0 / 22
Adding Authentication to our Burger Project
Section: 19
0 / 9
Improving our Burger Project
Section: 20
0 / 12
Testing
Section: 21
0 / 6
Deploying the App to the Web
Section: 22
0 / 20
Bonus: Working with Webpack
Section: 23
0 / 10
Bonus: Next.js
Section: 24
0 / 16
Bonus: Animations in React Apps
Section: 25
0 / 13
Bonus: A Brief Introduction to Redux Saga
Section: 26
0 / 24
React Hooks
Section: 27
0 / 1
Bonus: Building the Burger CSS
Section: 28
0 / 9
Next Steps and Course Roundup
To Which Events Can You Listen?
Section 3, Lecture 41
In the last lecture, we saw that you can react to the onClick event - but to which other events can you listen? You can find a list of supported events here: https://reactjs.org/docs/events.html#supported-events

Clipboard Events
Event names:

onCopy onCut onPaste
Properties:

DOMDataTransfer clipboardData
Composition Events

Event names:

onCompositionEnd onCompositionStart onCompositionUpdate
Properties:

string data
Keyboard Events

Event names:

onKeyDown onKeyPress onKeyUp
Properties:

boolean altKey
number charCode
boolean ctrlKey
boolean getModifierState(key)
string key
number keyCode
string locale
number location
boolean metaKey
boolean repeat
boolean shiftKey
number which
Focus Events

Event names:

onFocus onBlur
These focus events work on all elements in the React DOM, not just form elements.

Properties:

DOMEventTarget relatedTarget
Form Events

Event names:

onChange onInput onInvalid onSubmit
For more information about the onChange event, see Forms.

Mouse Events

Event names:

onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
The onMouseEnter and onMouseLeave events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.

Properties:

boolean altKey
number button
number buttons
number clientX
number clientY
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
number pageX
number pageY
DOMEventTarget relatedTarget
number screenX
number screenY
boolean shiftKey
Selection Events

Event names:

onSelect
Touch Events

Event names:

onTouchCancel onTouchEnd onTouchMove onTouchStart
Properties:

boolean altKey
DOMTouchList changedTouches
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
boolean shiftKey
DOMTouchList targetTouches
DOMTouchList touches
UI Events

Event names:

onScroll
Properties:

number detail
DOMAbstractView view
Wheel Events

Event names:

onWheel
Properties:

number deltaMode
number deltaX
number deltaY
number deltaZ
Media Events

Event names:

onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting
Image Events

Event names:

onLoad onError
Animation Events

Event names:

onAnimationStart onAnimationEnd onAnimationIteration
Properties:

string animationName
string pseudoElement
float elapsedTime
Transition Events

Event names:

onTransitionEnd
Properties:

string propertyName
string pseudoElement
float elapsedTime
Other Events

Event names:

onToggle
 */