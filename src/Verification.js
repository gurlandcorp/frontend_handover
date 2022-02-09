import axios from "axios";
import React, { useEffect, useState } from "react";

const Verification = () => {

    const [res, setRes] = useState('')
    useEffect(()=> {
        axios.post(`https://handoverapi.herokuapp.com/signup/verifyemail`, {code: window.location.search.split('code=')[1]})
        .then((response) => setRes(response.data))
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    })

    return (
        <div className="container d-flex flex-wrap justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="text-center">
                <h2> {res!='no data found' && res!='' ? 'Your account is verified!' : 'Your provided link is not valid!'}</h2>
                {/* <br /> */}
                Click <a href={'https://app.thehandover.com'}>here</a> to login your account
            </div>
        </div>
    );
};

export default Verification;
