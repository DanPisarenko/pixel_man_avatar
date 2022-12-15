import DanAvatar from "./components/index.js";

if (!customElements.get('dan-avatar')) {
    customElements.define('dan-avatar', DanAvatar);
}