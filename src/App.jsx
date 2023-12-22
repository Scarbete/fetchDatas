import { useEffect, useState } from "react"
import classes from './App.module.sass'



export const App = () => {
    const [ data, setData ] = useState([])
    const [ limit, setLimit ] = useState(10)
    const [ page, setPage ] = useState(5)

    const asyncGetData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
            return response.json()
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        asyncGetData()
            .then(data => {
                setData(data.map(item => item.userId))
            })
    }, [])

    console.log(data)

    return (
        <div className={classes.dataWrapper}>
            {data.map(item =>
                <div key={Date.now()}>
                    {item}
                </div>
            )}
        </div>
    )
}