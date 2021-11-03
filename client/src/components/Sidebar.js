import React, {useState} from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

const CONVERSATION_KEY = 'conversation';
const CONTACTS_KEY = 'contacts';

// sidebar takes the id - bc it needs to display to the user so they can share it with others
export default function Sidebar({ id }) {
    // by default set CONVERSATION_KEY in the useState
    const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);

    // modelOpen set false by default bc we dont want the modal to be open when we start the conversation:
    const [modalOpen, setModalOpen] = useState(false);

    const conversationsOpen = activeKey === CONVERSATION_KEY;

    function closeModal() {
        setModalOpen(false)
    }

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

            {/*   create content inside the tabs:*/}
                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATION_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your Id: <span className="text-muted">{id}</span>
                </div>

            {/*    create button to create new contact as well as new conversaations:*/}
                <Button onClick={() => setModalOpen(true)}
                className="rounded-0">
                    New {conversationsOpen ? 'Conversation' : 'Contact'}
                </Button>

            </Tab.Container>

            {/*create Modal: to create a new conversation Modal and/or a new contact Modal*/}
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ?
                    <NewConversationModal closeModal={closeModal}/> :
                    <NewContactModal closeModal={closeModal}/>
                }
            </Modal>


        </div>
    )
};