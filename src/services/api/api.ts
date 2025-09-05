import axios from 'axios'

const API_URL = 'https://srfbvpwlmviqejhlgrnl.supabase.co/rest/v1'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'apikey': API_KEY,
    'Content-Type': 'application/json'
  }
})