import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "Faq",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      validation: (Rule) => Rule.required(),
      type: "text",
    }),
  ],
});
