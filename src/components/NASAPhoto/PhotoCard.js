import React from "react";
import styled from "styled-components";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const Thumbnail = styled.div`
position: relative;
width: 100%;
margin-left: auto;
margin-right: auto;
margin-top: 10%;
`;

const Caption = styled.div`
position: absolute;
    top: 75%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: lightgrey;
    font-size: 2.0rem;
    font-weight: 900;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const DropInfo = styled.div`
width: 40%;
margin-left: auto;
margin-right: auto;
`;



const PhotoCard = props => {
    return (
        <div className="photo-nasa" >
            <Thumbnail>
                <img src={props.data.url} alt='NASA pick of the day' />
            </Thumbnail>
            <DropInfo>
                <Button color="secondary" id="toggler" style={{ marginBottom: '1rem' }}>
                    {props.data.title}
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
                            <p>{props.data.date}</p>
                            {props.data.explanation}
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </DropInfo>
            <div className="bottom-quote">
                <Caption>
                    <p>"{props.qdata.quote}"</p>
                    <p>- {props.qdata.author}</p>
                </Caption>
            </div>
        </div>
    );
};
export default PhotoCard;

