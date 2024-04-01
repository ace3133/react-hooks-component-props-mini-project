

import React from "react";
import Header from "./Header"
import ArticleList from "./ArticleList";
import About from "./About";
import Article from "./Article";
import blogData from "../data/blog";




console.log(blogData);
const blogName = "Underreacted"
function App() {
  return (
    <div className="App">
       <Header name={blogName} />
       <About
        image="https://via.placeholder.com/215"
        about="About this Blog."
      />
     <ArticleList posts={blogData.posts} />
     <Article
  title={"Components 101"}
  date={"December 15, 2020"}
  preview={"Setting up the building blocks of your site"}
/>


    </div>
  );
}


export default App;
