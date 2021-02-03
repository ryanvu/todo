import React, { useRef } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
//stylesheet

const DetailForm = () => {
    return (
        <div className="detform">
            <form>
                <Input label="First Name"/>
                <Input label="Last Name"/>
                <Button type="submit" text="Submit"/>
            </form>
        </div>
    )
}

//stylesheet

export default DetailForm
