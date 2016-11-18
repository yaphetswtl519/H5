import './jqUI.js';
import './jqFP.js';

import ManageObj from './ManagePageComponent.js';


ManageObj
        .init('wrapper')
            .addPage('index')
                .addComponent({
                    width: 428,
                    height: 92,
                    center: true,
                    css: {
                        position: 'absolute',
                        top: -10,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/logoIndex.png)'
                    },
                    animateIn: {
                        top: 100,
                        opacity: 1
                    },
                    animateOut: {
                        top: -10,
                        opacity: 0
                    },
                    delay: 200
                })
                .addComponent({
                    name: 'shake',
                    width: 370,
                    height: 96,
                    center: true,
                    css: {
                        position: 'absolute',
                        top: 220,
                        left: 0,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/slogan.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        left: '50%'
                    },
                    animateOut: {
                        left: 0,
                        opacity: 0
                    },
                    delay: 800
                })
                .addComponent({
                    width: 346,
                    height: 494,
                    css: {
                        position: 'absolute',
                        bottom: -10,
                        left: -20,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/left.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        left: 0,
                        bottom: 0
                    },
                    animateOut: {
                        opacity: 0,
                        left: -20,
                        bottom: -10,
                    },
                    delay: 1200
                })
                .addComponent({
                    width: 324,
                    height: 450,
                    css: {
                        position: 'absolute',
                        right: -20,
                        bottom: -10,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/right.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        right: 0,
                        bottom: 0,
                    },
                    animateOut: {
                        right: -20,
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 1600
                })
/*-------------------------------------------------------------------------*/

            .addPage()
                .addComponent({
                    width: 500,
                    height: 124,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./src/img/mind.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 60
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 200
                })
                .addComponent({
                    width: 500,
                    height: 50,
                    text: '用实力落地!',
                    center: true,
                    css: {
                        position: 'absolute',
                        top: 0,
                        opacity: 0,
                        lineHeight: '30px',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: '26px',
                        color: 'orange'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 150
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 600
                })
                .addComponent({
                    width: 522,
                    height: 336,
                    text: ' 在成哥 邓哥 彤哥的带领下大踏步的，Dream Family, web coffee 与今年正式成立',
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./src/img/dialog.png)',
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        fontWeight: '900',
                        lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 240,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 1000
                })
                .addComponent({
                    width: 516,
                    height: 306,
                    center: true,
                    css: {
                        position: 'absolute',
                        bottom: -10,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/people.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        right: 0,
                        bottom: 20,
                    },
                    animateOut: {
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 1400
                })         
            .addPage()
                .addComponent({
                    width: 500,
                    height: 124,
                    css: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/bar.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 60
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 200
                })  
                .addComponent({
                    width: 516,
                    height: 306,
                    center: true,
                    text: '能力柱状图',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        lineHeight: '30px',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: '26px',
                        color: 'red'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 200
                    },
                    animateOut: {
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 600
                })  
                .addComponent({
                    type: 'Bar',
                    width: 500,
                    height: 300,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        bottom: 0,
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: 200
                    },
                    animateOut: {
                        bottom: 0,
                        opacity: 0
                    },
                    data: [
                        ['js', 0.3, '#ac6678'],
                        ['h5', 0.2, '#9898aa'],
                        ['css3', 0.2, '#127aa9'],
                        ['jQ', 0.1, '#45aac1'],
                        ['rt', 0.2, '#cb1233']
                    ],
                    delay: 1000
                })  
            .addPage()
                .addComponent({
                    width: 500,
                    height: 126,
                    css: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/polyline.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 60
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 200
                })  
                .addComponent({
                    width: 500,
                    height: 306,
                    center: true,
                    text: '能力折线图',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        lineHeight: '30px',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: '26px',
                        color: 'red'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 200
                    },
                    animateOut: {
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 600
                })  
                .addComponent({
                    type: 'Poly',
                    width: 500,
                    height: 500,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        bottom: 0,
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: 100
                    },
                    animateOut: {
                        bottom: 0,
                        opacity: 0
                    },
                    data: [
                        ['js', 0.3, '#ac6678'],
                        ['h5', 0.2, '#9898aa'],
                        ['css3', 0.2, '#127aa9'],
                        ['jQ', 0.1, '#45aac1'],
                        ['rt', 0.2, '#cb1233']
                    ],
                    delay: 1000
                })  
            .addPage()
                .addComponent({
                    width: 500,
                    height: 126,
                    css: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/pie.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 60
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 200
                })  
                .addComponent({
                    width: 500,
                    height: 306,
                    center: true,
                    text: '能力饼图',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        lineHeight: '30px',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: '26px',
                        color: 'red'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 200
                    },
                    animateOut: {
                        bottom: -10,
                        opacity: 0
                    },
                    delay: 600
                })  
                .addComponent({
                    type: 'Pie',
                    width: 500,
                    height: 500,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        bottom: 0,
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: 100
                    },
                    animateOut: {
                        bottom: 0,
                        opacity: 0
                    },
                    data: [
                        ['js', 0.3, '#ac6678'],
                        ['h5', 0.2, '#9898aa'],
                        ['css3', 0.2, '#127aa9'],
                        ['jQ', 0.1, '#45aac1'],
                        ['rt', 0.2, '#cb1233']
                    ],
                    delay: 1000
                })  
            .addPage()
                .addComponent({
                    name: 'back',
                    width: 48,
                    height: 26,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./src/img/back.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 30
                    },
                    animateOut: {                
                        opacity: 0,
                        top: 0
                    },
                    event: {
                        click: () => {
                            console.log(ManageObj.oContainer)
                            console.log(ManageObj.oContainer.fullpage.moveTo);
                            ManageObj.oContainer.fullpage.moveTo(1);
                        }               
                    },
                    delay: 200
                })
                .addComponent({
                    width: 128,
                    height: 120,
                    css: {
                        position: 'absolute',
                        top: 100,
                        right: 50,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/share.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 0,
                        right: 0
                    },
                    animateOut: {
                        opacity: 0,
                        top: 100,
                        right: 0
                    },
                    delay: 600
                })
                .addComponent({
                    name: 'shake',
                    width: 428,
                    height: 92,
                    center: true,
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        backgroundImage: 'url(./src/img/logo.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 250,
                    },
                    animateOut: {                    
                        opacity: 0,
                        top: 0
                    },
                    delay: 1000
                })
                .addComponent({
                    width: 370,
                    height: 96,
                    center: true,
                    css: {
                        position: 'absolute',
                        bottom: 180,
                        left: 0,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/slogan.png)'
                    },
                    animateIn: {
                        opacity: 1,
                        left: '50%',
                    },
                    animateOut: {
                        left: 0,
                        opacity: 0
                    },
                    delay: 800
                })
        .load();









