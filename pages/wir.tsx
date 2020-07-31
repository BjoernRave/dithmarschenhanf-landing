import { Description, PageWrapper, Title } from 'lib/styles'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useGithubJsonForm } from 'react-tinacms-github'
import styled from 'styled-components'
import { usePlugin } from 'tinacms'

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  display: table;
`

const ImageWrapper = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const MiddleImage = styled(Image)`
  margin: 0 20px;

  @media (max-width: 767px) {
    margin: 20px 0;
  }
`

const Wir: NextPage<Props> = ({ file }) => {
  const formOptions = {
    label: 'Über Uns',
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
      <ImageWrapper>
        <Image alt='Nis' src='/nis.jpg' />
        <MiddleImage alt='Wilm' src='/wilm.jpg' />
        <Image src='/maren.jpg' alt='Maren' />
      </ImageWrapper>
      <Description>
        <ReactMarkdown source={data.text} />
      </Description>
    </PageWrapper>
  )
}

export default Wir

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
      fileRelativePath: 'content/wir.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/wir.json',
        data: (await import('../content/wir.json')).default,
      },
    },
  }
}
