import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div style={{
            height: "calc((100vh - 50px))",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1>Woah...</h1>
            <p>Sorry, it seems the page you were looking for doesn't exist</p>
            <NavLink className="c-t-a c-t-a-ghost" to="/">Go Home</NavLink>
        </div>
    )
}
