import React  from 'react';
import {Box,Card,CardContent,Typography,Button} from '@material-ui/core';
import Article from '../components/Article'

export default class ArticleListCard extends React.Component {
    render() {
        let num = this.props.num;
        if(typeof num === 'undefined') num = this.props.items.length;

        const listItems = this.props.items.slice(0,num).map((item) =>
            <li key={item.name}>
                <Article article={item}></Article>
            </li>
        );

        let seeMoreButton = (
            <Button variant="contained" color="primary" style={{margin: 6,padding: 6}} href={this.props.href}>
                See more
            </Button>
        );
        if(typeof this.props.href === 'undefined') seeMoreButton = null;
        
        return (
            <Box p={1}>
                <Card gutterbottom="true" style={{ backgroundColor: '#D7EEFF'}}>
                    <Typography variant="h6" align="left" style={{ backgroundColor: '#222222', color: '#FFFFFF'}}>
                        {this.props.title}
                    </Typography>
                    <CardContent style={{margin: 1,padding: 2}}>
                        <ul> {listItems} </ul>
                    </CardContent>
                    {seeMoreButton}
                </Card> 
            </Box>
        );
    }
}