import { useEffect, useState } from "react";
import axios from "axios";
import useSecurity from "./useSecurity";



const useTransactions = () => {
    const security = useSecurity()
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        ; (async () => {
            try {
                const result = await axios.get('/api/transactions')
                setTransactions(result.data)
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
    return { data: transactions }
}

export default useTransactions;