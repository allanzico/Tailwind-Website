import '../src/styles.css';
import Vue from 'vue';


new Vue({
    el: '#navigation',
    data: {
        isOpen: false,

    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }


})