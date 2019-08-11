import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Lorem ipsum 1",
        author: "Paulo Cohelo",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenaslentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultrlentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultr malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula."
    },
    {
        id: 2,
        title: "Lorem ipsum 2",
        author: "Paulo Cohelo II",
        text: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula."
    }, {
        id: 3,
        title: "Lorem ipsum 3",
        author: "Paulo Cohelo III",
        text: "Lorem ipsum dolor sit amet enim. Etlentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultriam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula."
    }
]

const HomePage = () => {
    const artlist = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">{artlist}</div>
    );
}

export default HomePage;
