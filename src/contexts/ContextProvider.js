import React, {createContext,useContext,useState} from "react";

const StateContext = createContext();

const initialState = {
    chat : false,
    cart : false,
    userProfile : false,
    notification : false
}

export const ContextProvider = ( {children}) =>{
    const [activeMenu,setActiveMenu] = useState(true);

    const [isClicked,setIsClicked] = useState(initialState);    

    const [screenSize, setScreenSize] = useState(undefined);

    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light');

     const [ThemeSettings, setThemeSettings] = useState(false); 

    const setMode = (e) =>{
        setCurrentMode(e.target.value);
         localStorage.setItem('themeMode',e.target.value);
    }
    
        const setColor = (e) =>{
        setCurrentColor(e.target.value);
         localStorage.setItem('colorMode',e.target.value);
    }
    
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:true}); 
    }
    return (
        <StateContext.Provider value={ {
            activeMenu, 
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            setScreenSize,
            screenSize,
            currentColor,setCurrentColor,
            currentMode, setCurrentMode,
            ThemeSettings, setThemeSettings
        }}>
             {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);