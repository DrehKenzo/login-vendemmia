import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { UserDetailsModal } from './components/UserDetailsModal'
import { SearchForm } from './components/SearchForm'
import { DashboardContainer, UserDetailsButton, UsersContent } from './styles'
import { UsersContext } from '../../contexts/UsersContext'
import { dateFormatter } from '../../utils/formatter'
import { Pagination } from '../../components/Pagination'
import * as Dialog from '@radix-ui/react-dialog'
import * as Avatar from '@radix-ui/react-avatar'

export function Dashboard() {
  const {
    users,
    fetchUsers,
    itensPerPage,
    currentPage,
    updateCurrentPage,
    updateItensPerPage,
  } = useContext(UsersContext)

  // Setup Pagination
  const paginationProps = {
    fetchList: fetchUsers,
    itensPerPage,
    currentPage,
    updateCurrentPage,
    updateItensPerPage,
  }

  return (
    <div>
      <Header />
      <Summary />

      <DashboardContainer>
        <SearchForm />
        <UsersContent>
          {users.length === 0 ? (
            <ul>
              <li>
                <p>Nenhum usuário encontrado.</p>
              </li>
            </ul>
          ) : (
            users.map((user) => {
              return (
                <ul key={user.id}>
                  <li>#{user.id}</li>
                  <li>
                    <Avatar.Root className="AvatarRoot">
                      <Avatar.Image src={user.avatar} className="AvatarImage" />
                    </Avatar.Root>
                  </li>
                  <li>{user.name}</li>
                  <li>{dateFormatter.format(new Date(user.createdAt))}</li>
                  <li>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <UserDetailsButton>Ver detalhes</UserDetailsButton>
                      </Dialog.Trigger>

                      <UserDetailsModal {...user} />
                    </Dialog.Root>
                  </li>
                </ul>
              )
            })
          )}
        </UsersContent>
        <Pagination {...paginationProps} />
      </DashboardContainer>
    </div>
  )
}
