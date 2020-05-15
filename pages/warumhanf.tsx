import { PageWrapper, Title } from 'lib/styles'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import React from 'react'
import { useGithubJsonForm } from 'react-tinacms-github'

const Warumhanf: NextPage<Props> = ({ file }) => {
  const formOptions = {
    label: 'Warum Hanf?',
    fields: [
      {
        label: 'Titel',
        name: 'title',
        component: 'text',
      },
      {
        label: 'Vorzüge',
        name: 'advantages',
        component: 'group-list',
        itemProps: (item) => ({
          key: item.id,
          label: item.name,
        }),
        fields: [
          {
            label: 'Titel',
            name: 'title',
            component: 'text',
          },
          {
            label: 'Beschreibung',
            name: 'description',
            component: 'textarea',
          },
        ],
      },
    ],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)

  return (
    <PageWrapper>
      <Title>{data.title}</Title>
      {data.advantages.map((advantage) => (
        <>
          <h2>{advantage.title}</h2>
          <p>{advantage.description}</p>
        </>
      ))}
    </PageWrapper>
  )
}

export default Warumhanf

interface Props {
  file: any
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/warumhanf.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/warumhanf.json',
        data: (await import('../content/warumhanf.json')).default,
      },
    },
  }
}
