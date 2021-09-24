import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SingleArticle from "../singleArticle/SingleArticle";

const SportNews = () => {
    const [hits, setHits] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [isLoaded, setisLoaded] = useState(false);
    const [currentPage, setcurrentPage] = useState(0);
    const [query, setQuery] = useState("");
    const [offsetPage, setOffsetPage] = useState(0);

    const URL = `http://api.mediastack.com/v1/news?access_key=98dc895c193ccd95ea40c83349780be8&languages=en&sort=published_desc&offset=${currentPage}&keywords=${query}&categories=sports`;



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


    return (<div>
        <div>
            <label>Search</label>
            <input type="text" onChange={(event) => setQuery(event.target.value)} />
            <button onClick={handleFetch}>Get Data</button>
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
        {isLoaded ? (
            <ReactPaginate
                pageCount={pageCount}
                pageRange={2}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={'container'}
                previousLinkClassName={'page'}
                breakClassName={'page'}
                nextLinkClassName={'page'}
                pageClassName={'page'}
                disabledClassNae={'disabled'}
                activeClassName={'active'}
            />
        ) : (
            <div>Nothing to display</div>
        )}

    </div>
    );
}

export default SportNews