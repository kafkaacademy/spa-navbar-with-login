import { LitElement, html, css } from 'lit-element';

export class MenuItem{
    constructor(name,el) {
        this.id = el.id;
        this.name = name;
        this.el = el;
    }
}

export class Menu extends LitElement {

    constructor() {
      super();
      this.items=[]
    }
    static get properties() {
        return {
            items: { type: Array }
        };
    }

    switch(item){
        alert(" switch function not overridden")
    }

    static get styles() {
        return css`
        .tab {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }

        /* Style the buttons inside the tab */
        .tab button {
            background-color: inherit;
            float: left;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
            font-size: 17px;
        }

        /* Change background color of buttons on hover */
        .tab button:hover {
            background-color: #ddd;
        }

        /* Create an active/current tablink class */
        .tab button.active {
            background-color: #ccc;
        }

        .tab .logout{
            position: absolute;
            right: 0;
        }`;
    }

    render() {
        return html`
        <div class="tab">
            ${this.items.map(item => html` <button class="tablinks"  @click=${() => this.switch(item)}>${item.name}</button>`)}
        </div>
        `
    }

    addLogout(logoutButton) {
        logoutButton.innerText="Logout"
        logoutButton.classList.add("logout");     
        const div = this.shadowRoot.querySelector("div")
        div.appendChild(logoutButton)
    }

}

customElements.define("spa-menu", Menu);
