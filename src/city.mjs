import { LitElement, html, css } from 'lit-element';

class City extends LitElement {

    static get properties() {
        return {
            id: {type: String},
            text: {type: String}
        };
    }

    render() {
        return html`<h3>${this.id}</h3><p>${this.text}</p>`;
    }
}
customElements.define("my-city", City);