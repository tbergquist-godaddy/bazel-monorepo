"""
Helper to build es-modules an cjs with babel
"""

load("@npm//@babel/cli:index.bzl", "babel")

def build_cjs(name, file_path, data):
    babel(
        name = name,
        args = [file_path] + [
            "--out-dir",
            "$(@D)",
            "--copy-files",
            "--root-mode",
            "upward",
        ],
        data = data,
        output_dir = True,
    )

def build_esm(name, file_path, data):
    babel(
        name = name,
        args = [file_path] + [
            "--out-dir",
            "$(@D)",
            "--copy-files",
            "--root-mode",
            "upward",
            "--out-file-extension",
            ".mjs",
        ],
        data = data,
        output_dir = True,
    )

def babel_build(name, file_path, data, cjs_name = "lib", esm_name = "esm"):
    build_cjs(cjs_name, file_path, data)
    build_esm(esm_name, file_path, data)
