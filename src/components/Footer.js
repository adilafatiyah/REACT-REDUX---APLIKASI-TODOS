import React from 'react';

//return button filter
const Footer = ({filter}) => (
    <div>
        <span>Filter:</span>
        <span onClick= {() => filter('ALL')}> ALL</span>
        <span onClick= {() => filter('COMPLETED')}> Completed</span>
        <span onClick= {() => filter('ACTIVE')}> Active</span>
    </div>
)

export default Footer
