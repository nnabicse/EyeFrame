import React from 'react';
import './Question.css'
import reactImage from '../../images/react.jpg'

const Question = () => {
    return (
        <div className='container px-3 questions-container'>
            <h1 className='fw-bolder text-center mb-3'>Question and Answers Section</h1>
            <div className='row mb-3'>
            <div className='col col-sm-12 col-md-6 col-lg-6'>
            <div className='question'>
            <h1>How React JS Works: </h1>
            <p className='text-justify'>
            React is a JS library that used to create user interfaces like single page application in an efficient way using declarative code. It lets us build complex UIs from small and isolated pieces of code called components. React load data for the site once and then if any update happens in the site, only the targated component will refresh, not the whole website. <br /><br />
            <img className='img-fluid p-3' src={reactImage} alt="" /><br /><br />
            Each time we we update any data in our website react uses an  algorithm called Diff Algorithm to compare the existing DOM with a Virtual DOM which react manages under the hood. After comparison react chages only the components that does not match with the virtual DOM. Each React component is encapsulated and can operate independently. In React there are state that can be changed by the user and the are side effects of the change of state which used to make changes on the UI as the user wants. React always stalks a virtual DOM under the hood and if any data change happens in the DOM, react instantly compares the current DOM with the virtual DOM and updates on the real DOM.
            </p>
            </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <div className='question'>
                <h1>How UseSate Works: </h1>
                <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, sint ullam dolores, deleniti fugiat fugit beatae est, consequuntur temporibus distinctio enim! Facere delectus id dolore voluptate adipisci possimus aliquam repellendus veniam qui necessitatibus hic dicta eveniet doloremque non, quaerat ducimus. In, ab. Voluptates doloremque modi quasi distinctio cum necessitatibus saepe, eos enim labore illo consectetur sapiente. Vitae vel, eaque aliquid necessitatibus ullam dolorem, voluptate rerum voluptas facilis maiores unde accusantium ratione omnis ducimus tempora nobis ipsam. Fugiat nesciunt ipsam nulla.</p>
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