Ext.define('RadioMobile.store.Podcasts', {
    extend: 'Ext.data.Store',

    // fields: [
    //     {name: 'filename'}
    // ],

    requires: 'RadioMobile.model.Podcast',

    config: {
        model: 'RadioMobile.model.Podcast',

        proxy: {
            type: 'ajax',
            url: '/server/getPodcasts',
            method: 'GET',
            reader: {
                type: 'json'
            },
            noCache: true,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined
        },
    }

});