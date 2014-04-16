Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},


    launch: function() {
        this._loadData();
    },

    // Get data from Rally
    _loadData: function() {
         var myStore = Ext.create('Rally.data.wsapi.Store', {
            autoLoad: true,
            model: 'User Story',
            listeners: {
                load: function(myStore, myData, success) {
                    console.log('got data!', myStore, myData, success);
                    this._loadGrid(myStore);
                },
                scope: this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    },

    // Create and show a Grid of given stories
    _loadGrid: function(myStoryStore) {
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store: myStoryStore,
            columnCfgs: [
                'FormattedID', 'Name', 'ScheduleState'
            ]
        });

        this.add(myGrid);
        console.log('this', this);
   }
});
