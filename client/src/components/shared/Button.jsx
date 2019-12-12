import React from 'react'

const Button = ({ message, callback }) => {
    return (
        <form onSubmit={callback}>
            <input type="submit" value={message} />
        </form>
    )
}

export default Button