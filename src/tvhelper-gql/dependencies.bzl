"""
Npm build dependencies
"""

def get_deps():
    return [
        "@npm//@adeira/babel-preset-adeira",
        "@npm//@adeira/fetch",
        "@npm//@adeira/graphql-global-id",
        "@npm//@adeira/graphql-relay",
        "@npm//@adeira/js",
        "@npm//compression",
        "@npm//cors",
        "@npm//dataloader",
        "@npm//dotenv",
        "@npm//express-graphql",
        "@npm//express",
        "@npm//graphql-iso-date",
        "@npm//jsonwebtoken",
        "@npm//mongoose",
        "@npm//morgan",
        "@npm//passport-jwt",
        "@npm//passport",
        "@npm//password-hash",
        "@npm//ramda",
        "@npm//striptags",
        "//src/redis-client:redis_client",
    ]
