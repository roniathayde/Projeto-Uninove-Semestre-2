const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text"),
        midias = body.querySelector(".midias");
var midias2 = document.querySelector(".open-midias");
var icons = document.querySelectorAll(".icons-midia");



        toggle.addEventListener("click", () =>{
            sidebar.classList.toggle("close")
            toggle.classList.toggle("rotate")
        })

        
        modeSwitch.addEventListener("click", () =>{
            body.classList.toggle("dark")
        })
        
   

        
        midias2.addEventListener("click", ()=>{

            if(icons[0].classList[1] == ("hide-share")){
                for(var i = 0; i < icons.length; i++){
                    icons[i].classList.remove("hide-share")
                    icons[i].classList.add("display-share")
                    
                }
            }else if(icons[0].classList[1] == ("display-share")){
                for(var i = 0; i < icons.length; i++){
                    icons[i].classList.remove("display-share")
                    icons[i].classList.add("hide-share")
                }
            }
           
        })

        if(icons[0].classList[0] == ("hide-share")){
            
            console.log("funfo")
        }else if(icons[0].classList[0] == ("display-share")){

        };

