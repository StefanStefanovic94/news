import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SingleArticle from "../singleArticle/SingleArticle";

const SportNews = () => {
    const [hits, setHits] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [isLoaded, setisLoaded] = useState(false);
    const [currentPage, setcurrentPage] = useState(0);
    const [query, setQuery] = useState("");
    const [offsetPage, setOffsetPage] = useState(0);

    const URL = `http://api.mediastack.com/v1/news?access_key=a8ef5a60d7c6e5e9390d3f0a1bce22df&languages=en&sort=published_desc&keywords=${query}&categories=sports&offset=${offsetPage}`;



    const handleFetch = () => {
        fetch(URL)
            .then(response => response.json())
            .then(body => {
                console.log(body);
                setHits([...body.data]);
                setPageCount(body.pagination.total);
                setisLoaded(true);

            })
            .catch(error => console.error('Error', error));
    };


    const handlePageChange = (selectedObject) => {
        setcurrentPage(selectedObject.selected);
        handleFetch();

    };
    useEffect(() => {
        handleFetch()
    }, [isLoaded]);

    const next = () => {
        var count = offsetPage
        count += 25
        setOffsetPage(count)
        setisLoaded(false)
        handleFetch();
    }
    const previous = () => {
        var count = offsetPage
        count -= 25
        if (count >= 0) {
            setOffsetPage(count)
            setisLoaded(false)
            handleFetch()
        } else {
            count = 0
        }
    }



    return (<div>
        <div>
            <input className="searchBar" placeholder="search for news..." type="text" onChange={(event) => setQuery(event.target.value)} />
            <button className="searchButton" onClick={handleFetch}>Search</button>
        </div>
        <div className="pagination">
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
        <div className="allArticles">
            {isLoaded ? (
                hits.map((item) => {
                    return (
                        <SingleArticle
                            url={item.url}
                            title={item.title}
                            author={item.author}
                            image={item.image}
                            descritpion={item.description}
                            published={item.published_at}
                        />
                    );
                })

            ) : (
                <div></div>
            )}
        </div>

    </div>
    );
}

export default SportNews