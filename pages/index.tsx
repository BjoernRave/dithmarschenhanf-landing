import FAQ from 'components/FAQ'
import { Description, PageWrapper } from 'lib/styles'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useGithubJsonForm } from 'react-tinacms-github'
import styled from 'styled-components'
import { usePlugin } from 'tinacms'

const Title = styled.h1`
  margin: 30px auto 10px auto;
  display: table;
  text-align: center;
  font-size: 36px;
`

const TopBanner = styled.img`
  width: 100%;
`
const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 300px;
  margin: 0 50px;
  height: auto;

  @media (max-width: 767px) {
    margin: 20px;
    width: 100%;
  }
`

const Home: NextPage<Props> = ({ file }) => {
  const formOptions = {
    label: 'Home Page',
    fields: [
      { name: 'title', label: 'Titel', component: 'text' },
      { name: 'description', label: 'Beschreibung', component: 'markdown' },
    ],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin([form, MarkdownFieldPlugin])

  return (
    <>
      <TopBanner alt='Hanffeld' src='/Header.jpg' />
      <PageWrapper>
        <Title>{data.title}</Title>
        <Description style={{ fontSize: '22px', textAlign: 'center' }}>
          <ReactMarkdown source={data.description} />
        </Description>
        <Images>
          <Image alt='Hanfsamen' src='/samen.png' />
          <Image alt='Teetasse' src='/teetasse.png' />
        </Images>
        <FAQ />
      </PageWrapper>
    </>
  )
}

export default Home

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
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    })
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../content/home.json')).default,
      },
    },
  }
}
