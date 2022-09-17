const Son = (props)=>{
    // 也可以通过解构对象直接取出值
    const { value } = props;
    const {msg}=props;
    return (
        <div>
            <span>我是孩子组件: 这是我从父组件接收到的值：{msg}{value}</span>
        </div>
    )
}
export default Son
