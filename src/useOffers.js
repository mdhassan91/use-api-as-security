import { useEffect, useState } from 'react'
import axios from 'axios'
import useSecurity from './useSecurity'

const useOffers = () => {
    const security = useSecurity()
    const [offers, setOffers] = useState([])
    useEffect(() => {
        ; (async () => {
            try {
                const result = await axios.get('/api/offers')
                setOffers(result.data)
            } catch (err) {
                const status = err.response && err.response.status
                if (status === 401) {
                    security.onFailure()
                }
                // Handle other exceptions here (consider a shared
                // error handler -- see elsewhere in the book)
            }
        })()
    }, [])
    return { data: offers }
}
export default useOffers