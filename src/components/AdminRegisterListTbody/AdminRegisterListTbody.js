import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AdminRegisterListTbody = ({ user, handleAlert }) => {

    const handleDeleteVolunteerList = (deleteduser) => {
        const id = deleteduser._id;
        fetch(`http://localhost:5000/deleteListByAdmin/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deleteduser)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    handleAlert()
                }
            })
    }

    return (
        <tr><td>{user.name}</td><td>{user.email}</td><td>{user.data.date}</td><td>{user.adminVolunteerListName}</td><td><FontAwesomeIcon onClick={() => handleDeleteVolunteerList(user)} style={{ color: 'red', cursor: 'pointer' }} icon={faTrash} /></td></tr>
    );
};

export default AdminRegisterListTbody;