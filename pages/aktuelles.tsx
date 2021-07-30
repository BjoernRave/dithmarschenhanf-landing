import { Description, PageWrapper, Title } from 'lib/styles'
import { formatDate } from 'lib/utils'
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
  max-height: 1000px;
  width: auto;
  max-width: 100%;
  margin: 20px auto;
  display: table;
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
                defaultItem: {
                  content: '',
                },
                fields: [
                  { name: 'content', label: 'Content', component: 'markdown' },
                ],
              },
              'image-block': {
                label: 'Bild',
                key: 'image-block',
                defaultItem: {
                  content: '',
                },
                fields: [
                  {
                    name: 'image',
                    label: 'Bild',
                    component: 'image',
                    parse: (media) => `/uploads/${media.filename}`,

                    // Decide the file upload directory for the post
                    uploadDir: () => '/uploads',

                    // Generate the src attribute for the preview image.
                    previewSrc: (fullSrc) => fullSrc.replace('/', ''),
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
          {entry.items?.map((item, innerInd) => {
            if (item._template === 'image-block' && item.image) {
              return <Image alt={entry.title} key={innerInd} src={item.image} />
            }
            if (item._template === 'content-block') {
              return (
                <Description key={innerInd}>
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
      ...(typeof previewData === 'object' && previewData),
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
