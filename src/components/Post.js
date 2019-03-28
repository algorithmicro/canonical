/* eslint-disable no-underscore-dangle */
import React from 'react';

export default ({ post }) => {
    const imgSrc = post._embedded['wp:featuredmedia'][0].source_url;
    const altText = post._embedded['wp:featuredmedia'][0].alt_text;
    const postTitle = post.title.rendered;
    const author = post._embedded.author[0];
    const date = new Date(post.date).toDateString();
    return (
        <div className="p-card--highlighted borderTopPurple">
            <h4 className="p-card__title">CLOUD AND SERVER</h4>
            <hr className="u-sv1" />
            <img src={imgSrc} alt={altText} />
            {/* eslint-disable-next-line react/no-danger */}
            <h3 className="blueH3" dangerouslySetInnerHTML={{ __html: postTitle }} />
            <p className="p-card__content">
                {'By '}
                <a href={author.link}>{author.name}</a>
                {` on ${date}`}
            </p>
            <hr className="u-sv1" />
            <a href={post.link} className="p-card__content u-no-margin">Article</a>
        </div>
    );
};
