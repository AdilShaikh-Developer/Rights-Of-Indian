import React, { useState } from "react";
import { Link } from "react-router-dom";

import constitution from "../database/constitution-partwise.json";

import "../stylesheets/simplified-constitution.css";

const SimplifiedConstitution = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className="simplified-constitution-page">
      <div className="utility-container">
        <input
          type="text"
          placeholder="Search by Article Name, Number, or Keywords..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <select name="filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filter by Part...</option>
          {constitution.constitution.map((part) => (
            <option key={part.title} value={part.title}>
              {part.part}. {part.title}
            </option>
          ))}
        </select>
      </div>
      <div className="articles-container">
        {constitution ? (
          constitution.constitution
            .filter((part) => part.title.includes(filter))
            .map((part) =>
              part.articles
                .filter(
                  (article) =>
                    article.title
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    article.number.toString().includes(search)
                )
                .map((article) => (
                  <Link
                    to={`/simplified-constitution/article/${article.number}`}
                    key={article.number}
                    className="article"
                  >
                    <p className="article-number">
                      <span>Article No:</span> {article.number}
                    </p>
                    <p className="article-title">
                      <span>Article:</span> {article.title}
                    </p>
                    <p className="article-part">
                      <span>Part No:</span> {part.part}
                    </p>
                  </Link>
                ))
            )
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </div>
  );
};

export default SimplifiedConstitution;
