import React  from 'react';
import {Box,Card,CardContent,Typography} from '@material-ui/core';

export default class TextListCard extends React.Component {
    render() {
        const listItems = this.props.items.map((item) =>
            <Typography align="left">
                {item}
            </Typography>
        );
        return (
            <Box p={1}>
                <Card gutterbottom="true" style={{ backgroundColor: '#D7EEFF'}}>
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