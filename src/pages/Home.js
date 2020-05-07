import React  from 'react';
import TextCard from '../components/TextCard';
import LinkListCard from '../components/LinkListCard';
import TextListCard from '../components/TextListCard';
import * as Contents from '../assets/Contents';

export default class Home extends React.Component {
    render() {
        return (
            <div>
            <TextCard title="Profile" items={Contents.Profile}></TextCard>
            <LinkListCard title="Application" items={Contents.Applications}></LinkListCard>
            <LinkListCard title="Problem" items={Contents.Problems}></LinkListCard>
            <TextListCard title="Activitiy" items={Contents.Activities}></TextListCard>
            <LinkListCard title="Paper" items={Contents.Papers}></LinkListCard>
            <TextListCard title="History" items={Contents.Histories}></TextListCard>
            </div>
        );
    }
}