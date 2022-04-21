const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text"),
        mainct = body.querySelector(".main-ct"),
        midias = body.querySelector(".midias");
var midias2 = document.querySelector(".open-midias");
var icons = document.querySelectorAll(".icons-midia");



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
        
   

        
        midias2.addEventListener("click", ()=>{

            if(icons[0].classList[1] == ("js-hide-share")){
                for(var i = 0; i < icons.length; i++){
                    icons[i].classList.remove("js-hide-share")
                    icons[i].classList.add("js-display-share")
                    
                }
            }else if(icons[0].classList[1] == ("js-display-share")){
                for(var i = 0; i < icons.length; i++){
                    icons[i].classList.remove("js-display-share")
                    icons[i].classList.add("js-hide-share")
                }
            }
           
        })



