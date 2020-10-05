import React  from 'react';
import ArticleListCard from '../components/ArticleListCard';
import * as Contents from '../assets/Contents';

export default class Blogs extends React.Component {
    render() {
        return (
            <div>
            <ArticleListCard title="Articles" items={Contents.Articles}></ArticleListCard>
            </div>
        );
    }
}