import React from 'react'

export default Button = (props) => {
    return (
        <button {...props} className={'button ' + props.className} />
    )
}
