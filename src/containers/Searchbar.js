import React from 'react';
import {Button,Form,Input} from 'antd';
import { connect } from 'react-redux';

import Wrapper from './styledComponents/Wrapper';
import Types from '../sagas/types';

const Searchbar = (props) => {

    const layout = {
        labelCol: { span: 16 },
        wrapperCol: { span: 16 },
    };


    return(
        <React.Fragment>
            <Wrapper>
                <Form 
                    {...layout} 
                    layout='inline' 
                    onFinish={(values)=>props.onSearch(values.search,props.history)}
                    size='large'
                >
                    <Form.Item
                        label="Search iTunes"
                        name="search"
                        rules={[{ required: true, message: 'Search iTunes' }]}
                    >
                        <Input style={{border:'solid black 1px'}} placeholder='Search...'/>
                    </Form.Item>
                </Form>
            </Wrapper>
            <hr/>
        </React.Fragment>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (searchQuery,history) => {
            dispatch({type:Types.FETCH_REQUESTED,payload:searchQuery});
            history.push('/search');
        }
    }
}


export default connect(null,mapDispatchToProps)(Searchbar);