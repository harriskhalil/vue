const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image_data:{
                image:'./assets/images/socks_blue.jpg',
                url:'https://vuejs.org/',
                instock: true,
                inventory:100,
                onsale:true,
                details:['50% cotton','30% wool','20% wool'],
                variants:[

                    { id:3 , color:'green', image:'./assets/images/socks_green.jpg' },
                    { id:4 , color:'blue', image:'./assets/images/socks_blue.jpg' },
                ],
                sizes:['xs','sm','md','xl','lg']
            },
            cart:0
        }
    },
    methods:{
        updatecart(){
            this.cart+=1
        },
        minuscart(){
            if (this.cart>0){

                this.cart -=1
            }
        },
        updateimage(variantImage){
            this.image_data.image=variantImage
        }
    }
})