const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text"),
        midias = body.querySelector(".midias");



        toggle.addEventListener("click", () =>{
            sidebar.classList.toggle("close")
            toggle.classList.toggle("rotate")
        })

        
        modeSwitch.addEventListener("click", () =>{
            body.classList.toggle("dark")
        })
        