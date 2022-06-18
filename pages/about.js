import React, { useEffect, useState } from 'react';



const About = () => {
    const pos = {
        x: 0,
        y: 0
    }
    const [cursor, setCursor] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        console.log(cursor)
    }, [cursor])


    useEffect(() => {
        window.pos = pos;
        window.cursor = cursor;
        window.addEventListener('click', (e) => {
            setCursor({
                x: e.clientX,
                y: e.clientY
            })
            console.log('clicked')
        })
    }, []);



    return (
        <div>
            <h1>About</h1>
            <div>{cursor.x}:{cursor.y}</div>
        </div>
    );
}

export default About;
