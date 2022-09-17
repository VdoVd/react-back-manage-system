import {useState} from 'react';
import {Form, Input} from "antd";

function Child(props) {
    props.SetText('传值')
    return (
        <div>
            <button onClick={event => props.handleClick(100)}>Click</button>
            <Form >
                <Form.Item>
                    <Input ></Input>
                </Form.Item>
            </Form>
        </div>
    );
}

 function Parent() {
    const [count, setCount] = useState(0);
    const [text,SetText]=useState('')
    const handleClick = num => {
        // 👇️ take parameter passed from Child component
        setCount(current => current + num);
    };

    console.log(text)
    return (
        <div>
            <Child handleClick={handleClick} SetText={SetText} />
            <h2>Count: {count}</h2>

        </div>
    );
}
export default Parent
