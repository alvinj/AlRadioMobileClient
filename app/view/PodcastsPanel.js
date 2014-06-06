Ext.define('RadioMobile.view.PodcastsPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.podcastsPanel',

    config: {
        xtype: 'podcastsPanel',
        itemId: 'podcastsPanel',
        title: 'Podcasts',
        iconCls: 'team',

        scrollable: 'vertical',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Podcasts'
            }
        ],
    },

});







