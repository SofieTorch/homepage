import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Thêm readingTime vào schema nhưng đặt là optional
    readingTime: z.string().optional(),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['talk', 'organizer', 'hackathon', 'competition']),
    event: z.string().optional(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    video: z.string().optional(),
    slides: z.string().optional(),
    featured: z.boolean().optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'events': eventsCollection,
};

