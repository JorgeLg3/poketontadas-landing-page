import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const pokemon = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/pokemon" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        category: z.string(),
        types: z.array(z.string()),
        height: z.number(),
        weight: z.number(),
        abilities: z.array(z.string()),
        img: z.string()
    })
});

export const collections = { pokemon };