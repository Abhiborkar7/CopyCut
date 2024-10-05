import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewText() {
  const { textCode } = useParams();
  const [text, setText] = useState("");
  useEffect(() => {
    try {
      axios.get(`/api/text/${textCode}`).then((response) => {
        console.log("Response from backend:", response.data);
        setText(response.data.text);
        console.log("Text:", text);
      });
    } catch (error) {
      setText("");
      console.error("Error fetching text:", error);
    }
  }, [textCode]);

  return textCode ? (
    <div>
      <pre>{text}</pre>
    </div>
  ) : (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
