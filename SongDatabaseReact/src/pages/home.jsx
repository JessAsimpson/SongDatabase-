import Modal from 'react-modal';
import { useState } from "react";
import './Modal.css';
import { LoginPage, ArtPanel, LoginPanel, InputBox, LogBtn, LoginSection } from './home-styling';
import { Link } from 'react-router-dom';
import axios from 'axios';
require("dotenv").config();


const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {

    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    // https://thissongdatabase.herokuapp.com/users/register
    // const register = (event) => {
    //     event.preventDefault()
    //     console.log("got here");
    //     axios.post(`${BASE_URL}/users/register`, {
    //         user: { 
    //             email: regUsername,
    //             password: regPassword
    //         }
    //     }).then((response) => {
    //         console.log("response from backend: ", response);
    //     });
    // };


    const register = async (e) => {
        console.log("got here 1");
        e.preventDefault();
        try {
            console.log("got here 2");
            const obj = JSON.stringify(
                {
                    email: regUsername,
                    password: regPassword
                }
            );
            console.log(obj);
            const res = await fetch(`${BASE_URL}/users/register`, {
                mode: "cors",
                method: "post",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: obj
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const login = () => {
        axios.post(`${BASE_URL}/users/login`, {
            user: {
                email: username,
                password: password
            }
        }).then((response) => {
            console.log(response)
        });
    };

    return (
        <div>
            <LoginPage>
                <ArtPanel />      
                <LoginPanel>
                    <LoginSection>
                        <h1>Music to my ears.</h1>
                        <form action="">
                            <InputBox type="text" placeholder="email..." onChange={e => setUsername(e.target.value)} />
                            <InputBox type="password" placeholder="password..." onChange={e => setPassword(e.target.value)} />
                            <Link to={'./user'} >
                                <LogBtn type="submit" onClick={login}> Log in. </LogBtn>
                            </Link>
                        </form>
                        <p>Don't have an account? <span className="signup" onClick={handleShowModal}>Sign up.</span></p>
                    </LoginSection>
                </LoginPanel>
                <Modal 
                    isOpen={showModal}
                    ariaHideApp={false}
                    className="Modal"
                    style={{
                        overlay: {
                            backgroundColor: '#0000007b',
                        }
                    }}
                    >
                        <div className="xDiv">
                            <button onClick={handleHideModal} className="x">×</button>
                        </div>
                        <div>
                            <h4 className="create">Create an account.</h4>
                            <form action="" onSubmit={register}>
                                <InputBox type="text" placeholder="email..." className="inputstyle" onChange={e => setRegUsername(e.target.value)}/>
                                <InputBox type="password" placeholder="password..." className="inputstyle" onChange={e => setRegPassword(e.target.value)}/>
                                <LogBtn type="submit" > Sign up. </LogBtn>
                            </form>
                        </div>
                </Modal>          
            </LoginPage>
        </div>
    )
}

export default Home
