import React from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../../actions/ArticleActions";
import ArticleForm from "./ArticleForm";

class EditArticlePage extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.dispatch(fetchArticle(id));
    }
    
    submit = values => {
        console.log(values)
        this.props.history.push("/");
    }

    render() {
        const {data, loading, error } = this.props;
    
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
