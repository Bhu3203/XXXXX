import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Image, Modal, Form } from 'react-bootstrap';

const MyProfile = () => {
    const [user, setUser] = useState({
        name: "Farmer",
        email: "farmer@example.com",
        phone: "+91912345678",
        address: "123 Main Street, City, Country",
        role: "Dudha Seller",
        image: "https://via.placeholder.com/150", // Placeholder image
    });

    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState({ ...user });

    const handleEditProfile = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setEditData({ ...editData, image: URL.createObjectURL(e.target.files[0]) });
        }
    };

    const handleSaveChanges = () => {
        setUser({ ...editData });
        setShowModal(false);
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg border-0">
                        <Card.Body>
                            <Row>
                                {/* Profile Picture */}
                                <Col md={4} className="d-flex justify-content-center align-items-center">
                                    <Image 
                                        src={user.image} 
                                        roundedCircle 
                                        fluid 
                                        style={{ width: "150px", height: "150px", objectFit: "cover" }} 
                                    />
                                </Col>

                                {/* Profile Details */}
                                <Col md={8}>
                                    <h3 className="text-center text-md-start">{user.name}</h3>
                                    <hr />
                                    <p>
                                        <strong>Email:</strong> {user.email}
                                    </p>
                                    <p>
                                        <strong>Phone:</strong> {user.phone}
                                    </p>
                                    <p>
                                        <strong>Address:</strong> {user.address}
                                    </p>
                                    <p>
                                        <strong>Role:</strong> {user.role}
                                    </p>
                                    <div className="text-center text-md-end">
                                        <Button variant="primary" onClick={handleEditProfile}>
                                            Edit Profile
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Edit Profile Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={editData.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={editData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={editData.phone}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={editData.address}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                name="role"
                                value={editData.role}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default MyProfile;
