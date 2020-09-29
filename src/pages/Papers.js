import React  from 'react';
import LinkListCard from '../components/LinkListCard';
import * as Contents from '../assets/Contents';

export default class Home extends React.Component {
    render() {
        return (
            <div>
            <LinkListCard title="Papers" items={Contents.Papers}></LinkListCard>
            </div>
        );
    }
}