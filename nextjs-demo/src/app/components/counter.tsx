"use client";

import React, { useState } from "react";

function Counter() {
    const [c, setCount] = useState(0);

    function handleClick() {
        setCount(c + 1);
        console.log("Counter component");
    }

    return (
        <button onClick={handleClick}>
            Clicked {c} times
        </button>
    );
}

export default Counter;  