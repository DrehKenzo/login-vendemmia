import { User } from '../../contexts/UsersContext'
import { PaginationContainer } from './styles'

interface PaginationProps {
  fetchList: User[]
  itensPerPage: number
  currentPage: number
  updateCurrentPage: (newCurrentPage: number) => void
  updateItensPerPage: (newItensPerPage: number) => void
}

export function Pagination(props: PaginationProps) {
  const {
    fetchList,
    itensPerPage,
    currentPage,
    updateCurrentPage,
    updateItensPerPage,
  } = props

  const pages = Math.ceil(fetchList.length / itensPerPage)

  return (
    <PaginationContainer>
      <section>
        <select
          value={itensPerPage}
          onChange={(e) =>
            updateItensPerPage(Number((e.target as HTMLSelectElement).value))
          }
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
        <div>
          {Array.from(Array(pages), (_item, index) => {
            const id = index + 1

            return (
              <button
                key={id}
                value={id}
                data-state={id === currentPage ? 'checked' : 'disabled'}
                onClick={(e) =>
                  updateCurrentPage(
                    Number((e.target as HTMLInputElement).value),
                  )
                }
              >
                {id}
              </button>
            )
          })}
        </div>
      </section>
    </PaginationContainer>
  )
}
