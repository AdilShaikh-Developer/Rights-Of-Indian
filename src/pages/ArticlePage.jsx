import React from "react";
import { useParams } from "react-router-dom";

import { articles } from "../database/simplified-articles.json";

import "../stylesheets/article-page.css";

const ArticlePage = () => {
  const { articleNumber } = useParams();

  const article = articles.find(
    (a) => a.article_number === parseInt(articleNumber)
  );

  return (
    <main className="article-page">
      {article ? (
        <>
          <h1>
            Article {articleNumber}: {article.title}
          </h1>
          <h4>Constitutional Statement</h4>
          <ul className="constitution-statement">
            {article.statement.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>

          <h4>In Simple Terms</h4>
          <p>{article.explanation}</p>

          <div className="conversation-container">
            <h4 className="conversation-header">In Conversation</h4>
            <ul className="conversation">
              {article.conversation.map((sentence, index) => (
                <li key={index} className={sentence.person}>
                  <span>{sentence.person}</span>
                  {sentence.text}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <h3 style={{ textAlign: "center", margin: "15vh 0" }}>
          Article Not Found
        </h3>
      )}
    </main>
  );
};

export default ArticlePage;
