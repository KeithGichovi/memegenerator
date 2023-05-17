import React, {useState} from 'react';


function Form() {

    const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true
        }
    );

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData =>{
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }


    return(
        <form>
            <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={formData.firstName}/>
            <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={formData.lastName}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email}/>
            <textarea value={formData.comments} placeholder="Comments" onChange={handleChange} name="comments" />
            <input type="checkbox" id="friendly" checked={formData.isFriendly} name="isFriendly" onChange={handleChange}/><label htmlFor="friendly">Are you friendly?</label>
        </form>
    )


}

export default Form