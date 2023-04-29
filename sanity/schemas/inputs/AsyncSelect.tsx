import { useState, useEffect } from 'react'
import { fetchLanguages } from '../../sanity-utils'

interface AsyncSelectProps {
  schemaType: {
    options: {
      url: string;
      formatResponse?: (data: any) => any;
      list?: { title: string; value: string }[];
    };
  };
  renderDefault: (props: any) => React.ReactElement;
}

const AsyncSelect = (props: AsyncSelectProps) => {
  const [listItems, setListItems] = useState<{ title: string; value: string }[]>([])
  const { schemaType, renderDefault } = props
  const { options } = schemaType
  const { url, formatResponse } = options

  useEffect(() => {
    const getLanguages = async () => {
      const langs = await fetchLanguages()
      setListItems(langs)
    }

    getLanguages()
  }, [url, formatResponse])

  return renderDefault({
    ...props,
    schemaType: { ...schemaType, options: { ...options, list: listItems } },
  })
}

export default AsyncSelect
