import { PageWrapper, Title } from 'lib/styles'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useGithubJsonForm } from 'react-tinacms-github'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  padding: 20px 0;
`

const SectionTitle = styled.h2`
  display: table;
  margin: 0 auto;
  font-size: 28px;
`

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
          label: item.title,
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
            component: 'markdown',
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
        <SectionWrapper>
          <SectionTitle>{advantage.title}</SectionTitle>
          <p>
            <ReactMarkdown source={advantage.description} />
          </p>
        </SectionWrapper>
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