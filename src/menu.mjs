import { LitElement, html, css } from 'lit-element';

export class Menu extends LitElement {

    constructor() {
        super();
    }

    static get properties() {
        return {
            items: {type: Array}
        };
    }

    static get styles() {
        return css`
        body {font-family: Arial;}

/* Style the tab */
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

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

.tab .logout{
    position: absolute;
    right: 0;
 }
      
       `;
    }
  


    render() {
  // alert(this.items.length)
 // const its= JSON.parse(this.items);
 //${this.items.map(item => html` <button class="tablinks" @click=${(event)=>this.click(event,item)}>${item}</button>`)}
     

        return html`
        <div class="tab">
            ${this.items.map(item => html` <button class="tablinks"  @click=${(event)=>this.click(event,item)}>${item}</button>`)}
        </div>
        ` 
    }

    click(event,item){
        alert("click event "+item)
    }

  
}

customElements.define("spa-menu", Menu);

