//OBJETIVO: Quando clicarmos na ABA temos que mostrar o conteúdo da ABA que foi clicada pelo usuário e esconder o conteúdo da ABA anterior;

//passo 1: pegar os elementos que representam as abas no HTML:
const tabs = document.querySelectorAll(".tab");
//passo 2: identificar o clique no elemento da aba:
tabs.forEach(tab => {
    tab.addEventListener("click", function(){
        if(tab.classList.contains("selected")){
            return
        }
        //passo 3: quando o usuario clicar, desmarcar a aba selecionada: 
        const tabSelected = document.querySelector(".tab.selected");
        tabSelected.classList.remove("selected")
        //passo 4: marcar a aba clicada como selecionada:
        tab.classList.add("selected")
        //passo 5: esconder o conteudo anterior:
        const infoSelected = document.querySelector(".info.selected")
        infoSelected.classList.remove("selected")
        //passo 6: mostrar o conteudo da aba selecionada:
        const idDoElementoDeInfoDaAba = `info-${tab.id}`
        const infoAserMostrada = document.getElementById(idDoElementoDeInfoDaAba)
        infoAserMostrada.classList.add("selected")
    });
});

