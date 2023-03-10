import { useRef } from "react";
import { Stack,Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from 'react-select/creatable'

export default function NoteForm() {
  const titleRef = useRef<HTMLInputElement>(null)
  return( 
  <Form>
    <Stack gap={4}>
      <Row>
        <Col>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control required/>
          </Form.Group>
        </Col>
        <Col>
           <Form.Group controlId="tags">
             <Form.Label>Tags</Form.Label>
             <CreatableReactSelect isMulti />
           </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" rows={15} />
      </Form.Group>
      <Stack direction="horizontal" gap={2} className="justify-content-end">
        <Button type="submit" variant="outline-secondary">Save</Button>
        <Link to="..">
          <Button type="button" variant="outline-secondary">Cancel</Button>
        </Link>
      </Stack>
    </Stack>
  </Form>);
}
