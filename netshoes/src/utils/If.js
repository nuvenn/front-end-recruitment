import React from 'react'

export default props => {
    if(props.test){
        return null
    } else {
        return props.children
    }
}