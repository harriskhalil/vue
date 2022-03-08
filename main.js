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

                    { id:3 , color:'green' },
                    { id:4 , color:'blue' },
                ],
                sizes:['xs','sm','md','xl','lg']
            },
        }
    },
})