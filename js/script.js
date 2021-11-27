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
            
        }
    },

});


