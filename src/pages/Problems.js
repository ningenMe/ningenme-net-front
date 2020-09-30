import React  from 'react';
import LinkListCard from '../components/LinkListCard';
import * as Contents from '../assets/Contents';

export default class Problems extends React.Component {
    render() {
        return (
            <div>
            <LinkListCard title="Problem" items={Contents.Problems}></LinkListCard>
            </div>
        );
    }
}