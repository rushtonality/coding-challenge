import React from "react";
import ArticleForm from "./ArticleForm";
import { handleErrors, baseUrl } from "../../utils/HttpUtils";

class AddArticlePage extends React.Component {
    
    submit = values => {
        fetch(`${baseUrl}/article`, {
            method: 'POST',
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
        return (
            <ArticleForm onSubmit={this.submit} />
        );
    }
}
    
export default AddArticlePage;
