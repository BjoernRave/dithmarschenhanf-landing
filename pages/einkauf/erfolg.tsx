import { useShoppingCart } from 'components/ShoppingCart'
import { Description, PageWrapper, Title } from 'lib/styles'
import { GetStaticProps } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import Link from 'next/link'
import React, { FC, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useGithubJsonForm } from 'react-tinacms-github'
import styled from 'styled-components'
import { usePlugin } from 'tinacms'

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all linear 0.1s;
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  font-size: 24px;
  margin: 20px auto;
  display: table;

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadows.hover.google};
  }
`

const EinkaufsErfolg: FC<Props> = ({ file }) => {
  const { setCart } = useShoppingCart()
  useEffect(() => {
    localStorage.removeItem('shopping-cart')
    setCart([])
  }, [])

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
      <Description>
        <ReactMarkdown source={data.text} />
      </Description>
      <Link href='/'>
        <a style={{ textDecoration: 'none' }}>
          <Button>Zur Startseite</Button>
        </a>
      </Link>
    </PageWrapper>
  )
}

export default EinkaufsErfolg

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
