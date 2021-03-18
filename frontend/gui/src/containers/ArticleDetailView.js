import React, { Component } from "react";

import axios from "axios";
import { Card } from "antd";
import CustomForm from "./Form";

class ArticleDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: {},
    };
  }

  componentDidMount() {
    const articleId = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleId}`).then((res) => {
      this.setState({ article: res.data });
    });
  }
  handleDelete = (event) => {
    const articleId = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleId}`);
  };
  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <CustomForm
          requestType="put"
          articleID={this.props.match.params.articleID}
          btnText="Update"
        />
        <form>
          <button type="danger submit" onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default ArticleDetailView;
