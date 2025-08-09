import {createClient} from 'next-sanity';

export const client = createClient({
  projectId: "ursg3s0y",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});