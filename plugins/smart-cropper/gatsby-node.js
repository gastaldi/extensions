const path = require("path")

const { crop } = require("./image-processing")
const { getCache } = require("gatsby/dist/utils/get-cache")
const { createFileNodeFromBuffer } = require("gatsby-source-filesystem")

exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const { createNode } = actions

  if (!node.internal.type === `File`) {
    return
  }

  // Only look at images
  if (
    !node.internal.mediaType ||
    !node.internal.mediaType.startsWith("image")
  ) {
    return
  }

  // Only look at images that came from GitHub
  if (!node.url || !node.url.includes("github")) {
    return
  }

  const buffer = await crop(node.absolutePath)

  // We could also use one of the available OCR libraries to detect text and filter out images with text, but let's wait until we have that problem
  const name = "smartcrop-" + path.basename(node.absolutePath)

  // Return a promise to make sure we wait
  return await createFileNodeFromBuffer({
    buffer,
    name,
    getCache,
    createNode,
    createNodeId,
  })
}
