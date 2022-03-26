import React from 'react';
import './Question.css'
import reactImage from '../../images/react.jpg'
import useStateImage from '../../images/usesatae.png'
const Question = () => {
    return (
        <div className='container px-3 questions-container'>
            <h1 className='fw-bolder text-center mb-3'>Question and Answers Section</h1>
            <div className='row mb-3'>
            <div className='col col-sm-12 col-md-6 col-lg-6'>
            <div className='question mb-3'>
            <h1>How React JS Works: </h1>
            <p className='text-justify'>
            React is a JS library that used to create user interfaces like single page application in an efficient way using declarative code. It lets us build complex UIs from small and isolated pieces of code called components. React load data for the site once and then if any update happens in the site, only the targated component will refresh, not the whole website. <br /><br />
            <img className='img-fluid px-3' src={reactImage} alt="" /><br /><br />
            Each time we we update any data in our website react uses an  algorithm called Diff Algorithm to compare the existing DOM with a Virtual DOM which react manages under the hood. After comparison react chages only the components that does not match with the virtual DOM. Each React component is encapsulated and can operate independently. In React there are state that can be changed by the user and the are side effects of the change of state which used to make changes on the UI as the user wants. React always stalks a virtual DOM under the hood and if any data change happens in the DOM, react instantly compares the current DOM with the virtual DOM and updates on the real DOM.
            </p>
            </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='question'>
                <h1>How UseSate Works: </h1>
                <p className='text-justify'>useState is a Hook that allows us to have one or more state variables in functional components. If we pass the initial state to this function and it will return a variable with the current state value and another function to update this value. React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component. It's especially useful for local component state. It returns an array, where the first element is the state variable and the second element is a function to update the value of the variable. <br /><br />
                <img className='img-fluid' src={useStateImage} alt="" /> <br /> <br />
                The second element returned by useState is a function that takes a new value to update the state variable. This function enques the state update operations. Then, after re-rendering the component, the argument of useState will be ignored and this function will return the most recent updated value. State values are immuateble. To update the values we have to merge the new state value with the existing values. That helps React to re-render or run Diff algorithm efficiently.</p>
                </div>
            </div>
            </div>
            <div className='row mb-3'>
                <div  className='col-sm-12 col-md-12 col-lg-12'>
                <div className='question'>
                <h1 className='text-center'>Props Vs State</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati dignissimos rerum veritatis natus asperiores nisi ratione quisquam deleniti. Enim odio culpa at velit explicabo aut facere doloremque architecto tempore fugit a expedita quam harum fugiat rem assumenda ab modi quidem vero, incidunt illo magni. Laboriosam velit repellendus enim voluptatibus consequuntur! Alias fugiat cupiditate reprehenderit animi dolorem perferendis maxime, dicta, est velit ducimus pariatur libero magnam aut culpa fuga quasi facilis ratione odio debitis qui temporibus voluptatem consectetur rerum facere.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Question;