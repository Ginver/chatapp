import React from "react";
import { Tab, Nav } from "react-bootstrap";

export default function Sidebar({ id }) {

    const CONVERSATION_KEY = 'conversation';
    const CONTACTS_KEY = 'contacts';

    return (
        <div style={{ width: '250px' }} className="d-flex flex-column">
            <Tab.Container>

                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Tab.Container>
        </div>
    )
};