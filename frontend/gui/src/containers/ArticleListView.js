import React, { Component } from 'react'

import Article from '..//components/Article';
import axios from 'axios';
import CustomForm from './Form';



class ArticleListView extends Component {

    state =  {
        article :[]
    }

    componentDidMount()
    {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res=>{
            this.setState({article:res.data})
            console.log(res.data); 
        })
      
    }
    render() {
        return (
            <div>
            <Article data ={this.state.article}/>
            <h2>Create a Post</h2>
            <CustomForm requestType="post" articleID={null} btnText="Create"/>
            </div>
        )
    }
}

export default ArticleListView;