Ext.define('RadioMobile.controller.RecordedStreamsController', {
    extend: 'Ext.app.Controller',

    requires: [
        'VP.util.Util',
        'RadioMobile.view.RecordingsPanel',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],

    config: {
        stores: [
            'RecordedStreams'
        ],
        views: [
            'RecordingsPanel'
        ],
        // "In the refs configuration, you can set up references to view instances. 
        //     This allows you to retrieve and manipulate components on the page inside of your controller’s actions."
        // "refs create a reference to a component ... basically using Ext.ComponentQuery#down."
        // "put a reference to a view instance (component) inside of a controller."
        refs: {
            // localVarName : itemId
            recordingsPanel : 'recordingsPanel'
        },
        // this is different in touch; i use an `init` method in ExtJS
        control: {
            recordingsPanel: {
                // eventWeGetFromTheViewComponent : 'localFunctionName'
                'initialize': 'onRecordedStreamsPanelBeforeRender'
            }
        },
    },

    onRecordedStreamsPanelBeforeRender: function(panel, options) {
        // console.log('ENTERED RecordedStreamsController::onRecordedStreamsPanelBeforeRender');
        var me = this;
        var recordedStreamsStore = Ext.getStore("RecordedStreams");
        recordedStreamsStore.load({
            callback: function(records, operation, success) {
                if (success === true) {
                    var fieldset = new Ext.form.FieldSet({});
                    recordedStreamsStore.each(function(record) {
                        var filename = record.data.filename;
                        // console.log('   stream: ' + filename);
                        var radioField = Ext.create('Ext.field.Radio', {
                            name: 'recorded_stream',
                            value: filename,
                            label: filename,
                            labelWrap: true,
                            labelWidth: '80%',
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
                    console.log('error: had a problem reading the recordedStreamsStore');
                }
            }
        });
    },

    // `radioValue` is like `104.3` (or in this case a filename)
    radioHandler: function(radioValue) {
        // console.log('YOU CLICKED: ' + radioValue);
        var encodedFilename = Ext.urlEncode({ recordingFilename: radioValue });
        Ext.Ajax.request({
            url: '/server/playRecording?' + encodedFilename,
            method: 'GET',
            success: function(conn, response, options, eOpts) {
                var result = VP.util.Util.decodeJSON(conn.responseText);
                if (result.success) {
                    // ignore
                } else {
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






