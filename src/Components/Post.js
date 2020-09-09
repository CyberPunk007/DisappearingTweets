import React from 'react';
import {Input , Button, Form} from 'antd';

const Post = () => (
    <div>
            {/* <Content margin='100px'> */}
                <Form
                {...layout}
                name="basic">
                </Form>
            <Form.Item label="Tweets here">
                <Input placeholder="What's on your mind!"/>
            </Form.Item>
            {/* </Content> */}

    </div>
    );

    export default Post