import React  from 'react';
import LinkListCard from '../components/LinkListCard';
import * as Contents from '../assets/Contents';

export default class Home extends React.Component {
    render() {
        return (
            //Applications
            <LinkListCard title="Application" items={Contents.Applications}></LinkListCard>
        );
    }
}