const schema = {
  name: "legal",
  title: "Legal",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "content",
      title: "Content",
      validation: (Rule: any) => Rule.required(),
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

export default schema;
