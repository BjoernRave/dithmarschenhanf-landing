import React, { FC } from 'react'
import { useGithubEditing } from 'react-tinacms-github'
import styled from 'styled-components'

const EditButton = styled.button`
  position: fixed;
  right: 0;
  z-index: 999;
  top: 200px;
  padding: 15px;
  pointer-events: all;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 24px 0 0 24px;
  color: white;
  border: 0;
  outline: none;
  justify-content: center;
  fill: white;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
`

const TinaButton: FC<Props> = ({ editMode }) => {
  const github = useGithubEditing()

  return (
    <EditButton onClick={editMode ? github.exitEditMode : github.enterEditMode}>
      {editMode ? 'Bearbeiten beenden' : 'Seite bearbeiten'}
    </EditButton>
  )
}

export default TinaButton

interface Props {
  editMode: boolean
}
