export enum UserProfile {
    "username" = "username",
    "email" = "email",
    "phone" = "phone",
}

class UserCard extends HTMLElement{

    name?: string;
    email?: string;
    phone?: number;

    static get observedAttributes() {

    const UserP: Record<UserProfile, null> = {
        username: null,
        email: null,
        phone: null,

    }

    return Object.keys(UserP)
}

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: UserProfile, _:string, newValue:string,){
        switch(propName){
            case UserProfile.username:
                this.phone = newValue ? Number(newValue): undefined;
                break;

            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <div>
            <h1>${this.name}</h1>
            <p>${this.email}</p>
            <p>${this.phone}</p>
            </div>
            `
        }
    }
}