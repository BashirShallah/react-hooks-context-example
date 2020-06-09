import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

export default function ToggleTheme(){
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            Current Theme: {themeContext.theme}
            <br />
            <button onClick={themeContext.toggleTheme}>
                ToggleTheme
            </button>
        </div>
    );
}
