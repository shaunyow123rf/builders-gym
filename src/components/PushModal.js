import { Modal } from 'react-bootstrap';

function PushModal(props) {
    const {
        title,
        body,
        img = 'https://assets-cdn.123rf.com/index/static/featured/Ivan%20Zamurovic.jpg',
        show = false,
        handleClose,
    } = props;

    return (
      <Modal
        show={show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Body style={{ textAlign: 'center' }}>
            <h4 style={{ paddingBottom: 10 }}>{title}</h4>

            <img src={img} width="300" alt="" />

            <p style={{ paddingTop: 15 }}>
                {body}
            </p>
            <button style={{ fontSize: 18, fontWeight: 700, padding: '10px 20px' }} className="btn btn-warning text-uppercase" type="button" onClick={handleClose}>Let's Go</button>
        </Modal.Body>
      </Modal>
    );
}
  
export default PushModal;
