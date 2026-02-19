import React, { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

function ArticleManager() {
  const [articles, setArticles] = useState([
    { id: 1, title: "First", summary: "First summary" },
    { id: 2, title: "Second", summary: "Second summary" },
  ]);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  function onClickAdd() {
    if (!title.trim() || !summary.trim()) return;

    const newArticle = {
      id: Date.now(),
      title: title.trim(),
      summary: summary.trim(),
    };

    setArticles([newArticle, ...articles]);
    setTitle("");
    setSummary("");
  }

  function onClickRemove(id) {
    setArticles(articles.filter((a) => a.id !== id));
  }

  return (
    <div>
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />

      <ArticleList articles={articles} onClickRemove={onClickRemove} />
    </div>
  );
}

export default ArticleManager;
