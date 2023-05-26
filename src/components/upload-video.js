import { useState } from "react";

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [video, setVideo] = useState(null);

  const formData = new FormData();
  formData.append("video", video);
  formData.append("title", title);
  formData.append("desc", desc);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(video);
    fetch("http://localhost:8003/post/videos", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        const data = await response.json();
        console.log("successful", data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label>desc</label>
        <input type="text" onChange={(e) => setDesc(e.target.value)} />

        <input
          type="file"
          id="video"
          onChange={(e) => setVideo(e.target.files[0])}
          required
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default UploadVideo;
// Call the uploadVideo function when the form is submitted or any other relevant event
