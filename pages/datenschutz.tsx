import { PageWrapper, Title } from 'lib/styles'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useGithubJsonForm } from 'react-tinacms-github'
import { usePlugin } from 'tinacms'

const DatenSchutz: NextPage<Props> = ({ file }) => {
  const formOptions = {
    label: 'Home Page',
    fields: [
      { name: 'title', label: 'Titel', component: 'text' },
      { name: 'description', label: 'Beschreibung', component: 'markdown' },
    ],
  }

  // Registers a JSON Tina Form
  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin([form, MarkdownFieldPlugin])

  return (
    <PageWrapper>
      <Title>{data.title}</Title>
      <ReactMarkdown source={data.description} />
    </PageWrapper>
  )
}

export default DatenSchutz

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
      fileRelativePath: 'content/datenschutz.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/datenschutz.json',
        data: (await import('../content/datenschutz.json')).default,
      },
    },
  }
}
