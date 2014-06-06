Ext.define('RadioMobile.store.RadioStations', {
    extend: 'Ext.data.Store',
    requires: 'RadioMobile.model.RadioStation',

    config: {
        model: 'RadioMobile.model.RadioStation',

        proxy: {
            type: 'ajax',
            url: '/server/getRadioStations',
            method: 'GET',
            reader: {
                type: 'json'
            },
            // get these variables out of the GET url
            noCache: false,
            limitParam: undefined,
            pageParam: undefined,
            startParam: undefined,
        }
    }

});

