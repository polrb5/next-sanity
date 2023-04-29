import { defineField, defineType } from 'sanity'
import { language } from './fields'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      readOnly: true,
      initialValue: 'Home',
    }),
    defineField(language),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare(selection) {
      const { language } = selection
      return { ...selection, subtitle: language }
    },
  },
})