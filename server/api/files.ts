export default defineEventHandler(async (event) => {
    const Q = getQuery(event)
  
    const limit = 500 // temporary
  
    const fileNames = await useStorage('assets:server').getKeys()
    if (!fileNames?.length) throw createError('No file names found')
  
    fileNames.length = Math.min(limit, fileNames.length)
    const files = []
    for (const fileName of fileNames) {
      const file = await useStorage().getItem(fileName)
      if (!file) continue
      files.push(file)
    }
  
    return {
      countFileNames: fileNames?.length,
      countFiles: files?.length,
      fileNames: fileNames,
      // files: files,
    }
  })