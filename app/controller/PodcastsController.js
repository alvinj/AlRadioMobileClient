Ext.define('RadioMobile.controller.PodcastsController', {
    extend: 'Ext.app.Controller',

    requires: [
        'VP.util.Util',
        'RadioMobile.view.PodcastsPanel',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],

    config: {
        stores: [
            'Podcasts'
        ],
        views: [
            'PodcastsPanel'
        ],
        // "In the refs configuration, you can set up references to view instances. 
        //     This allows you to retrieve and manipulate components on the page inside of your controller’s actions."
        // "refs create a reference to a component ... basically using Ext.ComponentQuery#down."
        // "put a reference to a view instance (component) inside of a controller."
        refs: {
            // localVarName : itemId
            podcastsPanel : 'podcastsPanel'
        },
        // this is different in touch; i use an `init` method in ExtJS
        control: {
            podcastsPanel: {
                // eventWeGetFromTheViewComponent : 'localFunctionName'
                'initialize': 'onPodcastsPanelBeforeRender'
            }
        },
    },

    onPodcastsPanelBeforeRender: function(panel, options) {
        var me = this;
        var podcastsStore = Ext.getStore("Podcasts");
        podcastsStore.load({
            callback: function(records, operation, success) {
                if (success === true) {
                    var fieldset = new Ext.form.FieldSet({});
                    podcastsStore.each(function(record) {
                        var filename = record.data.filename;
                        var radioField = Ext.create('Ext.field.Radio', {
                            name: 'podcast',
                            value: filename,
                            label: filename,
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
                    console.log('error: had a problem reading the podcastsStore');
                }
            }
        });
    },

    radioHandler: function(filename) {
        // console.log('YOU CLICKED: ' + filename);
        Ext.Ajax.request({
            url: '/server/playPodcast?podcastFilename=' + filename,
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






