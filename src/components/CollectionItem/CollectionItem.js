import React, { useEffect, useState } from 'react';
import CollectionSingleItem from '../CollectionSingleItem/CollectionSingleItem';

const CollectionItem = ({ user }) => {
    const [volunteer, setVolunteer] = useState([]);
    const { id } = user;
    useEffect(() => {
        fetch(`http://localhost:5000/collectionItem?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setVolunteer(data);
            })
    }, [])



    return (
        <>
            {volunteer.map(item => <CollectionSingleItem  key={item.id} date={user.data.date} volunteer={item} />)}
        </>
    );
};

export default CollectionItem;