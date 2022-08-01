const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
   entry: path.resolve(__dirname, "..", "./src/main.ts"),
   output: {
      path: path.resolve(__dirname, "..", "./dist"),
      filename: "bundle.[name]-[hash].js",
   },
   plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "..", "./public/index.html"),
      }),
   ],
   resolve: {
      extensions: [".ts", ".js", ".json"], //配置文件引入时省略后缀名
   },

   module: {
      rules: [
         { test: /.vue$/, use: "vue-loader" },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.(ts|js)$/, //匹配规则 以ts结尾的文件
            exclude: /node_modules/,
            use: [
               {
                  loader: "babel-loader",
               },
            ],
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: "asset/resource",
         },
         {
            test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
            type: "asset/inline",
         },
      ],
   },
}
