import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from '@reach/router'
import AdoptButton from '../components/AdoptButton'

const PetDetail = (props) => {
    const [thisPet, setThisPet] =useState({})
    const {id} = props
    useEffect(
        () => {
            axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {setThisPet(res.data.pet)
                console.log(thisPet);})
            .catch(err => console.log(err))
        },
        [thisPet.name, thisPet.type, thisPet.description])
    return(
        <div>
            <header className="row bg-white">
                <h1 className='text-left ml-3 my-5'>Pet Shelter</h1>
                <Link to='/' className='text-right text-primary header-link my-4'>back to home</Link>
            </header>
            <h4 className='text-left'>Details about: {thisPet.name}</h4>
            <AdoptButton record={thisPet} records={props.pets} setRecords={props.setPets} petName={thisPet.name}/>
            <div className='border border-dark'>
                <ul className='list-unstyled p-5'>
                    <li className='pet-detail-item'><b>Pet Type:</b> {thisPet.type}</li>
                    <li className='pet-detail-item'><b>Description:</b> {thisPet.description}</li>
                    <ul className='list-unstyled'><b>Skills:</b>
                        {thisPet.skills ? <li className='pet-detail-item'>{thisPet.skills[0]}</li> : null}
                        {thisPet.skills ? <li className='pet-detail-item'>{thisPet.skills[1]}</li> : null}
                        {thisPet.skills ? <li className='pet-detail-item'>{thisPet.skills[2]}</li> : null}
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default PetDetail