"""
Npm build dependencies
"""

def get_deps():
    return [
        "@npm//@adeira/babel-preset-adeira",
        "@npm//express",
        "@npm//cors",
        "@npm//morgan",
        "@npm//compression",
        "@npm//@adeira/graphql-global-id",
        "@npm//mongoose",
        "@npm//jsonwebtoken",
        "@npm//express-graphql",
        "@npm//passport",
        "@npm//passport-jwt",
        "@npm//dotenv",
        "@npm//@adeira/graphql-relay",
        "@npm//dataloader",
        "@npm//graphql-iso-date",
        "@npm//striptags",
        "@npm//ramda",
        "@npm//password-hash",
        "@npm//@adeira/fetch",
        "//src/redis-client:redis_client",
    ]
