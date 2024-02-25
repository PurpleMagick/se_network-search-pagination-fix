import fs from "fs";
import path from "path";
import webpack from "webpack";

export default {
	entry: "./src/index.ts",
	output: {
		filename: "se-network-search-pagination-fixed.user.js",
		clean: true,
		module: true,
	},
	devtool: false,
	watchOptions: {
		poll: 1000,
	},
	mode: "none",
	plugins: [
		new webpack.BannerPlugin({
			banner: fs.readFileSync(path.join("res", "headers.js"), "utf-8"),
			raw: true,
		}),
	],
	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".js"]
	},
	optimization: {
		minimize: false,
		usedExports: true,
		concatenateModules: true,
	},
	experiments: {
		outputModule: true
	},
	devServer: {
		hot: false,
		liveReload: false,
		webSocketServer: false,
		static: {
			directory: path.join(".", "dist"),
		},
		compress: false,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader"
			}
		]
	}
};
