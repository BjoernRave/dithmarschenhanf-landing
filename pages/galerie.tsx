import ImageGallery from 'components/ImageGallery'
import { photos } from 'lib/photos'
import { PageWrapper, Title } from 'lib/styles'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { default as React, default as React } from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useGithubJsonForm } from 'react-tinacms-github'
import { usePlugin } from 'tinacms'

const Galerie: NextPage<Props> = ({ file }) => {
  const formOptions = {
    label: 'Einkaufserfolg',
    fields: [
      {
        label: 'Title',
        name: 'title',
        component: 'text',
      },
      {
        label: 'Text',
        name: 'text',
        component: 'markdown',
      },
    ],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin([form, MarkdownFieldPlugin])

  return (
    <PageWrapper>
      <Title>{data.title}</Title>
      <ReactMarkdown source={data.text} />
      <ImageGallery photos={photos} />
    </PageWrapper>
  )
}

export default Galerie

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
      fileRelativePath: 'content/einkaufsErfolg.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/einkaufsErfolg.json',
        data: (await import('../../content/einkaufsErfolg.json')).default,
      },
    },
  }
}
