import { defineType } from "sanity";

export default defineType({
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Language Code',
      type: 'string',
      description: 'The ISO 639-1 language code (e.g., "en", "es", "fr", etc.).',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Language Name',
      type: 'string',
      description: 'The name of the language (e.g., "English", "Spanish", "French", etc.).',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'code',
    },
  },
});
