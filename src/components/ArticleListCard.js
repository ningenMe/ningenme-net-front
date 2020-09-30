import React  from 'react';
import {Box,Card,CardContent,Typography,Link} from '@material-ui/core';
import Article from '../components/Article'

export default class ArticleListCard extends React.Component {
    render() {
        const listItems = this.props.items.map((item) =>
            <li>
                <Article article={item}></Article>
            </li>
        );
        return (
            <Box p={1}>
                <Card gutterBottom style={{ backgroundColor: '#D7EEFF'}}>
                    <Typography variant="h6" align="left" style={{ backgroundColor: '#222222', color: '#FFFFFF'}}>
                        {this.props.title}
                    </Typography>
                    <CardContent>
                        <ul> {listItems} </ul>
                    </CardContent>
                </Card> 
            </Box>
        );
    }
}