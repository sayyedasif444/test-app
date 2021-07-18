import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './ChatList.css';

const ChatList = ({
  handleSetIndiChat,
  indiChat,
  messagesEndRef,
  setIndiChat,
  setCArrawUpdate,
  carrowUpdate,
}) => {
  const [arrowUpdate, setArrawUpdate] = useState('up');

  const accordionChat = (
    <Accordion
      defaultActiveKey='0'
      className={
        carrowUpdate === 'down'
          ? 'custom-accordion-chat shadow-sm width-340'
          : 'custom-accordion-chat shadow-sm'
      }
    >
      <Card className='custom-accordion-card'>
        <Accordion.Toggle
          as={Card.Header}
          eventKey='0'
          onClick={(e) => {
            carrowUpdate === 'down'
              ? setCArrawUpdate('up')
              : setCArrawUpdate('down');
          }}
        >
          {' '}
          <div className='chat_img_messg'>
            {' '}
            <img
              className={carrowUpdate === 'down' ? '' : 'd-none'}
              src='/assets/image/user-profile.png'
              alt='Matt'
            />{' '}
          </div>
          <span style={{ verticalAlign: 'middle' }}>Matt Mardock</span>
          <i
            className='ml-8 fa fa-times-circle cross-icon'
            onClick={(e) => {
              setIndiChat(false);
            }}
          ></i>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body className='p-0 '>
            <div className='message-type pt-6 pl-6 pr-6 pb-0'>
              <div id='message-type'>
                <div className='incoming_msg'>
                  <div className='incoming_msg_img'>
                    {' '}
                    <img
                      src='https://ptetutorials.com/images/user-profile.png'
                      alt=''
                    />{' '}
                  </div>
                  <div className='received_msg'>
                    <div className='received_withd_msg'>
                      <p>Test, which is a new approach to have</p>
                      <span className='time_date'> 11:01 AM | Yesterday</span>
                    </div>
                  </div>
                </div>
                <div className='outgoing_msg'>
                  <div className='sent_msg'>
                    <p>Test which is a new approach to have all solutions</p>
                    <span className='time_date'> 11:01 AM | June 9</span>{' '}
                  </div>
                </div>
                <div className='incoming_msg'>
                  <div className='incoming_msg_img'>
                    {' '}
                    <img
                      src='https://ptetutorials.com/images/user-profile.png'
                      alt=''
                    />{' '}
                  </div>
                  <div className='received_msg'>
                    <div className='received_withd_msg'>
                      <p>Test, which is a new approach to have</p>
                      <span className='time_date'> 11:01 AM | Yesterday</span>
                    </div>
                  </div>
                </div>
                <div className='outgoing_msg'>
                  <div className='sent_msg'>
                    <p>Test which is a new approach to have all solutions</p>
                    <span className='time_date'> 11:01 AM | June 9</span>{' '}
                  </div>
                </div>
                <div className='incoming_msg'>
                  <div className='incoming_msg_img'>
                    {' '}
                    <img
                      src='https://ptetutorials.com/images/user-profile.png'
                      alt=''
                    />{' '}
                  </div>
                  <div className='received_msg'>
                    <div className='received_withd_msg'>
                      <p>Test, which is a new approach to have</p>
                      <span className='time_date'> 11:01 AM | Yesterday</span>
                    </div>
                  </div>
                </div>
                <div className='outgoing_msg'>
                  <div className='sent_msg'>
                    <p>Test which is a new approach to have all solutions</p>
                    <span className='time_date'> 11:01 AM | June 9</span>{' '}
                  </div>
                </div>
                <div className='incoming_msg'>
                  <div className='incoming_msg_img'>
                    {' '}
                    <img
                      src='https://ptetutorials.com/images/user-profile.png'
                      alt=''
                    />{' '}
                  </div>
                  <div className='received_msg'>
                    <div className='received_withd_msg'>
                      <p>Test, which is a new approach to have</p>
                      <span className='time_date'> 11:01 AM | Yesterday</span>
                    </div>
                  </div>
                </div>
                <div className='outgoing_msg'>
                  <div className='sent_msg'>
                    <p>Test which is a new approach to have all solutions</p>
                    <span className='time_date'> 11:01 AM | June 9</span>{' '}
                  </div>
                </div>
                <div className='incoming_msg'>
                  <div className='incoming_msg_img'>
                    {' '}
                    <img
                      src='https://ptetutorials.com/images/user-profile.png'
                      alt=''
                    />{' '}
                  </div>
                  <div className='received_msg'>
                    <div className='received_withd_msg'>
                      <p>Test, which is a new approach to have</p>
                      <span className='time_date'> 11:01 AM | Yesterday</span>
                    </div>
                  </div>
                </div>
                <div className='outgoing_msg'>
                  <div className='sent_msg'>
                    <p>Test which is a new approach to have all solutions</p>
                    <span className='time_date'> 11:01 AM | June 9</span>{' '}
                  </div>
                </div>
              </div>
              <div ref={messagesEndRef} />
            </div>
            <input
              className='form-control border-radius-0 message-type-input'
              placeholder='Type here...'
            />
            <i className='fas fa-paperclip message-type-attach'></i>
            <div className=' bg-primary message-type-button'>Send</div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );

  return (
    <div className=''>
      <Accordion className='custom-accordion shadow-8'>
        <Card className='custom-accordion-card'>
          <Accordion.Toggle
            as={Card.Header}
            eventKey='0'
            onClick={(e) => {
              arrowUpdate === 'down'
                ? setArrawUpdate('up')
                : setArrawUpdate('down');
            }}
          >
            Messaging
            <i className={`fa fa-angle-` + arrowUpdate} aria-hidden='true'></i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body className='p-0 '>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
              <div
                className='chat_list border-bottom'
                onClick={(e) => {
                  e.preventDefault();
                  handleSetIndiChat();
                }}
              >
                <div className='chat_people'>
                  <div className='chat_img'>
                    {' '}
                    <img src='/assets/image/user-profile.png' alt='Matt' />{' '}
                  </div>
                  <div className='chat_ib'>
                    <h5>
                      Matt Mardock <span className='chat_date'>Dec 25</span>
                    </h5>
                    <p>Test, which is a new approach to have...</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      {indiChat ? accordionChat : ''}
    </div>
  );
};

export default ChatList;
