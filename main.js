var app = new Vue({
    el:'#app',
    data() {
        return {
            product: 'Socks',
            image:'./assets/vmSocks-green-onWhite.jpg',
            inStock: true,
            details:['80%cotton', '20% polyester', 'Green-neutral'],
            variants:[
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: './assets/vmSocks-green-onWhite.jpg'
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: './assets/vmSocks-green-onblue.jpg'
                },
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart(){
            this.cart++
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    },
})