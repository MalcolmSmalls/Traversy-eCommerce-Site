import React from "react"
import { Card, NavItem } from "react-bootstrap"
import products from "../products"
import Rating from "./Rating"

export default function Product (props) {
    return (
        <Card className = "my-3 p-3 rounded">
            <a href={`/product/${props.item._id}`}>
                <Card.Img src={props.item.image} variant = 'top' />
            </a>

            <Card.Body>
                <Card.Title as="div">
                   <a href={`/product/${props.item._id}`}><strong>{props.item.name}</strong></a>
                </Card.Title>

                <Card.Text as="div">
                    <div className = "my-3">
                        <Rating rating = {props.item.rating} numReviews = {props.item.numReviews}/>

                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${props.item.price}
                </Card.Text>
            </Card.Body>

        </Card>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}