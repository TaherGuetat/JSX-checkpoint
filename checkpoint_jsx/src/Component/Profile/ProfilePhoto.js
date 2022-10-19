import { Card } from "react-bootstrap";
import img from "../../photo_profil.jpg";
export function ProfilePhoto() {
  return (
    <>
      <Card.Img variant="top" src={img} />

      {/* <img src={img} alt="" fluid rounded /> */}
    </>
  );
}
