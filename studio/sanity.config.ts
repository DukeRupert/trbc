import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from './deskStructure'
import {IconManager} from 'sanity-plugin-icon-manager'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'trbc',
  projectId: 'r9avj1jo',
  dataset: 'production',

  plugins: [deskTool({structure: deskStructure}), visionTool(), IconManager(), media()],

  schema: {
    types: schemaTypes,
  },
})
