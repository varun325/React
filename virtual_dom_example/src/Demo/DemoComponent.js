import {React,memo} from 'react';

const DemoComponent = (props)=>{
    console.log("Demo Evaluated");
    return <p>{props.show? 'This is new!':''}</p>

}

export default memo(DemoComponent);