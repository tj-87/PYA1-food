import axios from 'axios'

const API_URL = 'https://srfbvpwlmviqejhlgrnl.supabase.co/rest/v1'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyZmJ2cHdsbXZpcWVqaGxncm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTMwMDIsImV4cCI6MjA3MTE4OTAwMn0.qMXTTkS3DLkchlNTBK9mx9RutdweBNCVrxD-mM5iGKk'

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'apikey': API_KEY,
    'Content-Type': 'application/json'
  }
})