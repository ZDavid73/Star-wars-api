class Button extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback(){
        this.render()
    }

    render() {
        if(this.shadowRoot)
            this.shadowRoot.innerHTML = ``
        }
        

    
}

customElements.define('App-Button', Button)