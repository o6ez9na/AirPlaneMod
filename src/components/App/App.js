import React, { useState, useEffect } from 'react'
import axios from 'axios'

const src2 = 'https://air-transportation-render-api.onrender.com/aviation_personnel/'
export default function App() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios
            .get(src2)
            .then(data => {
                setArticles(data.data)
            })
    }, [])


    return (
        <div className='App'>
            {articles.map(article => {
                return (
                <div>
                    {article.first_name}
                </div>
                )
            })
            }
        </div>
    )
}