import React from "react"
import { Link, useParams } from "react-router-dom"
import { Row, Col, Image, Card, ListGroup, Button } from "react-bootstrap"
import Rating from "../components/Rating"
import products from "../products.js"

export default function ProductScreen( props ) {
    const { id } = useParams() 
    const product = products.find(item => item._id === id)

    return(
        <>
            <Link className = "btn btn-light my-3" to="/">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt = {product.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating rating = {product.rating} numReviews = {product.numReviews} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock === 0 ? "Out of Stock" : "In Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0 ? true : false}>Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

            </Row>

        </>
    )
}