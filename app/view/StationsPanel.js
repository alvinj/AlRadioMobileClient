Ext.define('RadioMobile.view.StationsPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.stationsPanel',

    requires: [
        'Ext.TitleBar'
    ],

    config: {
        xtype: 'stationsPanel',
        itemId: 'stationsPanel',
        title: 'Stations',
        iconCls: 'locate',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Stations'
            }
        ],

        // layout: {
        //     type: 'card'
        // },
        scrollable: 'vertical',

        // layout: {
        //     type: 'hbox',
        //     align: 'start',
        //     pack: 'start'
        // },

        // defaults: {
        //     xtype: 'button',
        // },

        // items: [
        //     {
        //         docked: 'top',
        //         xtype: 'titlebar',
        //         title: 'Controls'
        //     },
        //     {
        //         text: '30m',
        //         itemId: 'back30m'
        //     }
        // ],

        // items: [
        //     {
        //         xtype: 'list',
        //         itemId: 'stationsList',
        //         title: 'Stations',
        //         // store: {
        //         //     xtype: 'movieStore'
        //         // },
        //         itemTpl: '<p>Stations</p>',
        //         striped: true
        //     }
        // ],

        // listeners: [
        //     {
        //         delegate: '#movieList',    // where the data comes from?
        //         fn: 'onMovieListItemTap',  // local function/handler
        //         event: 'itemtap',          // event that triggers this function
        //     }
        // ]

    },

    // onMovieListItemTap: function (theList, index, target, record, e, eOpts) {
    //     // console.log('CurrentMoviesPanel::onMovieListItemTap called');
    //     this.fireEvent('MovieListItemTap', this);
    // },

    // initialize: function () {
    //     // console.log('ENTERED CurrentMoviesPanel::initialize');
    // }

});







