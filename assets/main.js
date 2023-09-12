/* Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus: 1- al click su una thumb, visualizzare in grande l'immagine corrispondente 2- applicare l'autoplay allo slider:
 ogni 3 secondi, cambia immagine automaticamente 3- quando il mouse va in hover sullo slider,
 bloccare l'autoplay e farlo riprendere quando esce. */

 const { createApp } = Vue;

createApp({
    data() {
        return {
            activeImage: 0,
            slides: [
                {
                    image: './assets/img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Spider-Man è un film di genere azione del 2002, diretto da Sam Raimi, con Tobey Maguire e Willem Dafoe. Uscita al cinema il 07 giugno 2002. Durata 121 minuti. Distribuito da Columbia Tristar',
                }, {
                    image: './assets/img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Ratchet & Clank è una serie di videogiochi platform-adventure sviluppati da Insomniac Games e pubblicati da Sony Computer Entertainment. Al 2021 la serie conta nove capitoli principali, tra cui la saga principale dall originale per PS2 a quella Future e dei Lombax',
                }, {
                    image: './assets/img/03.webp',
                    title: 'Fortnite',
                    text: "Fortnite è un videogioco sparatutto in terza persona del 2017, sviluppato da People Can Fly e pubblicato da Epic Games per console e PC. Il gioco presenta tre modalità distinte che condividono lo stesso motore grafico: Salva il mondo, Modalità creativa e Battaglia reale",
                }, {
                    image: './assets/img/04.webp',
                    title: 'Stray',
                    text: 'Stray è un gioco di azione e avventura in cui il giocatore assume il personaggio in terza persona di un gatto randagio che si imbatte in una misteriosa città murata1. Il gioco è ambientato in una città cibernetica decadente e illuminata al neon',
                }, {
                    image: './assets/img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Gli Avengers sono un immaginario team di supereroi, protagonisti nel media franchise del Marvel Cinematic Universe (MCU), basati sull omonima squadra della Marvel Comics creata da Stan Lee e Jack Kirby nel 1963. Fondato da Nick Fury, direttore dello S.H.I.E.L.D.',
                }
            ]
        };
    },

    methods:{
        nextImage() {
            this.activeImage++;
            if(this.activeImage > this.slides.length - 1) {
                this.activeImage = 0;
            }
        },
        prevImage() {
            this.activeImage--;
            if(this.activeImage < 0) {
                this.activeImage = this.slides.length - 1;
            }
        },
    

    viewThumb (item) {

      this.activeImage = this.slides.indexOf(item)

    }
    
    } 
}).mount('#app');