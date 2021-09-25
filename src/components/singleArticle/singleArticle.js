import React from "react"
import "./singleArticle.scss"
import PropTypes from 'prop-types';
import { Col, Container, Row } from "react-bootstrap";

const SingleArticle = ({ author, title, image, descritpion, published, url, created }) => {

    const date = new Date(published);
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' });
    const minutes = date.getMinutes()
    const hours = date.getHours()

    // const min = minutes < 10 ? 0 + minutes : minutes


    return (

        <div className="singleArticle">
            <a href={url} target="_blank">
                <div className={"wrapImg"}>
                    <img className="imageArticle" src={image ? image : `https://www.hambleden.org.uk/_UserFiles/Images/_News/27232-News.jpg`} />
                </div>
                <div>
                    <h4 className="title">{title}</h4>
                </div>
                {/* <div className={"description"}>
                        <h5>{descritpion}</h5>
                    </div> */}
                <div className={"authorAndDate"}>
                    <div className={"author"}>
                        <h5>Author:{author}</h5>
                    </div>
                    <div className={"date"}>
                        <p>{day}.</p>
                        <p>{month} </p>
                        <span><p>{hours}: </p><p>{minutes}</p></span>

                    </div>
                </div>
            </a>
        </div>

    )
}

// SingleArticle.defaultProps = {
//     author: author ? null : "author"
// };

export default SingleArticle