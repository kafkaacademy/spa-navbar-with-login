import { LitElement, html, css } from 'lit-element';

export class LoginDialog extends LitElement {
    static get styles() {
        return css`
        dialog{
            background-color: lightgrey;
            font-size: 30px
          } 

          #loginButton{
              
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
            tabMenu: { type: String }
        };
    }

    render() {
        return html`
        <dialog id="dialog" open>
            <div>
            <p>${this.title}</p>
            <button id="loginButton">Login</button>
            <br>
            <p class="help">After login, logout button comes on the right side
            </p>
            </div>
           
        </dialog>
        ` 
    }

    firstUpdated(){
        const dialog = this.shadowRoot.getElementById("dialog");
        const loginButton = this.shadowRoot.getElementById("loginButton");
        loginButton.addEventListener("click", (e) => {
           dialog.close();
           const menu = document.getElementById(this.tabMenu);
           const logoutBtn=document.createElement("button");
           logoutBtn.innerText="Logout"
           logoutBtn.classList.add("logout");
           menu.appendChild(logoutBtn)
      
        })
     
    }
}

customElements.define("login-dialog", LoginDialog);

