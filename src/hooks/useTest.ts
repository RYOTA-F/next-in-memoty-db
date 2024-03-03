import useSWR from 'swr'

const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json())

export const useTest = () => {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher,
  )

  return {
    data,
    error,
    isLoading,
  }
}
