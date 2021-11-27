const app = new Vue({
    el: '#root',
    data:{
        images:[
            'img/metin2.jpg',  
            'img/pg.jpeg', 
            'img/sura1.jpeg', 
            'img/sura.jpg', 
            'img/ninja.jpg'  
        ],
        currentImg: 0
    },
    methods: {
        nextImage: function(){
            this.currentImg++;
        },
        prevImage: function(){
            this.currentImg--;
        }
    }

});


