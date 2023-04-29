import AsyncSelect from "../inputs/AsyncSelect";

const language = {
  name: 'language',
  title: 'Language',
  type: 'string',
  options: {
    list: []
  },
  components: {
    input: AsyncSelect,
  },
}

export { language };