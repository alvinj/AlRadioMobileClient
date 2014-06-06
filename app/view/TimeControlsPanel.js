Ext.define('RadioMobile.view.TimeControlsPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.timeControlsPanel',

    requires: [
        'Ext.TitleBar',
        'Ext.slider.Slider',
        'Ext.dataview.List'
    ],

    // fullscreen: true,
    config: {
        xtype: 'timeControlsPanel',
        itemId: 'timeControlsPanel',
        title: 'Controls',
        iconCls: 'settings',
        scrollable: 'vertical',

        layout: {
            type: 'vbox',
            align: 'stretch',
            pack: 'start'
        },

        // defaults: {
        //     flex: 1
        // },
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Controls'
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'justify'
                },
                flex: 1,     // flex vertical height
                defaults: {
                    xtype: 'button',
                    flex: 1, // flex row width (buttons in the row)
                },
                items: [
                    {
                        text: '-30m',
                        itemId: 'back30m'
                    },
                    {
                        text: '-10m',
                        itemId: 'back10m'
                    },
                    {
                        text: '-5m',
                        itemId: 'back5m',
                    },
                    {
                        text: '-1m',
                        itemId: 'back1m',
                    },
                    {
                        text: '-10s',
                        itemId: 'back10s',
                    },
                ]
            },

            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                flex: 1,
                defaults: {
                    xtype: 'button',
                    flex: 1, // flex row width (buttons in the row)
                },
                items: [
                    {
                        text: '>',
                        itemId: 'btnPlayPause',
                        tooltip: 'Play/Pause'
                    }
                ]
            },

            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                flex: 1,
                defaults: {
                    xtype: 'button',
                    flex: 1, // flex row width (buttons in the row)
                },
                items: [
                    {
                        text: '10s',
                        itemId: 'forward10s'
                    },
                    {
                        text: '1m',
                        itemId: 'forward1m',
                    },
                    {
                        text: '5m',
                        itemId: 'forward5m',
                    },
                    {
                        text: '10m',
                        itemId: 'forward10m',
                    },
                    {
                        text: '30m',
                        itemId: 'forward30m',
                    }
                ]
            },
            {
                xtype: 'slider',
                itemId: 'volumeSlider',
                flex: 0.7,
                // width: '100%',
                value: 60,
                increment: 5,
                minValue: 0,
                maxValue: 100,
                style: 'margin-top: 22px;',
                // margin: 10
            }
        ],

    },


});










