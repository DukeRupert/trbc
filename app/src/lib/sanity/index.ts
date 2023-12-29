import { SanityClient } from "./client";
import { default as SanityImage } from './SanityImage/Image.svelte'

const projectId = 'r9avj1jo';
const dataset = 'production';
const apiVersion = '2023-05-16';

const S = new SanityClient(projectId, dataset, apiVersion)

export { SanityImage }
export default S

