import axios from 'axios'

const fetchItems = async () => {
  try {
    await axios.get('https://fakestoreapi.com/products').then((response) => response.data)
  } catch (error) {
    console.error('error', error)
  }
}

export default fetchItems()
