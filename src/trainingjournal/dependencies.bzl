"""
Npm build dependencies
"""

def get_deps():
    return [
        "@npm//html-webpack-plugin",
        "@npm//clean-webpack-plugin",
        "@npm//babel-loader",
        "@npm//@adeira/babel-preset-adeira",
        "@npm//@adeira/fetch",
        "@npm//react",
        "@npm//react-dom",
        "@npm//style-loader",
        "@npm//css-loader",
        "@npm//@svgr/webpack",
        "@npm//@babel/runtime",
        "@npm//copy-webpack-plugin",
        "//src/webpack-config:webpack_config",
        "//src/components:components",
        "//src/router:router",
        "@npm//fbt",
        "@npm//babel-plugin-fbt",
        "@npm//babel-plugin-fbt-runtime",
        "@npm//recoil",
        "@npm//@adeira/sx",
        "@npm//shortid",
        "@npm//yup",
        "@npm//@hookform/resolvers",
        "@npm//react-query",
        "@npm//react-icons",
        "@npm//react-helmet",
    ]
