import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { FormEvent, useContext, useState } from 'react'
import { UsersContext } from '../../../../contexts/UsersContext'

export function SearchForm() {
  const {
    sortPage,
    orderPage,
    updateSortPage,
    updateOrderPage,
    updateUsers,
    resetUsers,
    reset,
    users,
  } = useContext(UsersContext)

  const [search, setSearch] = useState('')

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (search.length > 0) {
      const filteredUsers = users.filter((user) => user.name.startsWith(search))
      updateUsers(filteredUsers)
    } else {
      handlerClear()
    }
  }

  function handlerClear() {
    setSearch('')
    resetUsers(!reset)
  }

  return (
    <SearchFormContainer onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Busque por usuários"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={sortPage}
        onChange={(e) =>
          updateSortPage(String((e.target as HTMLSelectElement).value))
        }
      >
        <option value="id">ID</option>
        <option value="name">Nome</option>
        <option value="createdAt">Data</option>
      </select>
      <select
        value={orderPage}
        onChange={(e) =>
          updateOrderPage(String((e.target as HTMLSelectElement).value))
        }
      >
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>

      <button onClick={handlerClear}>Limpar</button>
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
