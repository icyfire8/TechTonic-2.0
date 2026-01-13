// TODO 1: Select the toggle button from the DOM

// TODO 2: Decide a key name to store theme preference in localStorage

// TODO 3: On page load,
//         - Read the saved theme from localStorage
//         - If the theme is "dark", apply it to the document

// TODO 4: Add a click event listener to the toggle button

    // TODO 5: Inside the click handler,
    //         - Check the current theme
    //         - Toggle between light and dark
    //         - Update the DOM (hint: data-theme attribute)
    //         - Save the new preference in localStorage

    let darkmode = localStorage.getItem('darkmode')
    const themeToggle = document.getElementById('theme-toggle')
    const enableDarkmode = () => {
        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode','active')
    }
    const disableDarkmode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode',null)
    }  
    if(darkmode == 'active') enableDarkmode()
    themeToggle.addEventListener("click",()=> 
        {
            darkmode = localStorage.getItem('darkmode')
            darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
        }
    )