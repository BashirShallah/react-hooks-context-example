import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

export default function Header(){
    const themeContext = useContext(ThemeContext);

    let style = {};

    if(themeContext.theme === 'dark'){
        style = {
            background:'blue',
            color: '#fff'
        }
    } else {
        style = {
            background:'#fff',
            color: 'blue'
        }
    }

    return (
        <div style={style}>
            Header
            <hr />
        </div>
    );
}
