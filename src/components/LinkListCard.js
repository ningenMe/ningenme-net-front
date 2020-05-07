import React  from 'react';
import {Card,CardContent,Typography,Link} from '@material-ui/core';

export default class LinkListCard extends React.Component {
    render() {
        const listItems = this.props.items.map((item) =>
            <Typography>
                ・
                <Link href={item.href}>
                    {item.name}
                </Link>
            </Typography>
        );
        return (
            <Card variant="outlined">
                <Typography variant="h6" align="left" style={{ backgroundColor: '#222222', color: '#FFFFFF'}}>
                    {this.props.title}
                </Typography>
                <CardContent>
                    {listItems}
                </CardContent>
            </Card> 
        );
    }
}