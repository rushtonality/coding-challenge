import React from "react";
import { Link } from 'react-router-dom';

class ArticleItem extends React.Component {

    render() {
        return (
        <div>
            <h2>
            {this.props.article.title}
            </h2>
            <Link className="btn btn-secondary" to={`/article/edit/${this.props.article.id}`}>Edit</Link>

            <div className="preformatted m-4">
                {this.props.article.description}
            </div>
        </div>
        );
    }
}

export default ArticleItem;