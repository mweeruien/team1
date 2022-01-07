import { Button } from "../../Navbar/Button";
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function SignUpForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please fill up this form to create an account.</p>
        <form>
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required />
          <br/>

          <label for="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />
          <br/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <br/>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
          <br/>
          <button type="submit" class="signup">Sign Up</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignUpForm;
