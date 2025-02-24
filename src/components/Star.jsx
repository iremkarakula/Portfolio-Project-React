import React from 'react'

function Star({ color }) {
    return (
        <svg viewBox="0 0 1024 1089.841" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M520.258 1056.92H503.76c0-134.61-50.306-252.21-150.918-352.824S134.628 553.178 0 553.178V536.68c134.628 0 252.23-50.306 352.842-151.145C453.454 284.677 503.76 167.075 503.76 32.938h16.498c0 134.61 50.306 252.21 150.918 352.824S889.39 536.68 1024 536.68v16.498c-134.61 0-252.21 50.306-352.824 150.918S520.258 922.31 520.258 1056.92z"
                fill={color} />
        </svg>
    )
}

export default Star