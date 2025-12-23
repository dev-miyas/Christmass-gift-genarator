import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Form from "../Components/Form";

function FormPage() {
  const { recipient } = useParams(); // get recipient from URL

  return (
    <>
      <Helmet>
        <title>Gift Form for {recipient}</title>
        <link rel="icon" type="image/png" href="../assets/images/fav-icon.jpg" />
      </Helmet>
      <Form recipient={recipient} /> {/* pass recipient to Form */}
    </>
  );
}

export default FormPage;
