import * as fs from 'fs/promises'
import fm from 'front-matter'
import algoliasearch from 'algoliasearch'

export async function updateAlgolia(apiKey: string, algoliaIndex: string, algoliaAppId: string, contentDirectory: string, updateAlgolia: string) {
  if (!updateAlgolia) {
    console.log(`Cancelled Algolio Update as updateAlgolia is ${updateAlgolia} ${typeof (updateAlgolia)}`)
    return
  }
  interface AlgoliaRecord {
    objectID: string
    title: string
    description: string
    themes: string[]
    body: string
  }
  const contentDir = contentDirectory

  if (!contentDir) {
    console.log(`Algolia: contentDirectory is not set (${contentDirectory})`)
    return
  }
  const files = await fs.readdir(contentDir)
  const algoliaRecords: AlgoliaRecord[] = []

  for (const file of files) {
    const f: any = fm(await fs.readFile(`${contentDir}/${file}`, 'utf-8'))
    algoliaRecords.push({
      objectID: file,
      title: f.attributes.title,
      description: f.attributes.description,
      themes: f.attributes.themes,
      body: f.body
    })
  }

  // console.log(algoliaRecords)
  if (!algoliaAppId || !apiKey || !algoliaIndex) {
    console.log('ALGOLIA_APP_ID, ALGOLIA_CONTENT_MANAGEMENT_API_KEY, or ALGOLIA_INDEX missing', process.env)
    return
  }

  const client = algoliasearch(algoliaAppId, apiKey)
  const index = client.initIndex(algoliaIndex)

  try {
    console.log(`Pushing ${algoliaRecords.length} records to Algolia`)
    await index.saveObjects(algoliaRecords)
  } catch (e) {
    console.log('Algolia update failed:', e)
  }
}