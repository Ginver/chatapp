import React, {useState} from "react";
import { Tab, Nav } from "react-bootstrap";

const CONVERSATION_KEY = 'conversation';
const CONTACTS_KEY = 'contacts';

// sidebar takes the id - bc it needs to display to the user so they can share it with others
export default function Sidebar({ id }) {
    // by default set CONVERSATION_KEY in the useState
    const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);

    return (
        <div style={{ width: '250px' }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>

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