"use client";
import { useState } from "react";

export const Counter = () => {
    console.log("Counter component");
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Counter Component</h2>
        <button onClick={()=>setCount(count+1)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Increment
        </button>
        <span className="text-xl">Count: {count}</span>
        </div>
    );
    }