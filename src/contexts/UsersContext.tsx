import { ReactNode, createContext, useEffect, useState } from 'react'

export interface User {
  id: string
  name: string
  avatar: string
  createdAt: string
}

interface UserContextType {
  users: User[]
  fetchUsers: User[]
  reset: boolean
  currentPage: number
  itensPerPage: number
  sortPage: string
  orderPage: string
  updateUsers: (newUsers: User[]) => void
  updateItensPerPage: (newItensPerPage: number) => void
  updateCurrentPage: (newCurrentPage: number) => void
  updateSortPage: (newSortPage: string) => void
  updateOrderPage: (newOrderPage: string) => void
  resetUsers: (newState: boolean) => void
}

interface UserProviderProps {
  children: ReactNode
}

export const UsersContext = createContext({} as UserContextType)

export function UsersProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [fetchUsers, setFetchUsers] = useState<User[]>([])
  const [reset, setReset] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [itensPerPage, setItensPerPage] = useState(10)
  const [sortPage, setSortPage] = useState('name')
  const [orderPage, setOrderPage] = useState('asc')

  const resetUsers = (newState: boolean) => {
    setReset(newState)
  }

  const updateUsers = (newUsers: User[]) => {
    setUsers(newUsers)
  }

  const updateItensPerPage = (newItensPerPage: number) => {
    setItensPerPage(newItensPerPage)
  }

  const updateCurrentPage = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage)
  }

  const updateSortPage = (newSortPage: string) => {
    setSortPage(newSortPage)
  }

  const updateOrderPage = (newOrderPage: string) => {
    setOrderPage(newOrderPage)
  }

  useEffect(() => {
    async function filterUsers() {
      const response = await fetch(
        `https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users?page=${currentPage}&limit=${itensPerPage}&sortBy=${sortPage}&order=${orderPage}`,
      )
      const users = await response.json()

      setUsers(users)
    }

    filterUsers()
  }, [currentPage, itensPerPage, sortPage, orderPage, reset])

  async function initFetchUsers() {
    const response = await fetch(
      `https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users`,
    )
    const users = await response.json()

    setFetchUsers(users)
  }

  useEffect(() => {
    initFetchUsers()
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [itensPerPage])

  return (
    <UsersContext.Provider
      value={{
        users,
        fetchUsers,
        currentPage,
        itensPerPage,
        sortPage,
        orderPage,
        updateUsers,
        updateItensPerPage,
        updateCurrentPage,
        updateSortPage,
        updateOrderPage,
        resetUsers,
        reset,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
