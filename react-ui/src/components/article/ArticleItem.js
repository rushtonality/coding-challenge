import React from "react";
import { Link } from 'react-router-dom';

class ArticleItem extends React.Component {

    render() {
        return (
        <div>
            <h2>
            {this.props.article.title}
            &nbsp;
            <Link className="btn btn-primary" to={`/article/edit/${this.props.article.id}`}>Edit</Link>
            </h2>

            <div className="preformatted">
                {this.props.article.description}
            </div>
        </div>
        );
    }
}

export default ArticleItem;