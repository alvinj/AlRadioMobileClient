Ext.define('RadioMobile.store.RecordedStreams', {
    extend: 'Ext.data.Store',

    requires: 'RadioMobile.model.RecordedStream',

    config: {
        model: 'RadioMobile.model.RecordedStream',
        proxy: {
            type: 'ajax',
            url: '/server/getRecordings',
            method: 'GET',
            reader: {
                type: 'json'
            },
            noCache: true,
            // limitParam: undefined,
            // pageParam: undefined,
            // startParam: undefined
        },
    }

});

