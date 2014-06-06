Ext.define('RadioMobile.view.StreamsPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.streamsPanel',

    config: {
        xtype: 'streamsPanel',
        itemId: 'streamsPanel',

        // for the tab icon
        title: 'Streams',
        iconCls: 'organize',

        layout: {
            type: 'card'
        },

        scrollable: 'vertical',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Streams'
            }
        ],


    },

});







