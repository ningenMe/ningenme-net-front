import React  from 'react';
import {Typography,Link} from '@material-ui/core';
import {Badge} from 'react-bootstrap';

export default class Article extends React.Component {
    render() {
        return (
            <Typography align="left">
                <Badge variant="info" style={{margin: 6,padding: 6}}> {this.props.article.date}</Badge>
                <Link href={this.props.article.href} target="_blank">{this.props.article.name}</Link>
            </Typography>
        );
    }
}