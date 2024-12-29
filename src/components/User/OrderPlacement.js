import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "./OrderPlacement.css"; // Use a relevant CSS file for styling

const OrderPlacement = () => {
  const [orderDetails, setOrderDetails] = useState({
    product: "",
    quantity: "",
    paymentOption: "",
    deliveryAddress: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dairy Order placed:", orderDetails);
    // Add logic to handle dairy product order placement, e.g., API call
  };

  return (
    <Container className="dairy-order-placement-container mt-4">
      <Card className="dairy-order-placement-card shadow-lg">
        <Card.Header className="dairy-order-placement-card-header text-center">
          <h3>Place Your Dairy Order</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Product Selection */}
            <Form.Group controlId="product" className="mb-3">
              <Form.Label>Dairy Product</Form.Label>
              <Form.Select
                name="product"
                value={orderDetails.product}
                onChange={handleChange}
                required
              >
                <option value="">Select Dairy Product</option>
                <option value="Milk">Milk</option>
                <option value="Cheese">Cheese</option>
                <option value="Butter">Butter</option>
                <option value="Cream">Cream</option>
                <option value="Yogurt">Yogurt</option>
                <option value="Ghee">Ghee</option>
              </Form.Select>
            </Form.Group>

            {/* Quantity Input */}
            <Form.Group controlId="quantity" className="mb-3">
              <Form.Label>Quantity (liters or kg)</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                placeholder="Enter quantity"
                value={orderDetails.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Payment Option */}
            <Form.Group controlId="paymentOption" className="mb-3">
              <Form.Label>Payment Option</Form.Label>
              <Form.Select
                name="paymentOption"
                value={orderDetails.paymentOption}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Option</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Online Payment">Online Payment</option>
              </Form.Select>
            </Form.Group>

            {/* Delivery Address */}
            <Form.Group controlId="deliveryAddress" className="mb-3">
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control
                as="textarea"
                name="deliveryAddress"
                rows={3}
                placeholder="Enter delivery address"
                value={orderDetails.deliveryAddress}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Additional Notes */}
            <Form.Group controlId="additionalNotes" className="mb-3">
              <Form.Label>Additional Notes (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                name="additionalNotes"
                rows={2}
                placeholder="Enter any additional instructions"
                value={orderDetails.additionalNotes}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="dairy-order-placement-button"
              >
                Place Order
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderPlacement;
