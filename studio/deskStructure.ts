// deskStructure.js
import { CogIcon } from "@sanity/icons";

export default (S) => S.list().title('Content').items([
  S.listItem()
    .title('Settings')
    .icon(CogIcon)
    .child(
      S.editor()
        .schemaType('siteMeta')
        .documentId('9004abd8-2f31-4e31-bbce-44ba2e69cb2d')
    ),
  ...S.documentTypeListItems().filter(listItem => !['siteMeta'].includes(listItem.getId()))
])
