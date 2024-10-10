import React, { useState } from 'react';
import { Button, Form, Input } from 'antd'; 
import { UserOutlined, TagOutlined } from '@ant-design/icons'; 
import { EditorState ,convertToRaw} from 'draft-js'; // Draft.js editor state
import { Editor } from 'react-draft-wysiwyg'; // WYSIWYG Editor component

// draft to hmtl page download npm install draftjs-to-html
import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Importing the editor's CSS
import './CreateBlog.css'; 
import axios from 'axios';


// CreateBlog Component
const CreateBlog = () => {


  /*==============(Image Store)===========*/
  const [imageFile, setImageFile] = useState(null);
  
  const [description,setDescription] = useState("");

  // State to manage the WYSIWYG editor content
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Ant Design's Form hook
  const [form] = Form.useForm();

  // Function to handle the editor state change
  const onEditorStateChange = (newState) => {
    setEditorState(newState); 
    form.setFieldsValue({
      content: newState.getCurrentContent().getPlainText(),
    });
    const rawData = convertToRaw(newState.getCurrentContent());
    let html = draftToHtml(rawData);
    setDescription(html);
  };

  /*==========( Function to handle form submission )===============*/
  const onFinish = async(values) => {
 
    console.log(values);

     try {
          const response = await axios.post('http://localhost:14261/user/createBlog', {
          title: values.title,
          description: description,
          tags: values.tags,
          image:imageFile
         },
         {
            headers: {
                'Content-Type': 'multipart/form-data',  // Set the content type for file uploads
              },
          });
           // After successful form submission, reset the form and editor
          form.resetFields();
          setEditorState(EditorState.createEmpty()); // Reset editor
          setImageFile(null); // Clear image file stat
   
          } 
     catch (error) {
         console.log(error);
         
      }


  };
  /*==========( Function to handle form submission )===============*/

  // Function to handle form submission failure
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo); 
  };

 
  /*=============(HandleImageChange start)==============*/
  
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setImageFile(file); 
    console.log('Selected file:', file); 
  }

  /*=============(HandleImageChange end)==============*/



  return (
    <div className="container">
      <div className="form-container">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }} 
          wrapperCol={{ span: 16 }} 
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed} 
          autoComplete="off"
        >
          {/*======(Username Input Field)=========*/}
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true, 
                message: 'Please input your title!', 
              },
            ]}
          >
            <Input
              placeholder="Enter your title" 
              prefix={<UserOutlined />} 
            />
          </Form.Item>

          {/*============(Tags Input Field) ===========*/}
          <Form.Item
            label="Tags"
            name="tags"
          >
            <Input
              placeholder="Enter tags (comma separated)" 
              prefix={<TagOutlined />} 
            />
          </Form.Item>

          {/*============(Image Input Field) ===========*/}
         
            <input type="file" onChange={handleImageChange} />
         

          {/*==============(WYSIWYG Editor start)========*/}
          <Form.Item
            label="Content"
            name="content"
            rules={[
              {
                required: true, 
                message: 'Please enter the content!', 
              },
            ]}
          >
            <div className="editor-container">
              <Editor
                editorState={editorState} 
                wrapperClassName="demo-wrapper" 
                editorClassName="demo-editor" 
                onEditorStateChange={onEditorStateChange} 
                placeholder="Write your blog content here..."
              />
            </div>
          </Form.Item>
          {/*==============(WYSIWYG Editor end)========*/}
          {/* =============(Submit Button start)================ */}
          <Form.Item
            wrapperCol={{
              offset: 8, // Offset to align the button
              span: 16, // Span for button layout
            }}
          >
            <Button type="primary" htmlType="submit" className="submit-button">
              Submit
            </Button>
          </Form.Item>
          {/* =============(Submit Button end)================ */}
        </Form>
      </div>
    </div>
  );
};

export default CreateBlog;
