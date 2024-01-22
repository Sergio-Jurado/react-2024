import { useState } from "react";
import { useEffect } from "react";
function useDataApi(apiEndPoint) {
    useEffect(() => {
        const [data, setData] = useState(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = uEeState(null)
        const fetchData = async () => {
            try {
                const response = await fetchData(apiEndPoint);
                if (!response.ok) throw new Error("Fetching data failed")
                const result = await response.json();
                setData(result)
            } catch (e) {
                throw new Error("Fetching data failed")
            }
        }
    }, [])

}
export default useDataApi;