import React from 'react';

export default function Header({children, title}) {
    return (
        <header>
            <h1> { children } </h1>
            <h2> { title } </h2>
        </header>
    );
}
