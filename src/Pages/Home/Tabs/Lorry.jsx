import React from 'react';

const Lorry = ({lorries}) => {
    const threeLories = lorries.slice(0, 3);
    console.log(threeLories)
    return (
        <div>
            {
                threeLories?.map(lorry => <>
                {lorry?.toyName} <br />
                </>)
            }
        </div>
    );
};

export default Lorry;