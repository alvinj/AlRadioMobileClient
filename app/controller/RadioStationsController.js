Ext.define('RadioMobile.controller.RadioStationsController', {
    extend: 'Ext.app.Controller',

    requires: [
        'VP.util.Util',
        'RadioMobile.view.StationsPanel',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],

    config: {
        stores: [
            'RadioStations'
        ],
        views: [
            'StationsPanel'
        ],
        // "In the refs configuration, you can set up references to view instances. 
        //     This allows you to retrieve and manipulate components on the page inside of your controller’s actions."
        // "refs create a reference to a component ... basically using Ext.ComponentQuery#down."
        // "put a reference to a view instance (component) inside of a controller."
        refs: {
            // localVarName : itemId
            stationsPanel : 'stationsPanel'
        },
        // this is different in touch; i use an `init` method in ExtJS
        control: {
            stationsPanel: {
                // eventWeGetFromTheViewComponent : 'localFunctionName'
                'initialize': 'onRadioStationsPanelBeforeRender'
            }
        },
    },

    onRadioStationsPanelBeforeRender: function(panel, options) {
        var me = this;
        var radioStationsStore = Ext.getStore("RadioStations");
        radioStationsStore.load({
            callback: function(records, operation, success) {
                if (success === true) {
                    var fieldset = new Ext.form.FieldSet({});
                    radioStationsStore.each(function(record) {
                        var number = record.data.number;
                        var description = record.data.description;
                        var radioField = Ext.create('Ext.field.Radio', {
                            name: 'radio_station',
                            value: number,
                            label: number,
                            labelWidth: '50%',
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
                    console.log('error: had a problem reading the radioStationsStore');
                }
            }
        });
    },

    // onRadioStationsPanelRender: function(panel, options) {
    //     // console.log("ENTERED onRadioStationsPanelRender");
    // },

    // `radioValue` is like `104.3`
    radioHandler: function(radioValue) {
        // console.log('YOU CLICKED: ' + radioValue);
        Ext.Ajax.request({
            url: '/server/tuneRadio?station=' + radioValue,
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






