import { type SchemaTypeDefinition } from 'sanity';
import projects from '../projects';
import aboutdescription from '../aboutdescription';
import skills from '../skills';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, aboutdescription, skills],
}
