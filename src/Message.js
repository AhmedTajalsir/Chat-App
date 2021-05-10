import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import './Message.css'
function Message({username, message}) {
    return (
        <div>
           <Card className="message__card">
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                     {message.username} : {message.message}
                    </Typography>
                </CardContent>

           </Card>
            {/* <h2>{props.username} : {props.text}</h2> */}
        </div>
    )
}

export default Message
