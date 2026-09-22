
import { useState } from 'react'

function Home(){

    const [user, setUser] = useState('Ram')
    const [count, setCount] = useState(0)


    const myFun = ()=>{
        console.log("Welcome", user, "Ready to rock?")
    }

    const changeUser = () =>{
        if(user == 'Ram'){
            setUser('Lakshman')
        }
        else{
            setUser('Ram')
        }
    }
    

    const Incrementer = ()=>{
        setCount(count+1)
    }

    const Decrementer = () =>{
        if(count === 0){
            return;
        }
        setCount(count-1)
    }

    const submitHandler = (e)=>{
        e.preventDefault();

        const formData = new  FormData(e.target);
        const username = formData.get("username");

        setUser(username);
        console.log("form submitted Succesfully!")

    }


    return  (
    <div>
        <h1> Welcome {user} </h1>
        <h2> new Beginning</h2>

        <div>
            <h1> Counter : {count}</h1>
        </div>
        
        <button onClick = {myFun} > GreetMe </button>
        <button onClick = {changeUser}> ChangeUser</button>
        <button onClick = {Incrementer}> INC+ </button>
        <button onClick = {Decrementer}> DEC- </button>

        <div>
            <form onSubmit={ (e) =>{
                submitHandler(e);
            }}>

                <input placeholder="Enter anything here" />
                
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required placeholder="Enter username" />
                </div>

               
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required placeholder="Enter password"/>
                </div>

               
                <button type="submit">Login</button>
            </form>

        </div>

    </div>
    )
}

export default Home;
