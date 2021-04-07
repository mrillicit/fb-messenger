import { Card, forwardRef } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './Message.css'

const Message = forwardRef(({username, message}, ref) => {

    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message__card ${isUser && 'message__user'}`} >
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography 
                    color="textSecondary" 
                    variant="h5"
                    component="h2">
                    {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
            
    )
})

export default Message
