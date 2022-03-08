const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            brand:'Learning Vue',
            image_data:{
                // image:'./assets/images/socks_blue.jpg',
                selectedVariant:0,
                url:'https://vuejs.org/',
                // instock: true,
                // inventory:110,
                onsale:true,
                details:['50% cotton','30% wool','20% wool'],
                variants:[

                    { id:3 , color:'green', image:'./assets/images/socks_green.jpg',quantity:50 },
                    { id:4 , color:'blue', image:'./assets/images/socks_blue.jpg',quantity: 0 },
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
        },
        updateVariant(index){
            this.image_data.selectedVariant= index;
        }

    },
    computed:{
        title(){
           return this.product + " " +this.brand
        },
        image(){
            return this.image_data.variants[this.image_data.selectedVariant].image
        },
        inStock(){
            return this.image_data.variants[this.image_data.selectedVariant].quantity
        }
    }
})