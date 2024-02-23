import React from "react";
import "../../styles/home.css";
export default function Card({
  imgSrc,
  spanTag,
  constentHead,
  constentPara,
  views,
  reads,
  comment,
  color
}) {
  return (
    <div className="home-card">
      <div className="home-card__header">
        <img src={imgSrc} alt="sample1" />
      </div>
      <div className="home-card__body">
        <span style={{ color: color }} className="home-card__body__date">
          {spanTag}
        </span>
        <h1 className="home-card__body__head">{constentHead}</h1>
        <p className="home-card__body__content">{constentPara}</p>
      </div>
      <div style={{ backgroundColor: color }} className="home-card__footer">
        <div className="home-card__Footer__first">
          <div>
            <p>{views}</p>
          </div>
          <label>Reads</label>
        </div>
        <div className="home-card__Footer__second">
          <div>
            <p>{reads}</p>
          </div>
          <label>Views</label>
        </div>
        <div className="home-card__Footer__third">
          <div>
            <p>{comment}</p>
          </div>
          <label>Comments</label>
        </div>
      </div>
    </div>
  );
}
