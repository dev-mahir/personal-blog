import Editor from '@/components/CkEditor/Editor'
import Jodit from '@/components/Jodit/Jodit'
import React, { useEffect, useState } from 'react'

const CreatePost = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  console.log(data);

  return (
    <div>

      <Editor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />


    </div>
  )
}

export default CreatePost