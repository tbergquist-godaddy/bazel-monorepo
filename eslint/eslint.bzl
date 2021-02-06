"""
Eslint.
"""

load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary", "nodejs_test")

def eslint(name, data, entry, **kwargs):
    templated_args = ["$(execpath %s)" % entry, "--report-unused-disable-directives"]
    lint_data = data + [
        "//:.eslintignore",
        "//:.eslintrc.js",
        "//:.prettierignore",
        "//:babel.config.js",
        "@npm//@adeira/eslint-config",
        "@npm//babel-eslint",
        "@npm//eslint",
        "@npm//jest",
        "@npm//eslint-plugin-sx",
    ]
    nodejs_test(
        name = name,
        data = lint_data,
        entry_point = "@npm//:node_modules/eslint/bin/eslint.js",
        templated_args = templated_args,
    )

    nodejs_binary(
        name = "%s.fix" % name,
        data = lint_data,
        entry_point = "@npm//:node_modules/eslint/bin/eslint.js",
        templated_args = templated_args + ["--fix"],
    )
