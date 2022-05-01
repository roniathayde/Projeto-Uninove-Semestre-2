const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text"),
        mainct = body.querySelector(".main-ct"),
        midias = body.querySelector(".open-midias"),
        icons = body.querySelectorAll(".icons-midia");

        toggle.addEventListener("click", () =>{
            sidebar.classList.toggle("close");
            toggle.classList.toggle("rotate");

        })
   
        modeSwitch.addEventListener("click", () =>{
            body.classList.toggle("dark");

            if(body.classList.contains("dark")){
                modeText.innerText = "Light Mode"
            }else{
                modeText.innerText = "Dark Mode"
            }
        })
        
        midias.addEventListener("click", ()=>{

            for(var i = 0; i < icons.length; i++){
                if(icons[i]){
                    icons[i].classList.toggle("js-hide-share" || "js-display-share")
                }
            }
           
        })



