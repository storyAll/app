import React from 'react'
import TodoItem from '../todoItem'

class TodoList extends React.Component {
    constructor() {
        super();
        //改变函数内部this指向
        this.getInputValue=this.getInputValue.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.parentHandleDelete=this.parentHandleDelete.bind(this)

        //定义组件数据
        this.state = {
            list: [],
            value: ''
        }

    }
    /**
     *@desc 新增列表项
     *@param
     *@author 张冲
     *@date 2019/2/15 14:37
     */
    getTodoItems() {
        return(
            this.state.list.map((item, index) => {
                    console.log(index)
                    return (
                        <TodoItem
                            key={index}
                            content={item}
                            index={index}
                            handleDelete={this.parentHandleDelete}
                        />
                    )
                }
            )
        )

    }

    /**
     *@desc 父组件处理删除方法
     *@param index 子组件通过父组件定义的属性来传递参数
     *@author 张冲
     *@date 2019/2/15 16:09
     */
    parentHandleDelete(index){
        const list=[...this.state.list]
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    /**
     *@desc 获取输入框值
     *@param e 事件源
     *@author 张冲
     *@date 2019/2/15 14:44
     */
    getInputValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    /**
     *@desc 处理新增btn方法
     *@param
     *@author 张冲
     *@date 2019/2/15 14:42
     */
    handleClick() {
        if (this.state.value === '') {
            return
        }
        const list = [...this.state.list, this.state.value]
        console.log(list)
        this.setState({
            list: list,
            value: ''
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.getInputValue}/>
                <button onClick={this.handleClick}>新增</button>
                <ul>
                    {this.getTodoItems()}
                </ul>
            </div>
        );
    }
}

export default TodoList