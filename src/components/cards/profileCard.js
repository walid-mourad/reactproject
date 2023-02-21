
import React from 'react'
import { Card, CardImg, Col, Container, Row } from 'react-bootstrap'

export default function ProfileCard() {
  return (
    <Card>
        
        <Container>
            <Row>
                <Col sm={4}>
                    <Container className='profile-header-container'>
                        <Container className='profile-header-img'>
                            <CardImg className='img-circle' src="https://picsum.photos/200/300"/>
                        </Container>
                    </Container>
                </Col>
                <Col sm={8}>
                    <Card.Title>
                            walid
                    </Card.Title>
                </Col>
            </Row>
        </Container>
    </Card>
    
  )
}
