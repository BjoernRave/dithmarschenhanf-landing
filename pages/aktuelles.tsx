import { PageWrapper, Title } from 'lib/styles'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useGithubJsonForm } from 'react-tinacms-github'
import styled from 'styled-components'
import { useCMS } from 'tinacms'

const Entry = styled.section`
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
`

const EntryTitle = styled.h2`
  display: table;
  margin: 20px auto;
`

const EntryText = styled.p``

const Aktuelles: NextPage<Props> = ({ file }) => {
  const formOptions = {
    label: 'Aktuelles',
    fields: [
      {
        label: 'Titel',
        name: 'title',
        component: 'text',
      },
      {
        label: 'Einträge',
        name: 'entries',
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

  const cms = useCMS()

  React.useEffect(() => {
    import('react-tinacms-editor').then(({ MarkdownFieldPlugin }) => {
      cms.plugins.add(MarkdownFieldPlugin as any)
    })
  }, [])

  const [data, form] = useGithubJsonForm(file, formOptions)

  return (
    <PageWrapper>
      <Title>{data.title}</Title>
      {data?.entries?.map((entry, ind) => (
        <Entry key={ind}>
          <EntryTitle>{entry.title}</EntryTitle>
          <EntryText>
            <ReactMarkdown source={entry.description} />
          </EntryText>
        </Entry>
      ))}
    </PageWrapper>
  )
}

export default Aktuelles

interface Props {
  file: any
}

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  const fileRelativePath = 'content/aktuelles.json'
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath,
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath,
        data: (await import('../content/aktuelles.json')).default,
      },
    },
  }
}
