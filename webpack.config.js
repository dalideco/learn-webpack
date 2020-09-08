module.exports={
    entry:"./src/js/app.js",
    output:{
        path: __dirname +"/dist",
        filename:"main.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            },
            {
                test:/\.css$/, 
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"}
                ]
            }
        ]
    }
}