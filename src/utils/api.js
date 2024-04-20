const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1'

  const _fetchWithAuth = (url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  }

  const login = async ({ email, password }) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const responseJSON = await response.json()
      const { status, message } = responseJSON

      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { token },
      } = responseJSON

      return token
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const register = async ({ name, email, password }) => {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { user },
      } = responseJSON
      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const putAccessToken = (token) => {
    localStorage.setItem('userToken', token)
  }
  const getAccessToken = () => {
    return localStorage.getItem('userToken')
  }

  const getOwnProfile = async () => {
    try {
      const response = await _fetchWithAuth(`${BASE_URL}/users/me`)
      const responseJSON = await response.json()

      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }

      const {
        data: { user },
      } = responseJSON
      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const getAllUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'GET',
      })
      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { users },
      } = responseJSON
      return users
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const getAllThreads = async () => {
    try {
      const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
        method: 'GET',
      })
      const responseJSON = await response.json()

      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { threads },
      } = responseJSON
      return threads
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const getThreadById = async (id) => {
    try {
      const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}`, {
        method: 'GET',
      })

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { detailThread },
      } = responseJSON
      return detailThread
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const createThread = async ({ title, body, category }) => {
    try {
      const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          category,
        }),
      })

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }

      const {
        data: { thread },
      } = responseJSON
      return thread
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const getLeaderboards = async () => {
    try {
      const response = await fetch(`${BASE_URL}/leaderboards`, {
        method: 'GET',
      })
      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { leaderboards },
      } = responseJSON
      return leaderboards
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const upVoteThread = async (threadId) => {
    try {
      const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/up-vote`,
        {
          method: 'POST',
        }
      )

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }

      const {
        data: { vote },
      } = responseJSON
      return vote
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const downVoteThread = async (threadId) => {
    try {
      const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/down-vote`,
        {
          method: 'POST',
        }
      )

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }

      const {
        data: { vote },
      } = responseJSON
      return vote
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const neutralizeVoteThread = async (threadId) => {
    try {
      const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/neutral-vote`,
        {
          method: 'POST',
        }
      )

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }

      const {
        data: { vote },
      } = responseJSON
      return vote
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const createComment = async (threadId, content) => {
    try {
      const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content }),
        }
      )

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { comment },
      } = responseJSON
      return comment
    } catch (error) {
      console.log(error.message)
    }
  }

  const upVoteComment = async (threadId, commentId) => {
    try {
      const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
        {
          method: 'POST',
        }
      )

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { vote },
      } = responseJSON
      return vote
    } catch (error) {
      console.log(error.message)
    }
  }

  const downVoteComment = async (threadId, commentId) => {
    try {
      const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
        {
          method: 'POST',
        }
      )

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { vote },
      } = responseJSON
      return vote
    } catch (error) {
      console.log(error.message)
    }
  }

  const neutralizeVoteComment = async (threadId, commentId) => {
    try {
      const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
        {
          method: 'POST',
        }
      )

      const responseJSON = await response.json()
      const { status, message } = responseJSON
      if (status !== 'success') {
        throw new Error(message)
      }
      const {
        data: { vote },
      } = responseJSON
      return vote
    } catch (error) {
      console.log(error.message)
    }
  }

  return {
    login,
    register,
    putAccessToken,
    getAccessToken,
    getAllUsers,
    getOwnProfile,
    getAllThreads,
    getThreadById,
    createThread,
    getLeaderboards,
    upVoteThread,
    downVoteThread,
    neutralizeVoteThread,
    createComment,
    upVoteComment,
    downVoteComment,
    neutralizeVoteComment,
  }
})()

export default api
