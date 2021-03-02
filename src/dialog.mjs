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
            menu: { type: String }
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
         
           const menu = document.getElementById(this.menu);
           const logoutBtn=document.createElement("button");
           logoutBtn.innerText="Logout"
           logoutBtn.classList.add("logout");
           menu.addItem(logoutBtn)
           logoutBtn.addEventListener("click", (e) => {
               window.location.assign(window.location.href)
           });
      
        })
     
    }
}

customElements.define("login-dialog", LoginDialog);

