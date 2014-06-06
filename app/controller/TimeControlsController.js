Ext.define('RadioMobile.controller.TimeControlsController', {
    extend: 'Ext.app.Controller',

    requires: [
        'RadioMobile.view.TimeControlsPanel',
        'VP.util.Util'
    ],

    config: {

        views: [
            'TimeControlsPanel'
        ],

        // loginButton: '#loginWindow button[action=login]',

        // localVarName : itemId
        refs: {
            timeControlsPanel:  'timeControlsPanel',
            volumeSlider:       '#timeControlsPanel #volumeSlider',
            btnPlayPause:       '#timeControlsPanel #btnPlayPause',
            btnBack30m:         '#timeControlsPanel #back30m',
            btnBack10m:         '#timeControlsPanel #back10m',
            btnBack5m:          '#timeControlsPanel #back5m',
            btnBack1m:          '#timeControlsPanel #back1m',
            btnBack10s:         '#timeControlsPanel #back10s',
            btnForward10s:      '#timeControlsPanel #forward10s',
            btnForward1m:       '#timeControlsPanel #forward1m',
            btnForward5m:       '#timeControlsPanel #forward5m',
            btnForward10m:      '#timeControlsPanel #forward10m',
            btnForward30m:      '#timeControlsPanel #forward30m'
        },

        // this is different in touch; i use an `init` method in ExtJS
        control: {
            volumeSlider:    { change: 'onVolumeSliderChange' },
            btnPlayPause:    { tap: 'onPlayPauseButtonTapped' },
            btnBack30m:      { tap: 'onBack30mTapped' },
            btnBack10m:      { tap: 'onBack10mTapped' },
            btnBack1m:       { tap: 'onBack1mTapped' },
            btnBack10s:      { tap: 'onBack10sTapped' },
            btnForward10s:   { tap: 'onForward10sTapped' },
            btnForward1m:    { tap: 'onForward1mTapped' },
            btnForward5m:    { tap: 'onForward5mTapped' },
            btnForward10m:   { tap: 'onForward10mTapped' },
            btnForward30m:   { tap: 'onForward30mTapped' }
        }

    },

    onBack30mTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '-1800' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onBack10mTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '-600' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onBack5mTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '-300' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onBack1mTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '-60' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onBack10sTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '-10' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onForward10sTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '+10' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onForward1mTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '+60' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onForward5mTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '+300' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onForward10mTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '+600' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onForward30mTapped: function(button, e, eOpts) {
        var encoded = Ext.urlEncode({ value: '+1800' });
        VP.util.Util.callRestUrl('/server/seek?' + encoded, 'GET');
    },

    onPlayPauseButtonTapped: function(button, e, eOpts) {
        Ext.Ajax.request({
            url: '/server/turnEverythingOff',
            method: 'GET',
            success: function(conn, response, options, eOpts) {
                var result = VP.util.Util.decodeJSON(conn.responseText);
                if (result.success) {
                    // console.log('SUCCESS!');
                } else {
                    // console.log('ERROR!');
                    VP.util.Util.showErrorMsg(result.msg);
                }
            },
            failure: function(conn, response, options, eOpts) {
                // TODO get the 'msg' from the json and display it
                VP.util.Util.showErrorMsg(conn.responseText);
            }
        });
    },

    onVolumeSliderChange: function(slider, thumb, newValue, oldValue, eOpts) {
        Ext.Ajax.request({
            url: '/server/setVolume?volume=' + newValue,
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







