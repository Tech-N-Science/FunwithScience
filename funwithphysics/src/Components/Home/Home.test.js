// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Home from './Home'
import {shallow} from 'enzyme'

describe ("main HTML element checque", ()=>{

    it('object check',()=>{
        let wrapper=shallow(<Home/>)
        expect(wrapper.exists('.banner')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Home/>)
        expect(wrapper.exists('.banner_container')).toEqual(true);
    })


    it('object check',()=>{
        let wrapper=shallow(<Home/>)
        expect(wrapper.exists('.blur-background')).toEqual(true);
    })


    it('object check',()=>{
        let wrapper=shallow(<Home/>)
        expect(wrapper.exists('.banner_button')).toEqual(true);
    })


    it('object check',()=>{
        let wrapper=shallow(<Home/>)
        expect(wrapper.exists('.btn btn-light')).toEqual(true);
    })


    it('object check',()=>{
        let wrapper=shallow(<Home/>)
        expect(wrapper.exists('.fas fa-book-reader')).toEqual(true);
    })


    it('object check',()=>{
        let wrapper=shallow(<Home/>)
        expect(wrapper.exists('.gotopbtn')).toEqual(true);
    })


    it('object check',()=>{
        let wrapper=shallow(<Home/>)
        expect(wrapper.exists('.fas fa-arrow-up flexMe')).toEqual(true);
    })

   
})
