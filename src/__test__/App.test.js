import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import SimpleCalculator from "../components/SimpleCalculator";

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if(state) wrapper.setState(state)
    return wrapper;
};

const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

describe("<App />", () => {
    it('should in <App/> component tobe one h1', () =>{
        const wrapper = setup()
        expect(wrapper.find('h1').length).toBe(1)
    })

    it('Calc button Test', () => {
        const handleChangeSpy = jest.fn();
        const wrapper = shallow(<Input handleChange={handleChangeSpy} />);

        const event = { target: { value: 'aaa' } };
        wrapper.find('input').simulate('change', event);
        expect(handleChangeSpy).toHaveBeenCalledWith('aaa');
    });

});

