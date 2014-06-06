Ext.define('RadioMobile.view.RecordingsPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.recordingsPanel',

    config: {
        xtype: 'recordingsPanel',
        itemId: 'recordingsPanel',
        title: 'Recordings',
        iconCls: 'time',

        scrollable: 'vertical',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Recordings'
            }
        ],

    },

});







