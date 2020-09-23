def get_folder_name(extension):
  if extension == ".js":
    return "lib"
  if extension == ".mjs":
    return "esm"
  if extension == ".js.flow":
    return "flow"

