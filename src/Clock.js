import React from 'react'

function Clock({locale}) {
    return (
        <div>
            Hello {new Date().toLocaleTimeString(locale)}
        </div>
    )
}

export default Clock;
