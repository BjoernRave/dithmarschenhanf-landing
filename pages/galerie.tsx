import ImageGallery from 'components/ImageGallery'
import { photos } from 'lib/photos'
import { Description, PageWrapper, Title } from 'lib/styles'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useGithubJsonForm } from 'react-tinacms-github'
import { usePlugin } from 'tinacms'

const Galerie: NextPage<Props> = ({ file }) => {
  const formOptions = {
    label: 'Galerie',
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
      <Description>
        <ReactMarkdown source={data.text} />
      </Description>
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
      fileRelativePath: 'content/galerie.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/galerie.json',
        data: (await import('../content/galerie.json')).default,
      },
    },
  }
}
