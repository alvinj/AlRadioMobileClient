Ext.define('RadioMobile.controller.RadioStreamsController', {
    extend: 'Ext.app.Controller',

    requires: [
        'VP.util.Util',
        'RadioMobile.view.StreamsPanel',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],

    config: {
        stores: [
            'RadioStreams'
        ],
        views: [
            'StreamsPanel'
        ],
        // "In the refs configuration, you can set up references to view instances. 
        //     This allows you to retrieve and manipulate components on the page inside of your controller’s actions."
        // "refs create a reference to a component ... basically using Ext.ComponentQuery#down."
        // "put a reference to a view instance (component) inside of a controller."
        refs: {
            // localVarName : itemId
            streamsPanel : 'streamsPanel'
        },
        // this is different in touch; i use an `init` method in ExtJS
        control: {
            streamsPanel: {
                // eventWeGetFromTheViewComponent : 'localFunctionName'
                'initialize': 'onRadioStreamsPanelBeforeRender'
            }
        },
    },

    onRadioStreamsPanelBeforeRender: function(panel, options) {
        // console.log('ENTERED RadioStreamsController::onRadioStreamsPanelBeforeRender');
        var me = this;
        var radioStreamsStore = Ext.getStore("RadioStreams");
        radioStreamsStore.load({
            callback: function(records, operation, success) {
                if (success === true) {
                    var fieldset = new Ext.form.FieldSet({});
                    radioStreamsStore.each(function(record) {
                        var name = record.data.name;
                        // console.log('   stream: ' + name);
                        var radioField = Ext.create('Ext.field.Radio', {
                            name: 'radio_stream',
                            value: name,
                            label: name,
                            labelWidth: '80%',
                            labelWrap: true,
                            listeners: {
                                'check': function(radio, e, eOpts) {
                                    me.radioHandler(radio.getValue());
                                }
                            }
                        });
                        fieldset.add(radioField);
                    });
                    panel.add(fieldset);
                } else {
                    console.log('error: had a problem reading the radioStreamsStore');
                }
            }
        });
    },

    // onRadioStreamsPanelRender: function(panel, options) {
    //     // console.log("ENTERED onRadioStreamsPanelRender");
    // },

    // `radioValue` is like `104.3`
    radioHandler: function(radioValue) {
        // console.log('YOU CLICKED: ' + radioValue);
        Ext.Ajax.request({
            url: '/server/playStream?streamName=' + radioValue,
            method: 'GET',
            success: function(conn, response, options, eOpts) {
                var result = VP.util.Util.decodeJSON(conn.responseText);
                if (result.success) {
                    console.log('SUCCESS!');
                    // TODO change the button ui to indicate that the button is active
                } else {
                    console.log('ERROR!');
                    VP.util.Util.showErrorMsg(result.msg);
                }
            },
            failure: function(conn, response, options, eOpts) {
                // TODO get the 'msg' from the json and display it
                VP.util.Util.showErrorMsg(conn.responseText);
            }
        });
    }

});






