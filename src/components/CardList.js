import React from 'react';
import Card from './Card';

function CardList ({ robots }) {
    return (
        robots.map((user, i) => {
            return (
                <Card 
                    key={robots[i].id} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} 
                />
            ) 
         })
    )
}

export default CardList;