import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import VolunteerCollection from '../VolunteerCollection/VolunteerCollection';
import FACKDATA from '../../data/fackData';

const Home = () => {
    const [volunteer, setVolunteer] = useState(FACKDATA);
    

    return (
        <div className='container my-5'>
            <h2 className='text-center mt-3'>I GROW BY HELPING PEOPLE IN NEED.</h2>
            <div className="row">
                <div className="col-md-4 m-auto" >
                    <InputGroup className="my-4">
                        <Form.Control placeholder="Search.." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <InputGroup.Text id="basic-addon2" className='btn btn-primary '>Search</InputGroup.Text>
                    </InputGroup>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {volunteer.map(vlt => <VolunteerCollection volunteer={vlt} key={vlt.id} />)}
            </div>
        </div>
    );
};

export default Home;