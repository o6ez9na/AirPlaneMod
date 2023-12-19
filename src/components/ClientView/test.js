
const axios = require('axios').default;
axios.get('https://air-transportation-render-api.onrender.com/aviation_personnel/')
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
    const src2 = 'https://air-transportation-render-api.onrender.com/aviation_personnel/'
   
        const [articles, setArticles] = useState([])
    
        useEffect(() => {
            axios
                .get(src2)
                .then(data => {
                    setArticles(data.data)
                })
        }, [])
        {
            articles.map(article => {
                return (
                    <div>
                        {article.first_name}
                    </div>
                )
            })
        }