import React from 'react'

class TodoItem extends React.Component{

    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this)
    }

    /**
     *@desc 通过属性向父组件传递参数
     *@param
     *@author 张冲
     *@date 2019/2/15 16:19
     */
    handleDelete(){
        this.props.handleDelete(this.props.index)//相当于调用父组件删除处理函数
    }
    render() {
        const {index}=this.props
        const {content}=this.props
        return (
            <li index={index} onClick={this.handleDelete}>{content}</li>
        );
    }
}
export default TodoItem