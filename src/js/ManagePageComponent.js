import '../less/pageComponent.less';
import ComponentBaseFactory from './ComponentBase.js';

import ComponentPolyLineFactory from './ComponentPolyLine.js';
import ComponentPieFactory from './ComponentPie.js';
import ComponentBarFactory from './ComponentBar.js';


let ManageObj = {
    init (name) {
        this.oContainer = $('<div/>').addClass(name);
        this.oContainer.appendTo($('body')).hide(); 
        return this;       
    },
    addPage (name) {
        this.oPage = $('<div class="section"/>').addClass(name);
        this.oPage.appendTo(this.oContainer);
        this.addBottomComponent();
        return this;
    },
    addComponent(config = {type: 'Bar'}) {
        let Component = null;
        switch (config.type) {
            case "Poly": 
                    Component = ComponentPolyLineFactory(config);
                break;
            case "Pie": 
                    Component = ComponentPieFactory(config);
                break;
            case "Bar":
                    Component = ComponentBarFactory(config);
                break;
            case "base":
            default:
                    Component = ComponentBaseFactory(config);   
        }
        this.oPage.append(Component);
        return this;
    },
    addBottomComponent () {
        this.addComponent({
            height: 40,
            text: '835650053@qq.com-cst',
            css: {
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                textAlign: 'center',
                lineHeight: '20px',
                color: '#fff',
                background: '#000',
                opacity: 0,
            },
            animateIn: {
                opacity: 0.5,
                bottom: 0, 
            },
            animateOut: {
                opacity: 0,
                bottom: -50,
            }
        })
    },
    load () {
        this.oContainer.show();

        this.oContainer.fullpage({
            onLeave (index, nextIndex, direction) {
                $('.section').eq(index - 1).trigger('onLeave');
            },
            afterLoad (achorLink, index) {
                $('.section').eq(index - 1).trigger('onLoad');
            }
        });

        $('.section').on('onLeave', (e) => {
            $(e.target).find('.ComponentBase').trigger('cpLeave');
        });
        $('.section').on('onLoad', (e) => {
            $(e.target).find('.ComponentBase').trigger('cpLoad');
        })

        $('.section').eq(0).trigger('onLoad');
    }
}

export default ManageObj;