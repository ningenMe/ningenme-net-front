import React  from 'react';
import {Box,Card,CardContent,Typography,Link} from '@material-ui/core';

export default class LinkListCard extends React.Component {
    render() {
        const listItems = this.props.items.map((item) =>
            <Typography align="left">
                ・
                <Link href={item.href} target="_blank">
                    {item.name}
                </Link>
            </Typography>
        );
        return (
            <Box p={1}>
                <Card gutterBottom style={{ backgroundColor: '#D7EEFF'}}>
                    <Typography variant="h6" align="left" style={{ backgroundColor: '#222222', color: '#FFFFFF'}}>
                        {this.props.title}
                    </Typography>
                    <CardContent>
                        {listItems}
                    </CardContent>
                </Card> 
            </Box>
        );
    }
}