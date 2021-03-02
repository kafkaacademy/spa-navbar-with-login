import { LitElement, html, css } from 'lit-element';

export class LoginDialog extends LitElement {
    static get styles() {
        return css`
        dialog{
            background-color: lightgrey;
            font-size: 30px
          } 

          button{              
            font-size: 30px
          }
          .help{
            font-size: 18px         
          }
       `;
    }

    constructor() {
        super();
        this.title = undefined;
    }

    static get properties() {
        return {
            title: { type: String },
            menu: { type: Object }
        };
    }

    render() {
        return html`
        <dialog open>
            <div>
            <p>${this.title}</p>
            <button>Login</button>
            <br>
            <p class="help">After login, logout button comes on the right side
            </p>
            </div>
           
        </dialog>
        ` 
    }

    firstUpdated(){
        const dialog =  this.shadowRoot.querySelector("dialog")
        const loginButton = this.shadowRoot.querySelector("button");
          
        loginButton.addEventListener("click", (e) => {
           dialog.close();
           if (this.menu==null){
             console.error("menu not added to login-dialog")
             return;
           }
           
           loginButton.innerText="Logout"
           loginButton.classList.add("logout");
           this.menu.addItem(loginButton)
           loginButton.addEventListener("click", (e) => {
               window.location.assign(window.location.href)
           });      
        })     
    }
}

customElements.define("login-dialog", LoginDialog);
