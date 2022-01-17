import React, { useState } from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, date, setAlert} = props;
  const [text, setText] = useState('Like');
  const [img, setImg] = useState("\u2661")
  const aniLike = () =>{
      if(text === "Like"){
        let newText = "Dislike"
        setText(newText)
        setImg("\u2764")
      }
      else{
        let newText = "Like"
        setText(newText)
        setImg("\u2661")
      }
  }

  const getLink = () =>{
      navigator.clipboard.writeText(imageUrl)
      setAlert("Success! The shareable link to the image is copied to the clipboard.")
  }
  return (
    <div className="card" style={{ width: "20rem" }}>
      <span className="position-absolute top-10 translate-middle badge rounded-pill text-dark" style={{ top: '97%', left: '93%', zIndex: 1, fontSize: "40px"}}>{img}</span>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}<strong>...</strong></p>
        <p className="text-info">- {new Date(date).toGMTString()}</p>
        <button type="button" className="btn btn-outline-dark" onClick={aniLike}>{text}</button>
        <button type="button" className="btn btn-outline-dark mx-3" onClick={getLink}>&#128203;</button>
      </div>
    </div>
  )

}

export default NewsItem
