module.exports = {
    entry : ['./app/index.js'],
    output : {
        path : __dirname + "/build/",
        filename : 'bundle.js'
    },
    module : {
        loaders:[
            {
                loader : 'babel-loader',
                test : /\.jsx?$/,
                exclude : /node_modules/
            },
            {
                loader : ['style-loader','css-loader'],
                test : /\.css?$/,
                exclude : /node_modules/
            }
        ],
    },
    devServer : {
        port : 3000,
        contentBase: __dirname + "/build/",
        inline : true,
    }
}