const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
     entry:"./src/app.js",
     output:{
          path:path.resolve(__dirname,"dist"),
          filename:"bundle.js"
     },
     module:{
          rules:[
               {
                    test: /\.css$/i,
                    exclude: /styles/,
                    use: ["to-string-loader", "css-loader"]
                },
                /* rules buat global style */
                {
                    test: /\.css$/i,
                    include: /styles/,
                    use: ["style-loader", "css-loader"]
                }
          ]
     },
     plugins:[
          new HTMLWebpackPlugin({
               template:"./src/index.html",
               filename:"index.html"
          })
     ]
}
