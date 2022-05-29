var body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text"),
        icons = body.querySelectorAll(".icons-midia");

        // menu toggle


        sidebar.classList.add(localStorage.nav)
        toggle.addEventListener("click", () =>{
            sidebar.classList.toggle("close");
            toggle.classList.toggle("rotate");

            if(sidebar.classList.contains("close")){
                localStorage.setItem("nav", "close")
                sidebar.classList.remove("open")

            }else{
                localStorage.setItem("nav", "open")
            }

        })

       


        body.classList.add(localStorage.mode)
        // dark mode
        modeSwitch.addEventListener("click", () =>{
            
            body.classList.toggle("dark");

            if(body.classList.contains("dark")){
                modeText.innerText = "Light Mode" 
                localStorage.setItem("mode", "dark")

                              
            }else{
                modeText.innerText = "Dark Mode"   
                localStorage.setItem("mode", "light")
            }

        })

        // social midia

        var midias = body.querySelector(".open-midias");
        // midias display/hidden
        midias.addEventListener("click", ()=>{

            for(var i = 0; i < icons.length; i++){
                if(icons[i]){
                    icons[i].classList.toggle("js-hide-share" || "js-display-share")
                }
            }
           
        })

        // mensagem exclusão de mensagem
        var trash = document.querySelectorAll(".bx-trash"),
         secao = document.querySelectorAll(".msgct");
         secaoMsgs = document.querySelector("#maincontentwp");
        
        secao.forEach(function(e,i, arr){
            // no forEach o primeiro valor passado por parametro é o próprio elemento daquele array no momento que esta passando pelo loop!
            // Ou seja e.addEventListener ele já esta pegando  o elemento do indice clicado
            e.addEventListener("click", function(objectEvent) {
                if(objectEvent.target === trash[i]){
                    this.remove()
                }         
                
                if(secaoMsgs.textContent == "\n                    \n                    \n                    \n                    \n                    \n                    \n                    \n                    \n                    \n                    \n                   \n                   \n                "){
                    secaoMsgs.textContent = "Você não tem mensagens!"                
                   } // aguardando refatoração
            });
           });

        //iteraction on btns
        const btnInteraction = document.querySelectorAll(".postct_postwp_iconsct--wp")
        var umNumero = 0;
        var somaUm = false;
        btnInteraction.forEach(function(e, i, arr){
            e.addEventListener("click", function(){
                var numeros = arr[i].querySelectorAll("span")
                numero = parseInt(numeros[0].innerHTML) 
                numeros[0].innerHTML = parseInt(numeros[0].innerHTML) + parseInt(somar(umNumero));
                

            })
        })

        // função utilizada para somar +1 ou subtrair -1 aos botões da página comunidade
        function somar(n){
            if(!somaUm){
                somaUm = true;
                n = 1
                return n
            }else if(somaUm){
                somaUm = false;
                n = n - 1 ;
                return n
            }//aguardando refatoração
        }


// Desenvolvido por Roni Athayde XD
        