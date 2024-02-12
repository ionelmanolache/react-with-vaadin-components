import * as React from 'react'
import '@vaadin/button';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'vaadin-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
        }
    }
}

export const MyButton = () => {
    const onclick = () => {
        alert("It works!")
    }
    return (
        <>
            <vaadin-button onClick={onclick}>Click me</vaadin-button>
        </>
    )
}