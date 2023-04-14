import ApiStar from "../service/api";
import Card, {AttributeCard} from "../components/card/card";
import { addObserver, appState, dispatch } from '../store/index';
import { getPeople } from '../store/actions';

export default class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    async connectedCallback(){
        console.log (ApiStar)
        this.render()
        
    }

    render() {
        appState.people.forEach((data: any) => {
            const StarCard = this.ownerDocument.createElement("app-card") as Card;
            StarCard.setAttribute(AttributeCard.name, data.name);
            StarCard.setAttribute(AttributeCard.birth_year, data.birth_year);
            StarCard.setAttribute(AttributeCard.gender, data.gender);
            StarCard.setAttribute(AttributeCard.height, data.height);
            this.shadowRoot?.appendChild(StarCard);
        });
        }
        

    
}

customElements.define('app-dashboard', Dashboard)
