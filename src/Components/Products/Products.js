import React, { useEffect, useState } from 'react';

const Products = () => {
    const [heroes, setHeroes] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(dta => setHeroes(dta));
    }, [])

    return (
        <div>
            {
                heroes.map(hero => <img src={hero.picture}></img>)
            }
        </div>
    );
};

export default Products;