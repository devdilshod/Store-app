import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const themes = {
    winter: "winter",
    dracula: "dracula"
}

const getThemeFromLocalStrorage = () => {
    const theme = localStorage.getItem("theme") || themes.winter;
    document.documentElement.setAttribute("data-theme", theme);
    return theme
}

const initialState = {
    user: null, 
    theme: getThemeFromLocalStrorage()
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log("login user");
        },
        logoutUser: (state) => {
           state.user=null;
           
           localStorage.removeItem("user");
           toast.success("Logged out successfully")
        },
        toggleTheme: (state) => {
            const { dracula, winter } = themes;
            state.theme = state.theme === dracula ? winter : dracula;
            document.documentElement.setAttribute("data-theme", state.theme );
            localStorage.setItem("theme",state.theme)
        }
    }
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;