import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div className='article-container'>
            <div>
                <a className='article-1' href="https://reactjs.org/"><b>How React Works</b></a>
                <p>
                React is an open-source JavaScript library that is used for building user interfaces specifically to make a single-page application. Used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React is declarative. This is an important property. Also, component-based, supports server-side, supports mobile support, React is extensible. React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.
                </p>
            </div>
            <div>
                <a className='article-1' href="https://reactjs.org/"><b>Differrence between props and state</b> </a>
                <p>
                Props are like function arguments in javaScript and attribute in HTML. We can easily pass arguments through props into React components. We can define props as property too. We can pass functions, arrays, and objects too. The state is a kind of built-in object. State object where we can store property values that belongs to the component. When the state object changes, the component re-renders.Then I get the updated value from this. state. Though props and this. state. are plain JS objects.
                </p>
             </div>
             </div>
    );
};

export default Article;