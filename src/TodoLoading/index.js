import React from 'react';
import './TodoLoading.css'

function TodoLoading ({error}) {
    return (
       <div className='LoadingTodos-container'>
        <span className= "loadingTodos-completeIcon" ></span>
        <p className='loadingTodos-text'>we are loading...</p>
        <span className= "loadingTodos-deleteIcon" ></span>

       </div>

    );
}


export {TodoLoading};