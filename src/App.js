import './App.css';
import {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Message from './Message';
// import {Button} from '@material-ui/core'
import {db} from './firebase';
import firebase from 'firebase'
function App() {
  const [input, setInput] = useState(''); // to Take The Message From The input Faild
  const [messages, setMessages] = useState ([ ]);    // This To Save Our Messsage via input

  
  const [username, setUsername] = useState([]);
  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(()=>{
   db.collection('message').onSnapshot(snapshot => {
     setMessages(snapshot.docs.map(doc => doc.data()
    //   (
    //  {
    //     username: doc.data().username,
    //     messages: doc.data().message
    // } )
    ))
   });
  },[])
  useEffect(()=>
   // const username = prompt('Please Enter User Name');
   setUsername(prompt('Please Enter User Name'))
  ,[])
  console.log(input);
  console.log(messages)
  // Our Function Which will take the message From input faild
  const sentMessage = (event) =>{
    event.preventDefault();
  //setMessages([...messages, input]);
  db.collection('message').add({
    message: input,
    username: username
    // timestamp: firebase.firestore.FiledValue.serverTimestamp()
  })
  //   setMessages([...messages, {username:username , text:input}])
  //  setInput(''); { messages State: username State , messages State: input State }
  }
  return (
    <div className="App">
     <h2>Hello AH M ED 👀</h2>
     <form>
          <FormControl>
              <InputLabel >📩Enter a message...</InputLabel>
              <Input value={input} onChange={event=> setInput(event.target.value)}/>
              <Button type='submit' color="primary" variant="contained" disabled={!input} onClick={sentMessage}> Sent Message</Button>
          </FormControl>
        {/* //   <input  value={input} onChange={event => setInput(event.target.value)}/> */}
          
     </form>
     
     {/* To Print The Message On Screen */}
     {
       messages.map(message =>(
         //<Message username={message.username} text={message.text}/>
          <Message username={username} message={message} />
         // <h1>{message}</h1>
       ))
     }
     {/* input field */}
     {/* button */}

     {/* message themselves */}
    </div>
  );
}

export default App;
