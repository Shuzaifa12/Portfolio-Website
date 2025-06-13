import { type SchemaTypeDefinition } from 'sanity'
import Projects from '../projects'
import About_Description from '../aboutdescription'
import skills from '../skills'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Projects, About_Description, skills],
}
