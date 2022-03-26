import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='container px-3 questions-container'>
            <h1 className='fw-bolder text-center mb-3'>Question and Answers Section</h1>
            <div className='row mb-3'>
            <div className='col col-sm-12 col-md-6 col-lg-6'>
            <div className='question'>
            <h1>How React JS Works: </h1>
            <p className='text-justify'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis beatae doloribus, explicabo odit enim illo doloremque perspiciatis hic sit, dolorem suscipit exercitationem recusandae, culpa sequi asperiores architecto voluptates harum temporibus sed! Cum labore fugit ipsa ab, ea laborum, veniam architecto libero nihil, ratione quis beatae possimus optio dolores repellendus perferendis eos hic qui. Ratione molestias quod itaque laborum recusandae quis labore omnis modi architecto nulla dolore veritatis, voluptate fugiat voluptatem, illum quo, dicta nam assumenda! Praesentium similique repudiandae et.
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