import React from "react"
import "./singleArticle.scss"
import PropTypes from 'prop-types';

const SingleArticle = ({ author, title, image, published, url,key }) => {

    const date = new Date(published);
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' });
    const minutes = date.getMinutes()
    const hours = date.getHours()



    return (

        <div className="singleArticle" key={key}>
            <a href={url} target="_blank">
                <div className={"wrapImg"}>
                    <img className="imageArticle" src={image ? image : `https://www.hambleden.org.uk/_UserFiles/Images/_News/27232-News.jpg`} alt="image"/>
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
                        {/* <span><p>{hours}: </p><p>{minutes}</p></span> */}

                    </div>
                </div>
            </a>
        </div>

    )
}

SingleArticle.propTypes = {
    author: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    published: PropTypes.string,
    url: PropTypes.string

}
export default SingleArticle