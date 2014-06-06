Ext.define('RadioMobile.store.RadioStreams', {
    extend: 'Ext.data.Store',
    requires: 'RadioMobile.model.RadioStream',

    config: {
        model: 'RadioMobile.model.RadioStream',
        proxy: {
            type: 'ajax',
            url: '/server/getRadioStreams',
            method: 'GET',
            reader: {
                type: 'json'
                //root: 'results'
            },
            // get these variables out of the GET url
            noCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
        }
    }


});

