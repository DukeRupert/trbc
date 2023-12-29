import { SanityClient } from "./client";
import { default as SanityImage } from './SanityImage/Image.svelte'
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, PUBLIC_SANITY_API_VERSION } from "$env/static/public";

const projectId = PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_DATASET;
const apiVersion = PUBLIC_SANITY_API_VERSION;

const S = new SanityClient(projectId, dataset, apiVersion)

export { SanityImage }
export default S

