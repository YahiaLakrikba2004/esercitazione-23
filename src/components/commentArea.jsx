import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true)
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZGU5OTdmMzA0NjAwMWFlNTlmNTUiLCJpYXQiOjE3MTQ0NjE0MDQsImV4cCI6MTcxNTY3MTAwNH0.CT1axYQJrjJ05Mb7D5KOCeJhsauxsndQV7AQSzBUg_M',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setIsLoading(false)
          setIsError(false)
        } else {
          console.log('error')
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea