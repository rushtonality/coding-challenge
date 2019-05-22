import React from "react";
import ArticleForm from "./ArticleForm";

class AddArticlePage extends React.Component {
    
    submit = values => {
        console.log(values)
        this.props.history.push("/");
    }

    render() {
        return (
            <ArticleForm onSubmit={this.submit} />
        );
    }
}
    
export default AddArticlePage;
