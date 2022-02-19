import React, {useEffect, useState} from "react"; 
import axios from "axios";
import {Link} from "@reach/router"; //navigate

const OneJoke = (props) =>{

    const {id} = props;

    const [joke, setJoke] =useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/jokes/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setJoke(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return(
        <div>
            <header className="header">
            This is the header for the page
            <Link to={"/"}>Back to Home</Link>
            </header>

            <p>Title: {joke.title}</p>
            <p>Punchline: {joke.punchline}</p>

            <p>Information linked to database but not displaying a single joke</p>
            <p>When clicked from AllJokes, items are displayed in the fields</p>


            <Link to={"/jokes/:id"}>
                <button type="button">Hear Another</button>
            </Link>
            <br /><br />

            <Link to={"/new"}>
                <button type="button">Create A Joke</button>
            </Link>

            <Link to="/all">
                <button type="button">See All Jokes</button>
            </Link>

            <p>Hear Another is linked, but need to test, nothing displaying<br />
                Button New and All links to appropriate pages</p><br />
            
            

            <p>Loading One Joke Success</p>
        </div>
    )
}

export default OneJoke;