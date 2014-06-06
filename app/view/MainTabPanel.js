/**
 * This is the main 'tab' panel for the mobile application.
 * It serves as a container for the other panels in the application.
 */
Ext.define('RadioMobile.view.MainTabPanel', {
    extend: 'Ext.tab.Panel',

    xtype:  'mainTabPanel',
    alias:  'widget.mainTabPanel',

    requires: [
        'RadioMobile.view.TimeControlsPanel',
        'RadioMobile.view.StationsPanel',
        'RadioMobile.view.StreamsPanel',
        'RadioMobile.view.RecordingsPanel',
        'RadioMobile.view.PodcastsPanel'
    ],

    config: {
        fullscreen : true,
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        }
    },

    initialize: function() {
        this.callParent(arguments);
        // the main panels that will show up in the bottom toolbar
        this.add(Ext.create('RadioMobile.view.TimeControlsPanel'));
        this.add(Ext.create('RadioMobile.view.StationsPanel'));
        this.add(Ext.create('RadioMobile.view.StreamsPanel'));
        this.add(Ext.create('RadioMobile.view.RecordingsPanel'));
        this.add(Ext.create('RadioMobile.view.PodcastsPanel'));
        this.setActiveItem(0);
    }

});













