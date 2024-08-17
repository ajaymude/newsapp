import React, { useEffect, useState } from 'react'

const Main = ({ search }) => {
    const [news, setNews] = useState([]);
    console.log(news)


    useEffect(() => {
        getNews(search);
    }, 
    [search]);


    const getNews = async (search) => {

        const api = await fetch("https://newsapi.org/v2/top-headlines?q=" + search + "&apiKey=67778b82cab549428252d9b9777dded5");
        const data = await api.json();

        console.log('data', data)
        
        setNews(data.articles);
    };
    const img = "https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg";

    const setImage = event => {
        event.target.src = img
    }


    return (
        <div className='news'>
            <div className='row'>
                {

                    news.map((item) => (

                        <div className=" col-lg-4 col-md-6 news-column">
                            <div className='card'>
                                {item.urlToImage !== null
                                    ? <img className='card-img-top' src={item.urlToImage} alt='' onError={setImage} />
                                    : <img className='card-img-top' src={img} alt="" />
                                }
                                <h6 className='card-header' dangerouslySetInnerHTML={{ __html: item.title }} />
                                <div className='card-body'>

                                    <p style={{ fontSize: 14 }} className='news-text'>{item.description}</p>
                                    <button className='btn btn-success'>
                                        <a href={item.url} style={{ textDecoration: "none", color: "white" }}>More</a>
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Main
