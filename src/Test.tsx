import React from 'react';

interface TestProps extends React.Props<any> {

}

interface TestState {

}

export default class Test extends React.Component<TestProps, TestState>{
    render() {
        return (
            <div>Hello, world</div>
        )
    }
}