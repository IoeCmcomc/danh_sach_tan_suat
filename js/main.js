requirejs.config({
    appDir: ".",
    baseUrl: "js",
    paths: {
        'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
        'bootstrap': 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min',
        'datatables' : 'https://cdn.datatables.net/v/bs5/dt-1.12.1/fh-3.2.4/datatables.min',
        'datatables-input' : 'https://cdn.datatables.net/plug-ins/1.12.1/pagination/input',
    },
    shim: {
        'bootstrap' : ['jquery'],
        'datatables' : ['jquery'],
        'datatables-input' : ['datatables'],
    },
    map: {
      '*': {
        'datatables.net': 'datatables',
        'datatables.net-input': 'datatables-input'
      }
    }
});

require(['jquery', 'bootstrap', 'datatables', 'datatables-input'], function($, _, DataTable) {
    console.log("Loaded.");
    $(function() {
        $('#main_table').DataTable({
            fixedHeader: true,
            language: {
                url: 'https://raw.githubusercontent.com/DataTables/Plugins/master/i18n/vi.json'
            },
            columnDefs: [
                {
                    target: 3,
                    render: DataTable.render.number(null, null, 6),
                },
                {
                    target: 4,
                    render: DataTable.render.number(null, null, 6),
                },
            ],
            pagingType: "input",
        });
    });
});