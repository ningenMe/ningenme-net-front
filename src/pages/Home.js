import React  from 'react';
import TextCard from '../components/TextCard';
import LinkListCard from '../components/LinkListCard';
import TextListCard from '../components/TextListCard';
import ArticleListCard from '../components/ArticleListCard'
import * as Contents from '../assets/Contents';

export default class Home extends React.Component {
    render() {
        return (
            <div>
            <TextCard title="Profile" items={Contents.Profile}></TextCard>
            <LinkListCard title="Creation" items={Contents.Applications}></LinkListCard>
            <ArticleListCard title="Article" items={Contents.Articles}></ArticleListCard>
            <TextListCard title="Activitiy" items={Contents.Activities}></TextListCard>
            <TextListCard title="History" items={Contents.Histories}></TextListCard>
            </div>
        );
    }
}