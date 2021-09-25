import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import SingleArticle from "../singleArticle/SingleArticle";

const TechnologyNews = () => {
    const [hits, setHits] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [isLoaded, setisLoaded] = useState(false);
    const [currentPage, setcurrentPage] = useState(0);
    const [query, setQuery] = useState("");
    const [offsetPage, setOffsetPage] = useState(0);

    const URL = `http://api.mediastack.com/v1/news?access_key=cdd4ecce3022c69e56a07e8ca938695a&languages=en&sort=published_desc&offset=${offsetPage}&keywords=${query}&categories=technology&limit=28`;



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
        count += 28
        setOffsetPage(count)
        setisLoaded(false)
        handleFetch();
    }
    const previous = () => {
        var count = offsetPage
        count -= 28
        if (count >= 0) {
            setOffsetPage(count)
            setisLoaded(false)
            handleFetch()
        } else {
            count = 0
            alert("this is first page")
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
                        <Col xs="12" sm="9" md="6" lg="3">
                            <SingleArticle
                                url={item.url}
                                title={item.title}
                                author={item.author}
                                image={item.image}
                                descritpion={item.description}
                                published={item.published_at}
                            />
                        </Col>
                    );
                })

            ) : (
                <div></div>
            )}
        </div>
    </div>
    );
}

export default TechnologyNews