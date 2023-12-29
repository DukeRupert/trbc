import { SanityClient } from "./client";
const projectId = 'r9avj1jo';
const dataset = 'production';
const apiVersion = '2023-05-16';

const S = new SanityClient(projectId, dataset, apiVersion)

export default S

