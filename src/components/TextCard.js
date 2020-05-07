import React  from 'react';
import {Box,Card,CardContent,Typography} from '@material-ui/core';

export default class LinkListCard extends React.Component {
    render() {
        const listItems = this.props.items.text.map((item) =>
        <Typography>
            {item}
        </Typography>
        );
        return (
            <Box p={1}>
                <Card  pos= {{marginBottom : 12}} style={{ backgroundColor: '#D7EEFF'}}>
                    <Typography variant="h6" align="left" style={{ backgroundColor: '#222222', color: '#FFFFFF'}}>
                        {this.props.title}
                    </Typography>
                    <Typography variant="h4" align="left">
                        {this.props.items.name}
                    </Typography>
                    <CardContent>
                        {listItems}
                    </CardContent>
                </Card> 
            </Box>
        );
    }
}