import React from "react";

class ArticleItem extends React.Component {

    render() {
        return (
        <div>
            <h2>{this.props.article.title}</h2>
            <div className="preformatted">
                {this.props.article.description}
            </div>
        </div>
        );
    }
}

export default ArticleItem;