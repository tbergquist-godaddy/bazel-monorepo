"""
Npm build dependencies
"""

def get_deps():
    return [
        "@npm//html-webpack-plugin",
        "@npm//clean-webpack-plugin",
        "@npm//babel-loader",
        "@npm//@adeira/babel-preset-adeira",
        "@npm//react",
        "@npm//react-dom",
        "@npm//style-loader",
        "@npm//css-loader",
        "@npm//@svgr/webpack",
        "@npm//@adeira/sx",
        "@npm//@babel/runtime",
        "@npm//shortid",
        "@npm//recoil",
        "@npm//yup",
        "@npm//relay-runtime",
        "@npm//react-router-dom",
        "@npm//react-relay",
        "@npm//react-hook-form",
        "@npm//fbt",
        "@npm//@hookform/resolvers",
        "@npm//@adeira/fetch",
        "@npm//babel-plugin-relay",
        "@npm//graphql",
        "@npm//babel-plugin-fbt",
        "@npm//babel-plugin-fbt-runtime",
        "@npm//@babel/plugin-syntax-dynamic-import",
        "@npm//jest",
        "//src/components:components",
    ]
