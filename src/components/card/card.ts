import styles from "./card.css"

export enum AttributeCard{
    "name" = "name",
    "birth_year" = "birth_year",
    "gender" = "gender",
    "height" = "height",
    "mass" = "mass",
}

export default class Card extends HTMLElement {

    name?: string;
    birth_year?: string;
    gender?: string;
    height?: string;
    mass?: string;

    static get observedAttributes() {

        const attrs: Record< AttributeCard, null> = {
            birth_year: null,
            name: null,
            gender: null,
            height: null,
            mass: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback(){
        this.render()
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += `
                <section class="card">
                    <div class="info">
                        <h1>Name: ${this.name}</h1>
                        <p class="text">Height: ${this.height}</p>
                        <p class="text">Gender: ${this.gender}</p>
                        <p class="text">Birth Year: ${this.birth_year}</p>
                        <p class="text">mass: ${this.mass}</p>
                    </div>
                </section>
            
            `
        }
    
}
}

customElements.define('app-card', Card)
