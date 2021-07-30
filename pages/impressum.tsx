import { Description, PageWrapper, Title } from 'lib/styles'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useGithubJsonForm } from 'react-tinacms-github'
import styled from 'styled-components'
import { usePlugin } from 'tinacms'

const ImpressumWrapper = styled(PageWrapper)`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Text = styled(Description)`
  margin-top: 50px;
  font-size: 24px;
`

const Impressum: NextPage<Props> = ({ file }) => {
  const formOptions = {
    label: 'Impressum',
    fields: [
      { name: 'title', label: 'Titel', component: 'text' },
      { name: 'description', label: 'Text', component: 'markdown' },
    ],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin([form, MarkdownFieldPlugin])

  return (
    <ImpressumWrapper>
      <Title>{data.title}</Title>
      <Text>
        <ReactMarkdown source={data.description} />
      </Text>
    </ImpressumWrapper>
  )
}

export default Impressum

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
      ...(typeof previewData === 'object' && previewData),
      fileRelativePath: 'content/impressum.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/impressum.json',
        data: (await import('../content/impressum.json')).default,
      },
    },
  }
}
