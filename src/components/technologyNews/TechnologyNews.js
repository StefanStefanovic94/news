import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import SingleArticle from "../singleArticle/singleArticle";

const TechnologyNews = () => {
    const [dataNews, setdataNews] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const [offsetPage, setOffsetPage] = useState(0);
    const [sort, setSort] = useState("published_desc")

    const key = "5a5dfe9eab67819477f667e8b7679797"

    const URL = `http://api.mediastack.com/v1/news?access_key=${key}&languages=en&offset=${offsetPage}&keywords=${query}&categories=technology&limit=28&sort=${sort}`;

    const handleFetch = () => {
        fetch(URL)
            .then(response => response.json())
            .then(body => {
                console.log(body);
                setdataNews([...body.data]);
                setisLoaded(true);

            })
            .catch(error => console.error('Error', error));
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

    const sortedAsc = () => {
        if (sort === "published_desc") {
            setSort("published_asc")
            setisLoaded(false)
            handleFetch()
        }
    }

    const sortedDesc = () => {
        if (sort === "published_asc") {
            setSort("published_desc")
            setisLoaded(false)
            handleFetch()
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
        <div className="sort">
            <button className="desc" onClick={sortedDesc}>^</button>
            <button className="asc" onClick={sortedAsc}>^</button>
        </div>
        <div className="allArticles">
            {
                dataNews.map((item) => {
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

            }
        </div>
    </div>
    );
}

export default TechnologyNews