class Footer extends HTMLElement{

    //Primeiro a executar ao chamar a classe
    constructor(){

        //Chamada ao construtor que ele esta herdando
        super();

        //Definição, configuração do constructor
        const shadow = this.attachShadow({mode:"open"})
        shadow.innerHTML = "<h1>API RIOT - VALORANT</h1>"
    }
}