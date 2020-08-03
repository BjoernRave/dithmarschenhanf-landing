import { Description, PageWrapper, Title } from 'lib/styles'
import { formatDate, getObjectKeyByString } from 'lib/utils'
import { GetStaticProps, NextPage } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { DateFieldPlugin } from 'react-tinacms-date'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { useGithubJsonForm } from 'react-tinacms-github'
import styled from 'styled-components'
import { usePlugin } from 'tinacms'

const Entry = styled.section`
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  padding: 50px;
  margin: 20px;
  border-radius: 10px;

  @media (max-width: 767px) {
    padding: 20px;
  }
`

const EntryTitle = styled.h2`
  display: table;
  margin: 20px auto;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
`

const EntryDate = styled.span`
  display: table;
  margin: 0 auto;
  color: gray;
`

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
            name: 'createdAt',
            label: 'Erstellungsdatum',
            component: 'date',
            dateFormat: 'DD.MM.YYYY',
            timeFormat: false,
          },
          {
            label: 'Items',
            name: 'items',
            component: 'blocks',
            templates: {
              'content-block': {
                label: 'Text',
                key: 'content-block',

                fields: [
                  { name: 'content', label: 'Content', component: 'markdown' },
                ],
              },
              'image-block': {
                label: 'Bild',
                key: 'image-block',
                fields: [
                  {
                    name: 'image',
                    label: 'Bild',
                    component: 'image',
                    previewSrc: (test, test2) => {
                      let image
                      try {
                        image = getObjectKeyByString(test, test2.field.name)
                      } catch (error) {
                        console.log('error image preview', error)
                      }
                      return image
                    },
                    uploadDir: () => '/test',
                    parse: (fileName) => {
                      console.log(fileName)

                      return fileName
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin([form, MarkdownFieldPlugin, DateFieldPlugin])

  return (
    <PageWrapper>
      <Title>{data.title}</Title>
      {data?.entries?.map((entry, ind) => (
        <Entry key={ind}>
          <EntryTitle>{entry.title}</EntryTitle>
          <EntryDate>{formatDate(entry.createdAt)}</EntryDate>
          {entry.items?.map((item) => {
            if (item._template === 'image-block') {
              return <Image src={item.image} />
            }
            if (item._template === 'content-block') {
              return (
                <Description>
                  <ReactMarkdown source={item.content} />
                </Description>
              )
            }
          })}
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
