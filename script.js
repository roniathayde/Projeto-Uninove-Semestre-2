const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text"),
        icons = body.querySelectorAll(".icons-midia");

        // menu toggle
        toggle.addEventListener("click", () =>{
            sidebar.classList.toggle("close");
            toggle.classList.toggle("rotate");

        })
        // dark mode
        modeSwitch.addEventListener("click", () =>{
            body.classList.toggle("dark");

            if(body.classList.contains("dark")){
                modeText.innerText = "Light Mode" 
                              
            }else{
                modeText.innerText = "Dark Mode"   
            }

        })

        const midias = body.querySelector(".open-midias");
        // midias display/hidden
        midias.addEventListener("click", ()=>{

            for(var i = 0; i < icons.length; i++){
                if(icons[i]){
                    icons[i].classList.toggle("js-hide-share" || "js-display-share")
                }
            }
           
        })

            // mensagem exclusão de mensagem
        const trash = document.querySelectorAll(".bx-trash");
        const secao = document.querySelectorAll(".msgct");
        const secaoMsgs = document.querySelector("#maincontentwp");
        console.log(secaoMsgs)
        
        secao.forEach(function(e,i, arr){
            // no forEach o primeiro valor passado por parametro é o próprio elemento daquele array no momento que esta passando pelo loop!
            // Ou seja e.addEventListener ele já esta pegando  o elemento do indice clicado
            e.addEventListener("click", function(objectEvent) {
                if(objectEvent.target === trash[i]){
                    this.remove()
                }         
                
                if(secaoMsgs.textContent == "\n                    \n                    \n                    \n                    \n                    \n                    \n                    \n                    \n                    \n                    \n                   \n                   \n                "){
                    secaoMsgs.textContent = "Você não tem mensagens!"                
                   }
            });
           });


        // community
        var textArea = document.querySelector("#textarea");
        var postagem = document.querySelectorAll(".postct");
        var container = document.querySelector("#postagens")
        var btnEnviarTexto = document.querySelector("#subPost");
        var nomePost = document.querySelector(".postct_postwp--nick");
        var iconePost = document.querySelector(".postct_imgct");
        var conteudoPost = document.querySelector(".postct_postwp--content");
        

        //iteraction on btns
        const btnInteraction = document.querySelectorAll(".postct_postwp_iconsct--wp")
        var maisUm = 0;
        btnInteraction.forEach(function(e, i, arr){
            e.addEventListener("click", function(){
                var numeros = arr[i].querySelectorAll("span")
                numero = parseInt(numeros[0].innerHTML) 
                numero += 1;
                numeros[0].innerHTML = numero
            })
        })

        // function somaUm(n){
        //     if(maisUm === 0){
        //         maisUm += 1;
        //         maisUm =  n + maisUm
        //     }else if(maisUm === 1){
        //         maisUm -= 1;
        //         maisUm = n + maisUm
        //     }
        //     return maisUm
        // };
        // novo comentario
