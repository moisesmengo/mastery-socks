var app = new Vue({
    el:'#app',
    data() {
        return {
            product: 'Socks',
            image:'./assets/vmSocks-green-onblue.jpg',
            inStock: true,
            details:['80%cotton', '20% polyester', 'Green-neutral'],
            variants:[
                {
                    variantId: 2234,
                    variantColor: 'green',
                },
                {
                    variantId: 2235,
                    variantColor: 'blue'
                }
            ]
        }
    },
})