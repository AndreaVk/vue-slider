const app = new Vue({
    el: '#root',
    data:{
        images:[
        {
            titolo: 'Metin2',
            text:'Un gioco orientale MMORPG',
            image:'img/metin2.jpg'
        },  
        {
            titolo: 'Un gioco Interattivo',
            text:'Vieni a scoprire il fantastico mondo open space di Metin2',
            image:'img/pg.jpeg'
        }, 
        {
            titolo:'Scopri i nuovi equipaggiamenti',
            text:'Iscriviti ora e vieni a vivere questa nuova avventura con migliaia di giocatori',
            image:'img/sura1.jpeg'
        }, 
        {
            titolo:'Nuovi dungeon',
            text:'Con il nuovo update sono stati aggiunti nuovi e pericolosi dungeon tutti da scoprire',
            image:'img/sura.jpg'
        }, 
        {
            titolo:'22/12/18 uscita del nuovo server',
            text:'Con questa apertura del nuovo server, potrai riniziare alla pari con tutti gli altri giocatori',
            image:'img/ninja.jpg'
        }  
        ],
        currentImg: 0
    },
    methods: {
        nextImage: function(){
            if (this.currentImg == this.images.length - 1){
                this.currentImg = 0;
            } else {
                this.currentImg++;
            } 
        
        },
        prevImage: function(){
            if (this.currentImg == 0){
                this.currentImg = this.images.length - 1;
            } else {
                this.currentImg--;
            }
            
        },
        selettoreImg: function(index){
            this.currentImg = index;
        }
    },

});


