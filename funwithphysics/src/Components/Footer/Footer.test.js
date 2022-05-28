// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Footer from './Footer'
import {shallow} from 'enzyme'

describe ("main HTML element checque", ()=>{

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.main-content')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.center1 box')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.fas fa-user')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.contact')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.center box')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.fab fa-facebook-f')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.fab fa-twitter')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.fab fa-instagram')).toEqual(true);
    })


    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.fab fa-linkedin-in')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.fas fa-map-marker-alt')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.email')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.bottom')).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.exists('.far fa-copyright')).toEqual(true);
    })
})


describe ("links and copywright verification", ()=>{
    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.contains(<span className="text">
        Anand Arcade,Block C(G-4),MSR Layout,Chandrampalem,VSKP,AP-48
      </span>)).toEqual(true);
    })

    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.contains(<span className="text">support@technscience.com</span>)).toEqual(true);
    })


    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.contains(<span> 2022 All rights reserved.</span>)).toEqual(true);
    })


    it('object check',()=>{
        let wrapper=shallow(<Footer/>)
        expect(wrapper.contains(<span> 2022 All rights reserved.</span>)).toEqual(true);
    })
})



