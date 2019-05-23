import React from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../../actions/ArticleActions";
import ArticleForm from "./ArticleForm";
import { handleErrors } from "../../utils/HttpUtils";

class EditArticlePage extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.dispatch(fetchArticle(id));
    }

    submit = values => {
        let id = this.props.match.params.id;
        fetch(`http://localhost:4000/api/article/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
            .then(handleErrors)
            .then(res => {
                this.props.history.push("/");
            })
            .catch(error => console.log(error));
    }

    render() {
        const { data, loading, error } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <ArticleForm onSubmit={this.submit} initialValues={data} />
        );
    }
}

const mapStateToProps = state => ({
    data: state.article.data,
    loading: state.article.loading,
    error: state.article.error
});

export default connect(mapStateToProps)(EditArticlePage);
