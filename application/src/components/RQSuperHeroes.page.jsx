import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export const RQSuperHeroes = () => {

  const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
  }

  const { isLoading, data, isError, error } = useQuery('super-heroes', fetchSuperHeroes, { staleTime: 30000 })

  if (isLoading) {
    return <h2>Loading . . .</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <div>
        <h2>SuperHeroes</h2>
        <br />
        { data?.data.map(item => {
          return (
            <p key={item.id}>{item.name}</p>
          )
        })}
    </div>
  )
}
