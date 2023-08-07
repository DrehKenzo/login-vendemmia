import * as Dialog from '@radix-ui/react-dialog'
import * as Avatar from '@radix-ui/react-avatar'
import { X } from 'phosphor-react'

import { CloseButton, Content, Overlay } from './styles'
import { dateFormatter } from '../../../../utils/formatter'

interface ModalProps {
  id: string
  name: string
  avatar: string
  createdAt: string
}

export function UserDetailsModal(props: ModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Informações do usuário</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <ul>
          <li>
            <Avatar.Root className="AvatarRoot">
              <Avatar.Image src={props.avatar} className="AvatarImage" />
            </Avatar.Root>
          </li>
          <li>
            #{props.id}
            {' - '}
            <strong>{props.name}</strong>
          </li>
          <li></li>
          <li>Desde {dateFormatter.format(new Date(props.createdAt))}</li>
        </ul>
      </Content>
    </Dialog.Portal>
  )
}
