// src/components/Wall.jsx
import React, { useState } from "react";
import { articlesData } from "./data/articlesData";

const Wall = () => {
  const [articles, setArticles] = useState(articlesData);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!newArticle.title || !newArticle.content) {
      alert("Title and content are required!");
      return;
    }

    // Create a new article entry
    const newEntry = {
      id: articles.length + 1,
      title: newArticle.title,
      content: newArticle.content,
      author: newArticle.author || "Anonymous",
      date: new Date().toLocaleDateString(),
    };

    // Update the articles list
    setArticles([newEntry, ...articles]);
    setNewArticle({ title: "", content: "", author: "" });
  };

  return (
    <div className=" bg-pink-100">
      <div className="p-6 container mx-auto min-h-screen">
        <h1 className="text-2xl text-center font-bold mb-4">Article Wall</h1>
        
        {/* New Article Form */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">Share Your Story</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newArticle.title}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <textarea
              name="content"
              placeholder="Write your article here..."
              value={newArticle.content}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded"
              rows="5"
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Your name (optional)"
              value={newArticle.author}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
            >
              Post Article
            </button>
          </form>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.length > 0 ? (
            articles.map((article) => (
              <div
                key={article.id}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  by {article.author} | {article.date}
                </p>
                <p>{article.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No articles yet. Be the first to share!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wall;
